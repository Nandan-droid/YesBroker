"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Search,
    MapPin,
    ChevronDown,
    Layers,
    Heart,
    Share2,
    Maximize2,
    Filter,
    ArrowUpDown,
    Home as HomeIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_PROPERTIES = [
    { id: 1, title: "Modern Luxury Villa", location: "Bandra West, Mumbai", price: "₹18.50 Cr", beds: "5", baths: "6", area: "4,500 sqft", type: "Sale", tag: "Exclusive" },
    { id: 2, title: "Sea View Penthouse", location: "Worli Sea Face", price: "₹12.20 Cr", beds: "4", baths: "4", area: "3,200 sqft", type: "Sale", tag: "Hot Deal" },
    { id: 3, title: "Premium 3BHK Flat", location: "Pali Hill, Bandra", price: "₹8.50 Cr", beds: "3", baths: "3", area: "1,850 sqft", type: "Rent", tag: "New" },
    { id: 4, title: "Loft Apartment", location: "Lower Parel", price: "₹4.20 Cr", beds: "2", baths: "2", area: "1,200 sqft", type: "Sale", tag: "Verified" },
    { id: 5, title: "Garden Duplex", location: "Juhu Scheme", price: "₹15.0 Cr", beds: "4", baths: "5", area: "3,800 sqft", type: "Sale", tag: "Exclusive" },
    { id: 6, title: "Compact Studio", location: "Andheri East", price: "₹1.80 Cr", beds: "1", baths: "1", area: "550 sqft", type: "Rent", tag: "Top Rated" },
];

export default function SearchResultsPage() {
    return (
        <div className="h-screen flex flex-col font-sans bg-white overflow-hidden">
            {/* Top Navigation & Filters */}
            <header className="border-b border-border/50 sticky top-0 bg-white z-50">
                <div className="px-6 py-4 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6 flex-1">
                        <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2 flex-shrink-0">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3">
                                <Layers className="text-white w-5 h-5" />
                            </div>
                            <span className="hidden md:block text-[#111827]">Yes<span className="text-primary italic">Broker</span></span>
                        </Link>

                        <div className="flex-1 max-w-xl relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors" />
                            <input
                                placeholder="Address, Neighborhood, or City"
                                className="w-full h-11 pl-11 pr-4 rounded-xl bg-muted/50 border border-transparent focus:bg-white focus:border-primary focus:outline-none text-sm font-medium transition-all"
                            />
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <Button variant="outline" className="rounded-xl border-border/50 font-bold px-4">Save Search</Button>
                        <div className="w-[1px] h-6 bg-border mx-2" />
                        <Link href="/login" className="text-sm font-bold text-[#111827] hover:text-primary transition-colors">Sign In</Link>
                    </div>
                </div>

                {/* Second Row: Filters */}
                <div className="px-6 py-3 border-t border-border/30 flex items-center justify-between bg-[#F9FAFB]/50">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                        <FilterButton label="Price" />
                        <FilterButton label="Home Type" />
                        <FilterButton label="Beds & Baths" />
                        <FilterButton label="More" />
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                        <span>{MOCK_PROPERTIES.length} Homes for Sale</span>
                        <div className="flex items-center gap-1 text-[#111827] cursor-pointer hover:text-primary transition-colors">
                            Sort: Newest <ChevronDown size={14} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Split Screen Content */}
            <main className="flex-1 flex overflow-hidden">
                {/* Left Side: Property List */}
                <div className="w-full lg:w-[600px] xl:w-[700px] h-full overflow-y-auto no-scrollbar bg-white border-r border-border/50">
                    <div className="p-6">
                        <h1 className="text-2xl font-black tracking-tight text-[#111827] mb-6">Real Estate & Homes for Sale</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_PROPERTIES.map((prop) => (
                                <HomeCard key={prop.id} property={prop} />
                            ))}
                        </div>

                        {/* Footer Spacer */}
                        <div className="py-20 text-center">
                            <p className="text-sm text-muted-foreground font-medium italic">End of results. Try adjusting your filters.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Interactive Map Placeholder */}
                <div className="hidden lg:block flex-1 bg-muted/20 relative">
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: "radial-gradient(#8b5cf6 0.5px, transparent 0.5px)",
                            backgroundSize: "24px 24px"
                        }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-20">
                        <div className="max-w-md w-full text-center space-y-6">
                            <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto rotate-6 border border-border/50">
                                <MapPin className="text-primary w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black tracking-tighter text-[#111827]">Interactive Mumbai Map</h3>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                    Browse neighborhoods, compare school districts, and see recently sold prices in your area.
                                </p>
                            </div>
                            <Button size="lg" className="rounded-2xl font-black px-8">Expand Map View</Button>
                        </div>
                    </div>

                    {/* Floating Map Pointers Mock */}
                    <div className="absolute top-1/4 left-1/3 bg-white px-3 py-1.5 rounded-full shadow-2xl border border-primary/20 flex items-center gap-2 animate-bounce">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-xs font-black italic">₹18.50 Cr</span>
                    </div>
                    <div className="absolute top-1/2 left-2/3 bg-primary text-white px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-xs font-black italic">₹12.20 Cr</span>
                    </div>
                </div>
            </main>
        </div>
    );
}

function FilterButton({ label }: { label: string }) {
    return (
        <button className="h-10 px-4 rounded-xl border border-border/50 bg-white text-sm font-bold text-[#374151] hover:border-primary hover:text-primary transition-all flex items-center gap-2 whitespace-nowrap">
            {label}
            <ChevronDown size={14} className="opacity-50" />
        </button>
    )
}

function HomeCard({ property }: { property: any }) {
    return (
        <Card className="group overflow-hidden rounded-2xl border-border/30 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                    src={
                        property.id === 1 ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" :
                            property.id === 2 ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" :
                                property.id === 3 ? "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" :
                                    property.id === 4 ? "https://images.unsplash.com/photo-1600607687920-4e524cb35a5a?q=80&w=1000&auto=format&fit=crop" :
                                        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
                    }
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#111827] hover:text-red-500 shadow-sm transition-colors">
                        <Heart size={16} />
                    </button>
                </div>
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                        {property.tag}
                    </span>
                </div>
            </div>
            <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <p className="text-2xl font-black text-[#111827]">{property.price}</p>
                        <p className="text-xs font-bold text-muted-foreground flex items-center gap-1">
                            {property.beds} <span className="text-[10px] opacity-60">bd</span> | {property.baths} <span className="text-[10px] opacity-60">ba</span> | {property.area}
                        </p>
                    </div>
                    <div className="p-2 bg-muted/30 rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                        <HomeIcon size={16} />
                    </div>
                </div>

                <div className="space-y-0.5">
                    <p className="text-sm font-black text-[#111827] truncate group-hover:underline underline-offset-4">{property.title}</p>
                    <p className="text-xs font-bold text-muted-foreground truncate">{property.location}</p>
                </div>

                <div className="pt-2 border-t border-border/30 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-primary">
                    <span className="flex items-center gap-1"><Layers size={10} /> YesBroker Exclusive</span>
                    <Link href={`/p/rahul-sharma/${property.id}`} className="hover:underline flex items-center gap-1">Details <ArrowUpDown size={10} /></Link>
                </div>
            </CardContent>
        </Card>
    )
}
