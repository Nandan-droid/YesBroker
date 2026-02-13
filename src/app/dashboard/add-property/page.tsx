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
    Building,
    CheckCircle2,
    Plus,
    X,
    Minus,
    Info,
    ChevronDown,
    Instagram,
    Youtube,
    Facebook,
    Link as LinkIcon,
    Trash2,
    Edit3,
    Check,
    ArrowRight,
    Home,
    Search,
    ChevronRight
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
        { label: 'Basic Infrastructure', items: ['Lift(s)', '24x7 Water Supply', 'Intercom Facility', 'Power Supply (Full/Partial)'] },
        { label: 'Safety & Security', items: ['Security / CCTV Surveillance', 'Maintenance Staff', 'Visitor Parking'] },
        { label: 'Leisure & Entertainment', items: ['Clubhouse / Community Hall', 'Indoor Games', 'Amphitheatre'] },
        { label: 'View', items: ['Sea / Lake View', 'Garden View', 'Amenities View', 'Vaastu Compliant'] }
    ];

    const [features, setFeatures] = useState<string[]>([]);

    const [mediaLinks, setMediaLinks] = useState([
        { platform: 'Instagram Reel', url: '', icon: <Instagram size={16} /> },
        { platform: 'Facebook Community Page', url: '', icon: <Facebook size={16} /> },
        { platform: 'YouTube Video Link', url: '', icon: <Youtube size={16} /> },
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        const currentIndex = SECTIONS.indexOf(activeSection);
        if (currentIndex > 0) {
            setActiveSection(SECTIONS[currentIndex - 1]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => router.push("/dashboard/listings"), 1500);
    };

    return (
        <div className="max-w-[1100px] mx-auto min-h-screen pb-32 font-sans text-[#0f172a]">
            {/* Header / Back Action */}
            <div className="flex items-center justify-between mb-12 py-4 border-b border-border/40">
                <div className="flex items-center gap-6">
                    <Link href="/dashboard/listings">
                        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 bg-white shadow-sm hover:shadow-md border border-border/50 transition-all">
                            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-[#1e293b]">Add New Property</h1>
                        <p className="text-sm text-muted-foreground font-medium">Create a compelling listing for your portfolio.</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-end">
                    <span className="text-xs font-black uppercase tracking-widest text-primary/60 mb-1">Journey Status</span>
                    <div className="h-2 w-48 bg-muted rounded-full overflow-hidden border border-border/20">
                        <div
                            className="h-full bg-primary transition-all duration-700 ease-out"
                            style={{ width: `${((SECTIONS.indexOf(activeSection) + 1) / SECTIONS.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Journey Navigation (Horizontal) */}
            <div className="mb-16">
                <div className="hidden md:flex justify-between items-center relative gap-4">
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-muted -translate-y-1/2 z-0" />
                    {SECTIONS.map((s, idx) => {
                        const isActive = activeSection === s;
                        const isCompleted = SECTIONS.indexOf(activeSection) > idx;
                        return (
                            <button
                                key={s}
                                onClick={() => setActiveSection(s)}
                                className="relative z-10 flex flex-col items-center gap-3 transition-all group"
                            >
                                <div className={cn(
                                    "h-12 w-12 rounded-full flex items-center justify-center border-4 transition-all duration-300",
                                    isActive ? "bg-white border-primary scale-110 shadow-lg shadow-primary/20" :
                                        isCompleted ? "bg-primary border-primary" : "bg-white border-muted group-hover:border-primary/40"
                                )}>
                                    {isCompleted ? <Check className="text-white w-6 h-6" /> :
                                        <span className={cn("font-black text-sm", isActive ? "text-primary" : "text-muted-foreground")}>{idx + 1}</span>}
                                </div>
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.15em] whitespace-nowrap px-3 py-1 rounded-full",
                                    isActive ? "bg-primary text-white" : "text-muted-foreground group-hover:text-primary/70"
                                )}>
                                    {s.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Journey View */}
                <div className="md:hidden flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-border/50">
                    <span className="text-xs font-black uppercase tracking-widest">Step {SECTIONS.indexOf(activeSection) + 1} of 5</span>
                    <span className="text-xs font-bold text-primary">{activeSection} Details</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-12">
                <Card className="rounded-[40px] border-none bg-white p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] min-h-[600px] relative overflow-hidden">
                    {/* Background decorative element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                    <CardContent className="p-0 relative z-10">
                        {activeSection === 'Basic' && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="space-y-6">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Property Title</label>
                                    <Input
                                        placeholder="e.g. Skyline Luxury Heights, 3BHK"
                                        className="h-16 md:h-20 rounded-[28px] bg-[#f8fafc] border-2 border-transparent focus-visible:border-primary/20 focus-visible:bg-white text-xl md:text-2xl font-black px-8 transition-all shadow-sm"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Transaction Purpose</label>
                                        <div className="flex bg-[#f1f5f9] p-2 rounded-[32px] gap-2">
                                            {['Sale', 'Rent'].map(p => (
                                                <button
                                                    key={p}
                                                    onClick={() => setBasicDetails(prev => ({ ...prev, purpose: p }))}
                                                    className={cn(
                                                        "flex-1 py-4 px-6 rounded-[24px] text-sm font-black uppercase tracking-widest transition-all",
                                                        basicDetails.purpose === p ? "bg-white text-primary shadow-xl shadow-primary/5" : "text-slate-400 hover:text-slate-600"
                                                    )}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Asset Category</label>
                                        <div className="flex bg-[#f1f5f9] p-2 rounded-[32px] gap-2">
                                            {['Residential', 'Commercial'].map(t => (
                                                <button
                                                    key={t}
                                                    onClick={() => setBasicDetails(prev => ({ ...prev, propertyType: t }))}
                                                    className={cn(
                                                        "flex-1 py-4 px-6 rounded-[24px] text-sm font-black uppercase tracking-widest transition-all",
                                                        basicDetails.propertyType === t ? "bg-white text-primary shadow-xl shadow-primary/5" : "text-slate-400 hover:text-slate-600"
                                                    )}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Listing Type</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['Apartment', 'Villa', 'Builder Floor', 'Farmhouse', 'Plot/Land', 'Others'].map(st => (
                                            <button
                                                key={st}
                                                onClick={() => setBasicDetails(prev => ({ ...prev, subType: st }))}
                                                className={cn(
                                                    "px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-widest border-2 transition-all",
                                                    basicDetails.subType === st ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white border-slate-100 text-slate-500 hover:border-primary/20"
                                                )}
                                            >
                                                {st}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Site Status</label>
                                        <div className="flex gap-4">
                                            {['Available', 'Under Construction'].map(s => (
                                                <button
                                                    key={s}
                                                    onClick={() => setBasicDetails(prev => ({ ...prev, status: s }))}
                                                    className={cn(
                                                        "flex-1 py-4 px-4 rounded-[28px] text-[10px] font-black uppercase tracking-widest border-2 transition-all",
                                                        basicDetails.status === s ? "border-primary text-primary bg-primary/5" : "border-slate-100 text-slate-400"
                                                    )}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Full Address</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
                                            <Input
                                                placeholder="Enter full locality details..."
                                                className="h-16 pl-14 rounded-[28px] bg-[#f8fafc] border-none text-sm font-bold shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'Specifications' && (
                            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                                    <Counter label="Bedrooms" value={specs.bedrooms} onChange={v => setSpecs(p => ({ ...p, bedrooms: v }))} />
                                    <Counter label="Bathrooms" value={specs.bathrooms} onChange={v => setSpecs(p => ({ ...p, bathrooms: v }))} />
                                    <Counter label="Balconies" value={specs.balconies} onChange={v => setSpecs(p => ({ ...p, balconies: v }))} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Space Allocation</label>
                                        <div className="flex gap-3 h-16 md:h-20">
                                            <Input
                                                placeholder="Area"
                                                className="flex-1 rounded-[28px] bg-[#f8fafc] border-none px-8 text-2xl font-black shadow-sm"
                                                value={specs.totalArea}
                                                onChange={e => setSpecs(p => ({ ...p, totalArea: e.target.value }))}
                                            />
                                            <div className="flex items-center px-6 bg-primary/5 rounded-[28px] text-xs font-black uppercase text-primary border border-primary/10">
                                                sq. ft.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Valuation</label>
                                        <div className="flex gap-3 h-16 md:h-20 items-center">
                                            <div className="flex items-center px-6 bg-[#f1f5f9] rounded-[28px] text-xs font-black uppercase text-slate-500 h-full">
                                                INR
                                            </div>
                                            <div className="flex-1 relative h-full">
                                                <Input
                                                    placeholder="Price"
                                                    className="w-full h-full rounded-[28px] bg-[#f8fafc] border-none px-8 text-2xl font-black shadow-sm"
                                                    value={specs.price}
                                                    onChange={e => setSpecs(p => ({ ...p, price: e.target.value }))}
                                                />
                                            </div>
                                        </div>
                                        <p className="text-[10px] font-black uppercase text-slate-400 italic text-right px-6">Approx. ₹ 0.0 Per Square Foot</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Parking Capacity</label>
                                        <div className="flex flex-wrap gap-2 bg-[#f1f5f9] p-1.5 rounded-[32px]">
                                            {['None', 'Bike', 'Car', 'Car & Bike'].map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setSpecs(p => ({ ...p, parking: opt }))}
                                                    className={cn(
                                                        "flex-1 py-4 px-4 rounded-[24px] text-[10px] font-black uppercase tracking-widest transition-all",
                                                        specs.parking === opt ? "bg-white text-primary shadow-lg shadow-primary/5" : "text-slate-400"
                                                    )}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Furnishing State</label>
                                        <div className="flex gap-2">
                                            {['Unfurnished', 'Semi', 'Full'].map(f => (
                                                <button
                                                    key={f}
                                                    onClick={() => setSpecs(p => ({ ...p, furnishing: f }))}
                                                    className={cn(
                                                        "flex-1 py-4 px-2 rounded-[24px] text-[10px] font-black uppercase tracking-widest border-2 transition-all",
                                                        specs.furnishing.includes(f) ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white border-slate-100 text-slate-400"
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
                            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                {categories.map((cat, idx) => (
                                    <div key={idx} className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">{cat.label}</h3>
                                            <div className="h-[1px] w-full bg-slate-100" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {cat.items.map(item => (
                                                <button
                                                    key={item}
                                                    onClick={() => handleFeatureToggle(item)}
                                                    className={cn(
                                                        "flex items-center justify-between px-8 py-5 rounded-[28px] text-[11px] font-black uppercase tracking-[0.1em] border-2 transition-all group",
                                                        features.includes(item)
                                                            ? "bg-[#1e293b] border-[#1e293b] text-white shadow-2xl shadow-slate-900/20"
                                                            : "bg-white border-slate-50 text-slate-400 hover:border-primary/30"
                                                    )}
                                                >
                                                    {item}
                                                    <div className={cn(
                                                        "h-6 w-6 rounded-full flex items-center justify-center transition-all",
                                                        features.includes(item) ? "bg-white text-[#1e293b]" : "bg-slate-50 text-slate-300 group-hover:text-primary"
                                                    )}>
                                                        {features.includes(item) ? <Check size={14} /> : <Plus size={14} />}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeSection === 'Media' && (
                            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="space-y-8">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Portfolio Gallery</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <div className="aspect-[1.2/1] rounded-[40px] overflow-hidden relative group shadow-2xl shadow-black/10">
                                            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                                <Button size="icon" variant="ghost" className="bg-white/90 backdrop-blur-xl rounded-full text-slate-900 hover:bg-white hover:scale-110 transition-all">
                                                    <Edit3 size={18} />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="bg-danger shadow-xl shadow-danger/40 rounded-full text-white hover:scale-110 transition-all border-none">
                                                    <Trash2 size={18} />
                                                </Button>
                                            </div>
                                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none translate-y-4 group-hover:translate-y-0 transition-transform">
                                                <span className="bg-white/90 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl">Master Bedroom</span>
                                                <span className="bg-primary/90 px-3 py-1 rounded-xl text-[8px] font-black text-white">Cover</span>
                                            </div>
                                        </div>

                                        <button className="aspect-[1.2/1] rounded-[40px] border-4 border-dashed border-slate-100 flex flex-col items-center justify-center gap-6 hover:bg-primary/5 hover:border-primary/20 transition-all group">
                                            <div className="h-16 w-16 bg-primary/5 rounded-[24px] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <Camera size={32} />
                                            </div>
                                            <div className="text-center">
                                                <span className="block text-xs font-black uppercase tracking-[0.2em] text-slate-800">Add Capture</span>
                                                <span className="text-[10px] font-bold text-slate-400 mt-1 block tracking-wider">High-res JPEG/PNG</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-slate-50">
                                    <div className="space-y-8">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">Social Virality Links</label>
                                        <div className="space-y-4">
                                            {mediaLinks.map((ml, i) => (
                                                <div key={i} className="flex gap-3">
                                                    <div className="flex items-center w-full px-8 h-20 bg-[#f8fafc] rounded-[32px] gap-5 shadow-sm overflow-hidden group">
                                                        <div className="text-primary/70 group-hover:scale-125 transition-transform duration-500">{ml.icon}</div>
                                                        <Input
                                                            placeholder={ml.platform}
                                                            className="border-none bg-transparent h-full px-0 font-bold text-sm focus-visible:ring-0 placeholder:text-slate-300"
                                                        />
                                                        <div className="bg-emerald-50 text-emerald-500 p-2 rounded-xl">
                                                            <Check size={14} className="font-black" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <Button variant="ghost" className="w-full h-20 border-4 border-dashed border-slate-50 rounded-[32px] text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all">
                                                + Attach Another Matrix
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <div className="bg-[#1e293b] p-12 rounded-[48px] text-white shadow-3xl shadow-slate-900/10 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                                                <Info size={160} />
                                            </div>
                                            <div className="relative z-10 space-y-6">
                                                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                                                    <CheckCircle2 size={32} className="text-emerald-400" />
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="font-black text-xl tracking-tight uppercase tracking-[0.1em]">Verification Ready</h4>
                                                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                                        Our AI validates every media link to ensure high-quality reach.
                                                        Video listings currently receive <span className="text-white font-black underline decoration-primary">312% more inquiries</span> than static listings.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'Registration' && (
                            <div className="flex flex-col items-center justify-center py-20 animate-in zoom-in-95 duration-1000">
                                <div className="relative mb-12">
                                    <div className="absolute inset-0 bg-emerald-400/20 blur-[64px] rounded-full animate-pulse" />
                                    <div className="relative w-40 h-40 bg-white border-[12px] border-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-3xl shadow-emerald-500/20">
                                        <Check size={80} className="stroke-[3px]" />
                                    </div>
                                </div>
                                <div className="text-center space-y-10 max-w-xl">
                                    <div className="space-y-4">
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Excellence Achieved.</h2>
                                        <p className="text-slate-400 text-lg md:text-xl font-medium tracking-tight">
                                            Your property blueprint is complete and optimized for the highest market visibility.
                                        </p>
                                    </div>

                                    <div className="bg-[#f8fafc] p-8 rounded-[40px] border border-slate-100 shadow-sm text-left">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                <Info size={20} />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-widest text-[#1e293b]">Review Terms</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                            By publishing, you confirm that you have the legal right to list this property.
                                            The listing will appear on your public broker profile and the global directory instantly.
                                        </p>
                                    </div>

                                    <Button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="w-full h-24 rounded-[32px] bg-primary text-2xl font-black uppercase tracking-[0.2em] shadow-[0_24px_48px_-12px_rgba(139,92,246,0.3)] hover:shadow-[0_32px_64px_-16px_rgba(139,92,246,0.5)] transition-all active:scale-95 group"
                                    >
                                        {loading ? "Syncing..." : "Launch Listing Now"}
                                        <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Footer Navigation */}
                {activeSection !== 'Registration' && (
                    <div className="flex items-center justify-between pt-8 animate-in fade-in duration-500">
                        <Button
                            variant="ghost"
                            onClick={prevStep}
                            disabled={activeSection === 'Basic'}
                            className="h-16 px-10 rounded-[28px] text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-0 transition-all border border-transparent hover:border-slate-200"
                        >
                            <ArrowLeft className="mr-3 w-4 h-4" /> Previous Phase
                        </Button>
                        <Button
                            onClick={nextStep}
                            className="h-16 px-12 rounded-[28px] bg-white text-slate-900 border-2 border-slate-100 text-xs font-black uppercase tracking-widest shadow-sm hover:border-primary hover:text-primary hover:shadow-xl hover:shadow-primary/10 transition-all"
                        >
                            Next Phase <ArrowRight className="ml-3 w-4 h-4" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

function Counter({ label, value, onChange }: { label: string, value: number, onChange: (v: number) => void }) {
    return (
        <div className="space-y-6 text-center group">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-primary/70">{label}</span>
            <div className="flex items-center justify-center gap-10">
                <button
                    onClick={() => onChange(Math.max(0, value - 0.5))}
                    className="h-14 w-14 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center hover:border-primary hover:text-primary transition-all text-slate-400 hover:scale-110 shadow-sm"
                >
                    <Minus size={24} />
                </button>
                <div className="relative">
                    <span className="text-5xl font-black tabular-nums tracking-tighter text-[#1e293b]">{value}</span>
                    {value % 1 !== 0 && <div className="absolute -bottom-2 right-0 h-2 w-2 bg-primary rounded-full animate-bounce" />}
                </div>
                <button
                    onClick={() => onChange(value + 0.5)}
                    className="h-14 w-14 rounded-full bg-[#1e293b] flex items-center justify-center text-white hover:scale-110 transition-all shadow-xl shadow-slate-900/20"
                >
                    <Plus size={24} />
                </button>
            </div>
        </div>
    );
}
