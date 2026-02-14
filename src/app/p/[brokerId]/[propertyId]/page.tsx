"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    Share2,
    MapPin,
    IndianRupee,
    ShieldCheck,
    Maximize2,
    Compass,
    Box,
    MessageCircle,
    Phone,
    Layers,
    CheckCircle2,
    Calendar,
    Sparkles,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function PropertyDetailPage({ params }: { params: Promise<{ brokerId: string, propertyId: string }> }) {
    const { brokerId, propertyId } = use(params);

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans pb-32">
            {/* Header Sticky */}
            <nav className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-xl border-b border-border/50 z-50 px-6">
                <div className="max-w-5xl mx-auto h-full flex items-center justify-between">
                    <Link
                        href={`/p/${brokerId}`}
                        className="group flex items-center gap-2 text-sm font-black uppercase tracking-tighter hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>
                    <div className="text-lg font-black tracking-tighter hidden md:flex items-center gap-2">
                        <Layers className="text-primary w-5 h-5" />
                        <span className="text-[#111827]">Yes<span className="text-primary italic">Broker</span></span>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="rounded-full h-10 w-10 p-0 border-border/50">
                            <Share2 size={18} />
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 pt-32 space-y-12">
                {/* Hero Feature Image */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[60vh]">
                    <div className="md:col-span-8 bg-muted rounded-[48px] overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80"
                            alt="Property Hero"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                            <Sparkles className="text-primary w-5 h-5" />
                            <span className="text-sm font-black text-[#111827]">Verified Exclusive</span>
                        </div>
                    </div>
                    <div className="hidden md:flex md:col-span-4 flex-col gap-6">
                        <div className="flex-1 bg-muted rounded-[32px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600607687940-4e524cb35a5a?w=800&auto=format&fit=crop&q=60"
                                alt="Interior 1"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 bg-muted rounded-[32px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=800&auto=format&fit=crop&q=60"
                                alt="Interior 2"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-10">
                        {/* Title & Price */}
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <h1 className="text-6xl font-black tracking-tighter text-[#111827] leading-none">
                                    3BHK Luxury <span className="text-primary italic font-black">Penthouse</span>
                                </h1>
                                <div className="text-4xl font-black text-primary">₹4.50 Cr</div>
                            </div>
                            <p className="flex items-center text-xl font-bold text-muted-foreground">
                                <MapPin size={24} className="mr-2 text-primary" /> Bandra West, Mumbai
                            </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-[40px] border border-border/50 shadow-sm">
                            <SpecItem icon={<Maximize2 className="text-primary" />} label="Area" value="1,450 sqft" />
                            <SpecItem icon={<Compass className="text-primary" />} label="Facing" value="East-West" />
                            <SpecItem icon={<Box className="text-primary" />} label="Status" value="Ready to Move" />
                            <SpecItem icon={<Calendar className="text-primary" />} label="Built" value="2022" />
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black tracking-tighter flex items-center gap-3">
                                <div className="w-2 h-8 bg-primary rounded-full" />
                                About this space
                            </h2>
                            <p className="text-xl font-medium leading-relaxed text-muted-foreground">
                                Stunning high-floor penthouse with unobstructed 180-degree views of the Arabian Sea.
                                Featuring private sun decks, Italian marble flooring, and a smart home automation system.
                                Designed for those who appreciate grandeur and absolute privacy in the heart of Mumbai.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FeatureItem text="Private Elevator Access" />
                            <FeatureItem text="Wrap-around Sea Sun Deck" />
                            <FeatureItem text="3 Dedicated Basement Parking" />
                            <FeatureItem text="24/7 Concierge Service" />
                        </div>
                    </div>

                    {/* Sidebar Action Card */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <Card className="rounded-[40px] border-border/50 bg-white shadow-2xl overflow-hidden">
                            <div className="bg-[#111827] p-8 text-white space-y-2 text-center">
                                <p className="text-xs font-black uppercase tracking-widest opacity-50">Authorized Listing Agent</p>
                                <h3 className="text-2xl font-black italic">Rahul Sharma</h3>
                                <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-primary bg-primary/10 w-fit mx-auto px-2 py-1 rounded-full border border-primary/20">
                                    <ShieldCheck size={12} /> RERA VERIFIED
                                </div>
                            </div>
                            <CardContent className="p-8 space-y-6 text-center">
                                <p className="text-muted-foreground font-medium">Ready to explore? Book a private screening of this penthouse today.</p>
                                <Button className="w-full h-16 rounded-[24px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-black group">
                                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Inquiry
                                </Button>
                                <Button variant="outline" className="w-full h-16 rounded-[24px] border-border/50 text-lg font-black">
                                    <Phone className="mr-2 w-5 h-5" /> Call Agent
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="space-y-2">
            <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">
                {icon}
            </div>
            <div className="space-y-0.5">
                <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{label}</p>
                <p className="text-sm font-black text-[#111827]">{value}</p>
            </div>
        </div>
    )
}

function FeatureItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-border/50">
            <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
            <span className="text-md font-bold text-[#111827]">{text}</span>
        </div>
    )
}
