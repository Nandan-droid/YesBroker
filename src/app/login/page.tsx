"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers, ArrowRight, Github } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-[440px] space-y-8">
                {/* Logo */}
                <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center rotate-3 shadow-2xl shadow-primary/30">
                        <Layers className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tighter text-[#111827]">Yes<span className="text-primary italic">Broker</span></h1>
                    <p className="text-muted-foreground">Sign in to manage your real estate portfolio</p>
                </div>

                {/* Card */}
                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-border/50 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#374151]">Email address</label>
                            <Input
                                type="email"
                                placeholder="name@company.com"
                                className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-[#374151]">Password</label>
                                <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</Link>
                            </div>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary"
                            />
                        </div>
                    </div>

                    <Button className="w-full h-12 rounded-xl text-md font-bold shadow-lg shadow-primary/20 group" asChild>
                        <Link href="/dashboard">
                            Sign in <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/50"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-4 text-muted-foreground font-medium">Or continue with</span>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full h-12 rounded-xl border-border/50 font-semibold">
                        <img src="https://www.google.com/favicon.ico" className="w-4 h-4 mr-2" alt="Google" />
                        Google
                    </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/onboarding" className="font-bold text-primary hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}
