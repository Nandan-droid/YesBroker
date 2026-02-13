import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'Nandan-droid';
const REPO_NAME = 'YesBroker';
const BRANCH = 'main';

if (!GITHUB_TOKEN) {
    console.error('Error: GITHUB_TOKEN environment variable is not set.');
    process.exit(1);
}

const EXCLUDE_DIRS = ['node_modules', '.next', '.git'];

async function getFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (EXCLUDE_DIRS.includes(file)) continue;
        if (fs.statSync(filePath).isDirectory()) {
            await getFiles(filePath, allFiles);
        } else {
            allFiles.push(filePath);
        }
    }
    return allFiles;
}

async function uploadFile(filePath, repoPath) {
    const content = fs.readFileSync(filePath);
    const base64Content = content.toString('base64');

    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${repoPath}`;

    // Check if file exists to get SHA (for update)
    let sha;
    try {
        const getResponse = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        if (getResponse.ok) {
            const data = await getResponse.json();
            sha = data.sha;
        }
    } catch (e) {
        // Ignore error, might be 404
    }

    const body = {
        message: `Upload ${repoPath}`,
        content: base64Content,
        branch: BRANCH
    };
    if (sha) body.sha = sha;

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        console.log(`Successfully uploaded: ${repoPath}`);
    } else {
        const errorData = await response.json();
        console.error(`Failed to upload ${repoPath}:`, errorData.message);
    }
}

async function run() {
    const projectDir = process.cwd();
    const files = await getFiles(projectDir);

    for (const file of files) {
        const repoPath = path.relative(projectDir, file).replace(/\\/g, '/');
        if (repoPath === 'upload_to_github.mjs') continue;
        await uploadFile(file, repoPath);
    }
}

run().catch(console.error);
