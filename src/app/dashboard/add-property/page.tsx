"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    Camera,
    MapPin,
    CheckCircle2,
    Plus,
    X,
    Minus,
    Info,
    ChevronDown,
    Instagram,
    Youtube,
    Facebook,
    Trash2,
    Edit3,
    Check,
    ArrowRight,
    Home
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Section = 'Basic' | 'Specifications' | 'Features' | 'Media' | 'Registration';

const SECTIONS: Section[] = ['Basic', 'Specifications', 'Features', 'Media', 'Registration'];

export default function AddPropertyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [activeSection, setActiveSection] = useState<Section>('Basic');

    // --- State for sections ---
    const [basicDetails, setBasicDetails] = useState({
        title: '',
        purpose: 'Sale',
        propertyType: 'Residential',
        subType: 'Apartment',
        status: 'Available',
        address: '',
        areaTags: ['Borivali West', 'Borivali East']
    });

    const [specs, setSpecs] = useState({
        bedrooms: 2,
        bathrooms: 2,
        balconies: 1,
        totalArea: '',
        areaUnit: 'sq. ft.',
        price: '',
        currency: 'INR',
        negotiable: false,
        allInclusive: false,
        maintenance: '',
        membership: '',
        parking: 'Car',
        floors: '7',
        propertyFloor: '4',
        furnishing: 'Semi-Furnished'
    });

    const categories = [
        { label: 'Infrastructure', items: ['Lift(s)', '24x7 Water Supply', 'Intercom', 'Power Backup'] },
        { label: 'Safety & Leisure', items: ['CCTV', 'Security', 'Clubhouse', 'Gym', 'Pool'] },
        { label: 'Location & View', items: ['Sea View', 'Garden View', 'Vaastu', 'Temple Nearby'] }
    ];

    const [features, setFeatures] = useState<string[]>([]);

    const [mediaLinks, setMediaLinks] = useState([
        { platform: 'Instagram', url: '', icon: <Instagram size={14} /> },
        { platform: 'YouTube', url: '', icon: <Youtube size={14} /> },
    ]);

    const handleFeatureToggle = (item: string) => {
        setFeatures(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    const addAreaTag = () => {
        const tag = prompt("Enter area tag:");
        if (tag) setBasicDetails(prev => ({ ...prev, areaTags: [...prev.areaTags, tag] }));
    };

    const nextStep = () => {
        const currentIndex = SECTIONS.indexOf(activeSection);
        if (currentIndex < SECTIONS.length - 1) {
            setActiveSection(SECTIONS[currentIndex + 1]);
        }
    };

    const prevStep = () => {
        const currentIndex = SECTIONS.indexOf(activeSection);
        if (currentIndex > 0) {
            setActiveSection(SECTIONS[currentIndex - 1]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => router.push("/dashboard/listings"), 1500);
    };

    return (
        <div className="max-w-[1000px] mx-auto min-h-screen pb-20 font-sans text-slate-900">
            {/* Compact Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/listings">
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-white shadow-sm border border-slate-200">
                            <ArrowLeft className="w-4 h-4 text-slate-500" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-slate-800">New Listing</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Step {SECTIONS.indexOf(activeSection) + 1}/5</span>
                    <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${((SECTIONS.indexOf(activeSection) + 1) / SECTIONS.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Stepper - More Compact */}
            <div className="mb-10 flex justify-between px-2 overflow-x-auto gap-4 scrollbar-hide">
                {SECTIONS.map((s, idx) => {
                    const isActive = activeSection === s;
                    const isCompleted = SECTIONS.indexOf(activeSection) > idx;
                    return (
                        <button
                            key={s}
                            onClick={() => setActiveSection(s)}
                            className="flex items-center gap-2 flex-shrink-0"
                        >
                            <div className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all",
                                isActive ? "bg-white border-primary text-primary font-black shadow-md shadow-primary/10" :
                                    isCompleted ? "bg-primary border-primary text-white" : "bg-white border-slate-100 text-slate-300"
                            )}>
                                {isCompleted ? <Check size={14} className="stroke-[3]" /> : <span className="text-xs">{idx + 1}</span>}
                            </div>
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-widest",
                                isActive ? "text-slate-800" : "text-slate-300 hidden sm:block"
                            )}>
                                {s}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Content Area - Optimized Padding & Spacing */}
            <Card className="rounded-[32px] border-none bg-white p-8 md:p-10 shadow-2xl shadow-slate-200/50 min-h-[500px]">
                <CardContent className="p-0">
                    {activeSection === 'Basic' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Title</label>
                                <Input
                                    placeholder="e.g. Skyline Luxury Heights, 3BHK"
                                    className="h-14 rounded-2xl bg-slate-50 border-none px-6 text-lg font-bold shadow-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Purpose</label>
                                    <div className="flex bg-slate-100/50 p-1.5 rounded-2xl gap-1">
                                        {['Sale', 'Rent'].map(p => (
                                            <button
                                                key={p}
                                                onClick={() => setBasicDetails(prev => ({ ...prev, purpose: p }))}
                                                className={cn(
                                                    "flex-1 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase transition-all",
                                                    basicDetails.purpose === p ? "bg-white text-primary shadow-sm" : "text-slate-400"
                                                )}
                                            >
                                                {p}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</label>
                                    <div className="flex bg-slate-100/50 p-1.5 rounded-2xl gap-1">
                                        {['Residential', 'Commercial'].map(t => (
                                            <button
                                                key={t}
                                                onClick={() => setBasicDetails(prev => ({ ...prev, propertyType: t }))}
                                                className={cn(
                                                    "flex-1 py-2.5 px-4 rounded-xl text-[10px] font-black uppercase transition-all",
                                                    basicDetails.propertyType === t ? "bg-white text-primary shadow-sm" : "text-slate-400"
                                                )}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Listing Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Apartment', 'Villa', 'Floor', 'Plot', 'Office'].map(st => (
                                        <button
                                            key={st}
                                            onClick={() => setBasicDetails(prev => ({ ...prev, subType: st }))}
                                            className={cn(
                                                "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all",
                                                basicDetails.subType === st ? "bg-primary text-white border-primary shadow-md" : "bg-white border-slate-100 text-slate-400 hover:border-slate-300"
                                            )}
                                        >
                                            {st}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Address</label>
                                <div className="relative">
                                    <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                    <Input
                                        placeholder="Enter locality details..."
                                        className="h-14 pl-12 rounded-2xl bg-slate-50 border-none text-xs font-bold"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'Specifications' && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <Counter label="Bedrooms" value={specs.bedrooms} onChange={v => setSpecs(p => ({ ...p, bedrooms: v }))} />
                                <Counter label="Bathrooms" value={specs.bathrooms} onChange={v => setSpecs(p => ({ ...p, bathrooms: v }))} />
                                <Counter label="Balconies" value={specs.balconies} onChange={v => setSpecs(p => ({ ...p, balconies: v }))} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Area (sq.ft)</label>
                                    <Input
                                        placeholder="1200"
                                        className="h-14 rounded-2xl bg-slate-50 border-none px-6 text-xl font-black"
                                        value={specs.totalArea}
                                        onChange={e => setSpecs(p => ({ ...p, totalArea: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Price (₹)</label>
                                    <Input
                                        placeholder="Price in INR"
                                        className="h-14 rounded-2xl bg-slate-50 border-none px-6 text-xl font-black"
                                        value={specs.price}
                                        onChange={e => setSpecs(p => ({ ...p, price: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parking</label>
                                    <div className="flex gap-2 bg-slate-100/50 p-1.5 rounded-2xl">
                                        {['None', 'Two-W', 'Four-W'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setSpecs(p => ({ ...p, parking: opt }))}
                                                className={cn(
                                                    "flex-1 py-2 rounded-xl text-[10px] font-black transition-all",
                                                    specs.parking === opt ? "bg-white text-primary shadow-sm" : "text-slate-400"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Furnishing</label>
                                    <div className="flex gap-2">
                                        {['Unfurnished', 'Semi', 'Fully'].map(f => (
                                            <button
                                                key={f}
                                                onClick={() => setSpecs(p => ({ ...p, furnishing: f }))}
                                                className={cn(
                                                    "flex-1 py-3 px-1 rounded-xl text-[10px] font-black border transition-all",
                                                    specs.furnishing.includes(f) ? "bg-primary text-white border-primary" : "bg-white border-slate-100 text-slate-400"
                                                )}
                                            >
                                                {f}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'Features' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-primary/70 border-b pb-2">{cat.label}</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                        {cat.items.map(item => (
                                            <button
                                                key={item}
                                                onClick={() => handleFeatureToggle(item)}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-black border transition-all",
                                                    features.includes(item)
                                                        ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                                                        : "bg-white border-slate-50 text-slate-400 hover:border-slate-200"
                                                )}
                                            >
                                                <div className={cn(
                                                    "h-4 w-4 rounded-full flex items-center justify-center",
                                                    features.includes(item) ? "bg-white text-slate-900" : "bg-slate-50 text-slate-200"
                                                )}>
                                                    {features.includes(item) ? <Check size={10} /> : <Plus size={10} />}
                                                </div>
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeSection === 'Media' && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="aspect-video rounded-3xl overflow-hidden relative group">
                                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <Trash2 size={16} className="text-white cursor-pointer hover:text-danger" />
                                    </div>
                                    <div className="absolute bottom-3 left-3">
                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[8px] font-black uppercase">Main Entry</span>
                                    </div>
                                </div>
                                <button className="aspect-video rounded-3xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center gap-3 hover:bg-slate-50 transition-all text-slate-300">
                                    <Camera size={24} />
                                    <span className="text-[10px] font-black uppercase">Add Media</span>
                                </button>
                            </div>

                            <div className="pt-8 border-t space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Social Links</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {mediaLinks.map((ml, i) => (
                                        <div key={i} className="flex items-center px-5 h-14 bg-slate-50 rounded-2xl gap-3 shadow-sm border border-transparent focus-within:border-primary/20 transition-all">
                                            <div className="text-primary">{ml.icon}</div>
                                            <Input
                                                placeholder={ml.platform}
                                                className="border-none bg-transparent h-full px-0 font-bold text-xs focus-visible:ring-0"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'Registration' && (
                        <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-700 text-center">
                            <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/10 mb-8 border-8 border-white">
                                <Check size={40} className="stroke-[3]" />
                            </div>
                            <h2 className="text-3xl font-black tracking-tight mb-4">You're All Set!</h2>
                            <p className="text-slate-400 max-w-sm mb-10 text-sm font-medium leading-relaxed">
                                Review your details once. Your listing will reflect on your profile immediately after launch.
                            </p>
                            <Button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full max-w-sm h-16 rounded-2xl bg-primary text-lg font-black uppercase tracking-wider shadow-xl shadow-primary/20 active:scale-95"
                            >
                                {loading ? "Launching..." : "Launch Now"}
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Footer Navigation - Compact */}
            {activeSection !== 'Registration' && (
                <div className="flex items-center justify-between pt-6">
                    <Button
                        variant="ghost"
                        onClick={prevStep}
                        disabled={activeSection === 'Basic'}
                        className="h-12 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 disabled:opacity-0"
                    >
                        Back
                    </Button>
                    <Button
                        onClick={nextStep}
                        className="h-12 px-8 rounded-xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:shadow-lg transition-all"
                    >
                        Continue <ArrowRight size={14} className="ml-2" />
                    </Button>
                </div>
            )}
        </div>
    );
}

function Counter({ label, value, onChange }: { label: string, value: number, onChange: (v: number) => void }) {
    return (
        <div className="space-y-4 text-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</span>
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => onChange(Math.max(0, value - 0.5))}
                    className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all text-slate-500"
                >
                    <Minus size={16} />
                </button>
                <span className="text-3xl font-black tabular-nums">{value}</span>
                <button
                    onClick={() => onChange(value + 0.5)}
                    className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white"
                >
                    <Plus size={16} />
                </button>
            </div>
        </div>
    );
}
