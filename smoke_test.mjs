async function testRoute(name, url) {
    try {
        const res = await fetch(url);
        console.log(`[${name}] ${url} - Status: ${res.status} ${res.ok ? '✅' : '❌'}`);
        if (res.ok) {
            const text = await res.text();
            console.log(`   Content Length: ${text.length}`);
            if (text.toLowerCase().includes('yesbroker')) {
                console.log(`   Brand check: "YesBroker" found ✅`);
            } else {
                console.log(`   Brand check: "YesBroker" NOT found ⚠️`);
            }
        }
    } catch (e) {
        console.log(`[${name}] ${url} - Error: ${e.message} ❌`);
    }
}

async function runTests() {
    const base = 'http://localhost:3000';
    await testRoute('Home', `${base}/`);
    await testRoute('Search Results', `${base}/homes`);
    await testRoute('Login', `${base}/login`);
    await testRoute('Dashboard', `${base}/dashboard`);
    await testRoute('Add Property', `${base}/dashboard/add-property`);
    await testRoute('Public Profile (Dummy ID)', `${base}/p/broker123`);
}

runTests().catch(console.error);
