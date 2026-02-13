"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Share2, MapPin, Phone, MessageCircle, Filter, Search, Home, Building2, Palmtree, Warehouse } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BROKER_INFO = {
    name: "Rahul Sharma",
    agency: "Sharma Estates",
    reraId: "A51800012345",
    specialization: "Bandra & Juhu Luxury Properties",
    experience: "12+ Years",
};

const MOCK_PROPERTIES = [
    { id: 1, title: "3BHK Luxury Flat", location: "Bandra West", price: "₹4.5 Cr", area: "1,450 sqft", type: "Sale", category: "Apartment", color: "bg-blue-100", icon: <Building2 className="text-blue-500 w-12 h-12" /> },
    { id: 2, title: "Studio Apartment", location: "Andheri East", price: "₹1.2 Cr", area: "450 sqft", type: "Sale", category: "Apartment", color: "bg-indigo-100", icon: <Home className="text-indigo-500 w-12 h-12" /> },
    { id: 3, title: "2BHK Penthouse", location: "Juhu", price: "₹6.8 Cr", area: "2,100 sqft", type: "Sale", category: "Penthouse", color: "bg-purple-100", icon: <Warehouse className="text-purple-500 w-12 h-12" /> },
    { id: 4, title: "Modern Villa", location: "Alibaug", price: "₹15 Cr", area: "4,500 sqft", type: "Sale", category: "Villa", color: "bg-emerald-100", icon: <Palmtree className="text-emerald-500 w-12 h-12" /> },
    { id: 5, title: "Sea View 4BHK", location: "Worli", price: "₹11.5 Cr", area: "2,800 sqft", type: "Sale", category: "Apartment", color: "bg-cyan-100", icon: <Building2 className="text-cyan-500 w-12 h-12" /> },
];

export default function DemoPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProperties = useMemo(() => {
        return MOCK_PROPERTIES.filter(prop => {
            const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                prop.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeFilter === "All" || prop.category === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, activeFilter]);

    const categories = ["All", "Apartment", "Penthouse", "Villa"];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-24">
            {/* Broker Profile Header */}
            <header className="bg-white pt-12 pb-20 px-6 border-b border-border relative">
                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="flex justify-between items-start">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                            <span className="text-3xl font-bold text-white">RS</span>
                        </div>
                        <Button variant="outline" size="icon" className="rounded-full shadow-sm">
                            <Share2 size={18} />
                        </Button>
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">{BROKER_INFO.agency}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-sm font-medium text-muted-foreground">By {BROKER_INFO.name}</span>
                            <span className="flex items-center text-xs font-semibold uppercase text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                                <BadgeCheck size={14} className="mr-1" /> RERA Verified
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Helping families find their dream homes in Mumbai for over {BROKER_INFO.experience}. Specialized in {BROKER_INFO.specialization}.
                    </p>

                    <div className="flex gap-2 pt-2">
                        <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">#RealEstate</span>
                        <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">#MumbaiHome</span>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-2xl mx-auto px-6 -mt-8 relative z-10 space-y-6">
                {/* Search & Filter Section */}
                <div className="space-y-4">
                    <div className="bg-white border border-border rounded-xl p-2 shadow-lg shadow-slate-200/50 flex items-center gap-2">
                        <Search className="text-slate-400 w-5 h-5 ml-2" />
                        <input
                            placeholder="Search properties or location..."
                            className="flex-1 bg-transparent border-none outline-none text-sm font-medium h-10 placeholder:text-slate-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap border",
                                    activeFilter === cat
                                        ? "bg-primary text-white border-primary shadow-sm"
                                        : "bg-white text-muted-foreground border-border hover:border-primary/50"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Property List */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end px-1">
                        <h2 className="text-lg font-semibold text-slate-900">
                            {activeFilter === "All" ? "All Listings" : `${activeFilter}s`}
                        </h2>
                        <span className="text-sm font-medium text-muted-foreground">{filteredProperties.length} found</span>
                    </div>

                    <div className="space-y-4">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((prop) => (
                                <PropertyCard key={prop.id} property={prop} />
                            ))
                        ) : (
                            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
                                <p className="text-slate-500 font-medium">No properties found matching your criteria.</p>
                                <Button variant="link" onClick={() => { setSearchQuery(""); setActiveFilter("All") }} className="mt-2 text-blue-600">
                                    Clear Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Sticky Call Buttons */}
            <div className="fixed bottom-0 inset-x-0 bg-white border-t border-border p-4 z-50">
                <div className="max-w-2xl mx-auto flex gap-3">
                    <Button className="flex-1 h-12 text-base font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm" size="lg">
                        <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp
                    </Button>
                    <Button className="flex-1 h-12 text-base font-semibold" size="lg">
                        <Phone className="mr-2 w-5 h-5" /> Call Now
                    </Button>
                </div>
            </div>
        </div>
    );
}

function PropertyCard({ property }: { property: any }) {
    return (
        <Card className="overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 group bg-white">
            {/* Visual Placeholder for Image */}
            <div className={cn("h-48 relative flex items-center justify-center", property.color)}>
                <div className="opacity-10 absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 to-transparent" />
                {property.icon}

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold rounded-full text-slate-900 shadow-sm uppercase tracking-wide">
                    {property.type}
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-2 py-1 text-xs font-medium rounded">
                    {property.area}
                </div>
            </div>

            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">{property.title}</h3>
                    <p className="text-lg font-bold text-blue-600">{property.price}</p>
                </div>
                <p className="flex items-center text-sm font-medium text-slate-500 mb-4">
                    <MapPin size={14} className="mr-1 text-slate-400" /> {property.location}
                </p>

                <Button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200" variant="outline" asChild>
                    <Link href={`/p/rahul/${property.id}`}>
                        View Details
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
