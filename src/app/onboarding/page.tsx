"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function OnboardingPage() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex font-sans">
            {/* Left side: Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-[480px] space-y-10">
                    <div className="space-y-2">
                        <div className="lg:hidden mb-8">
                            <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center rotate-3">
                                <Layers className="w-7 h-7" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter text-[#111827]">Get Started</h1>
                        <p className="text-lg text-muted-foreground">Join 500+ premium brokers in India.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#374151]">First Name</label>
                                <Input placeholder="Rahul" className="h-12 rounded-xl bg-muted/30 border-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[#374151]">Last Name</label>
                                <Input placeholder="Sharma" className="h-12 rounded-xl bg-muted/30 border-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#374151]">Email</label>
                            <Input type="email" placeholder="rahul@example.com" className="h-12 rounded-xl bg-muted/30 border-none" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#374151]">WhatsApp Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">+91</span>
                                <Input placeholder="98765 43210" className="h-12 pl-14 rounded-xl bg-muted/30 border-none" />
                            </div>
                        </div>

                        <Button className="w-full h-14 rounded-xl text-lg font-bold shadow-xl shadow-primary/20 group" asChild>
                            <Link href="/dashboard">
                                Create My Portfolio <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link href="#" className="underline font-medium hover:text-primary">Terms of Service</Link> and{" "}
                        <Link href="#" className="underline font-medium hover:text-primary">Privacy Policy</Link>.
                    </p>
                </div>
            </div>

            {/* Right side: Social Proof / Features (Visible on desktop) */}
            <div className="hidden lg:flex flex-1 bg-primary p-12 text-white flex-col justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center rotate-3 shadow-xl">
                        <Layers className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter">Yes<span className="text-white italic">Broker</span></span>
                </div>

                <div className="space-y-8 max-w-lg">
                    <h2 className="text-5xl font-bold leading-tight">Elevate your brand with a digital portfolio.</h2>
                    <ul className="space-y-4">
                        <FeatureItem text="Unlimited property listings" />
                        <FeatureItem text="Instant WhatsApp lead notification" />
                        <FeatureItem text="Detailed visitor analytics" />
                        <FeatureItem text="Professional Mumbai-ready theme" />
                    </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <p className="text-xl italic font-medium mb-4">
                        "Using YesBroker changed how my clients see me. I closed 3 deals in my first week just by sharing my profile link."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 border border-white/10" />
                        <div>
                            <p className="font-bold">Rahul Malhotra</p>
                            <p className="text-sm opacity-70">Independent Broker, South Mumbai</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-white/50" />
            <span className="text-lg font-medium">{text}</span>
        </li>
    );
}
