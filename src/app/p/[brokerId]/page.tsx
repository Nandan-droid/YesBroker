"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    BadgeCheck,
    Share2,
    MapPin,
    IndianRupee,
    Phone,
    MessageCircle,
    Filter,
    Search,
    Layers,
    ArrowUpRight,
    User,
    Instagram,
    Twitter,
    ExternalLink
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BROKER_INFO = {
    name: "Rahul Sharma",
    agency: "Sharma Real Estate",
    reraId: "MRE-A51800012345",
    specialization: "Luxury Pethouses & Sea-view Villas",
    experience: "12+ Years in Mumbai",
    location: "South Mumbai",
};

const MOCK_PROPERTIES = [
    { id: 1, title: "3BHK Luxury Penthouse", location: "Bandra West", price: "₹4.50 Cr", area: "1,450 sqft", type: "Sale", tag: "Hot Deal" },
    { id: 2, title: "Sea View Studio", location: "Worli Sea Face", price: "₹2.20 Cr", area: "550 sqft", type: "Sale", tag: "New" },
    { id: 3, title: "Modern Duplex Villa", location: "Alibaug Coast", price: "₹12.0 Cr", area: "4,200 sqft", type: "Sale", tag: "Exclusive" },
    { id: 4, title: "Designer Loft", location: "Lower Parel", price: "₹1.80 Cr", area: "850 sqft", type: "Sale", tag: "Verified" },
];

export default function PublicPortfolioPage() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans pb-32">
            {/* Minimal Header Nav */}
            <nav className="px-6 py-6 max-w-5xl mx-auto flex justify-between items-center bg-transparent">
                <div className="text-xl font-black tracking-tighter flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
                        <Layers className="text-white w-5 h-5" />
                    </div>
                    <span className="text-[#111827]">Yes<span className="text-primary italic">Broker</span></span>
                </div>
                <Button variant="outline" className="rounded-full h-10 w-10 p-0 border-border/50 bg-white shadow-sm">
                    <Share2 size={18} />
                </Button>
            </nav>

            {/* Profile Intro Section */}
            <section className="px-6 pt-8 pb-16">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                    <div className="md:col-span-8 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                            <BadgeCheck size={14} /> Registered Mumbai Broker
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-[#111827]">
                            {BROKER_INFO.agency}
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                            A curated selection of the finest properties in {BROKER_INFO.location}.
                            Specializing in <span className="text-[#111827] font-bold underline decoration-primary/30 decoration-4">{BROKER_INFO.specialization}</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-border/50 shadow-sm">
                                <span className="text-xs font-bold text-muted-foreground uppercase">Experience</span>
                                <span className="text-sm font-black">{BROKER_INFO.experience}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-border/50 shadow-sm">
                                <span className="text-xs font-bold text-muted-foreground uppercase">RERA</span>
                                <span className="text-sm font-black">{BROKER_INFO.reraId}</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-center md:items-end">
                        <div className="w-56 h-56 bg-primary rounded-[48px] rotate-3 shadow-2xl shadow-primary/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 opacity-80" />
                            <User className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-48 h-48 text-white/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-6xl font-black text-white italic drop-shadow-lg">RS</span>
                            </div>
                        </div>
                        <div className="mt-8 flex gap-3">
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<ExternalLink size={18} />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog Section */}
            <main className="px-6 py-20 bg-white rounded-t-[64px] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)] border-t border-border/50">
                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black tracking-tighter text-[#111827]">Curated Portfolio</h2>
                            <p className="text-lg text-muted-foreground font-medium">Hand-picked premium listings in Mumbai.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors" />
                                <input
                                    placeholder="Search location..."
                                    className="h-12 pl-10 pr-6 rounded-2xl bg-muted/50 border-none text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64"
                                />
                            </div>
                            <Button variant="outline" className="h-12 rounded-2xl px-4 border-border/50">
                                <Filter size={18} />
                            </Button>
                        </div>
                    </div>

                    {/* Listings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {MOCK_PROPERTIES.map((prop) => (
                            <PropertyCard key={prop.id} property={prop} />
                        ))}
                    </div>
                </div>
            </main>

            {/* Fixed CTA Buttons */}
            <div className="fixed bottom-8 inset-x-0 px-6 z-50">
                <div className="max-w-md mx-auto bg-[#111827]/90 backdrop-blur-xl p-3 rounded-[32px] border border-white/10 shadow-2xl flex gap-3">
                    <Button
                        className="flex-1 h-14 rounded-[22px] bg-[#25D366] hover:bg-[#20bd5a] text-white border-none text-lg font-black group"
                        asChild
                    >
                        <Link href="https://wa.me/919999999999">
                            <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp
                        </Link>
                    </Button>
                    <Button
                        className="flex-1 h-14 rounded-[22px] bg-primary text-white border-none text-lg font-black"
                        asChild
                    >
                        <Link href="tel:+919999999999">
                            <Phone className="mr-2 w-5 h-5" /> Call Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function PropertyCard({ property }: { property: any }) {
    return (
        <Card className="group overflow-hidden rounded-[32px] border-border/50 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                <div className="absolute top-6 right-6 flex gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-black rounded-full shadow-sm uppercase tracking-wider text-[#111827]">
                        {property.tag}
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 bg-[#111827]/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold">
                    <IndianRupee size={12} /> {property.price}
                </div>
                {/* Visual Placeholder */}
                <div className="w-full h-full flex items-center justify-center italic text-muted-foreground/50 font-black text-xl bg-gradient-to-br from-muted to-muted/50">
                    YesBroker Premium Visual
                </div>
            </div>
            <CardContent className="p-8 space-y-6">
                <div>
                    <h3 className="text-2xl font-black text-[#111827] group-hover:text-primary transition-colors">{property.title}</h3>
                    <p className="flex items-center text-sm font-bold text-muted-foreground mt-2 uppercase tracking-wide">
                        <MapPin size={16} className="mr-1.5 text-primary" /> {property.location}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-border/30 py-4">
                    <div className="space-y-0.5">
                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Square Feet</p>
                        <p className="text-sm font-black text-[#111827]">{property.area} Area</p>
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Listing Type</p>
                        <p className="text-sm font-black text-[#111827]">Direct {property.type}</p>
                    </div>
                </div>

                <Button className="w-full h-14 rounded-2xl text-md font-black shadow-lg shadow-primary/5 group" variant="outline" asChild>
                    <Link href={`/p/rahul/${property.id}`}>
                        Explore Property <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="w-12 h-12 rounded-2xl bg-white border border-border/50 shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
            {icon}
        </button>
    )
}
