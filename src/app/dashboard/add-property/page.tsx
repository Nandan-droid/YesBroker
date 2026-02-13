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
    Check
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Section = 'Basic' | 'Specifications' | 'Features' | 'Media' | 'Registration';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => router.push("/dashboard/listings"), 1500);
    };

    return (
        <div className="max-w-[1200px] mx-auto min-h-screen pb-20">
            {/* Header */}
            <div className="flex items-center gap-6 mb-10">
                <Link href="/dashboard/listings">
                    <Button variant="ghost" size="icon" className="rounded-2xl h-12 w-12 bg-white shadow-sm hover:shadow-md">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Add Your Property</h1>
                    <p className="text-sm text-muted-foreground font-medium">Post your listing to YesBroker in 5 easy steps.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start">
                {/* Left Sidebar Steps */}
                <nav className="sticky top-24 space-y-2 bg-white/50 p-2 rounded-[32px] backdrop-blur-sm">
                    <NavButton id="Basic" label="Basic Details" current={activeSection} onClick={setActiveSection} />
                    <NavButton id="Specifications" label="Specifications" current={activeSection} onClick={setActiveSection} />
                    <NavButton id="Features" label="Features & Amenities" current={activeSection} onClick={setActiveSection} />
                    <NavButton id="Media" label="Media & Engagement" current={activeSection} onClick={setActiveSection} />
                    <NavButton id="Registration" label="Registration Details" current={activeSection} onClick={setActiveSection} />

                    <div className="pt-8 px-4">
                        <Button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full h-14 rounded-2xl bg-primary shadow-xl shadow-primary/20 font-bold"
                        >
                            {loading ? "Saving..." : "Publish Now"}
                        </Button>
                    </div>
                </nav>

                {/* Right Content */}
                <Card className="rounded-[40px] border-none bg-white p-10 shadow-xl shadow-neutral-200/50 min-h-[700px]">
                    <CardContent className="p-0">
                        {activeSection === 'Basic' && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Property Title</label>
                                    <Input
                                        placeholder="Modern 3BHK Apartment with Sea View"
                                        className="h-14 rounded-2xl bg-muted/20 border-none text-lg font-bold px-6 focus-visible:ring-2 focus-visible:ring-primary/20"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Purpose</label>
                                        <div className="flex bg-muted/30 p-1.5 rounded-2xl gap-1">
                                            {['Sale', 'Rent'].map(p => (
                                                <button
                                                    key={p}
                                                    onClick={() => setBasicDetails(prev => ({ ...prev, purpose: p }))}
                                                    className={cn(
                                                        "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all",
                                                        basicDetails.purpose === p ? "bg-white text-primary shadow-md" : "text-muted-foreground hover:bg-white/50"
                                                    )}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Property Type</label>
                                        <div className="flex bg-muted/30 p-1.5 rounded-2xl gap-1">
                                            {['Residential', 'Commercial'].map(t => (
                                                <button
                                                    key={t}
                                                    onClick={() => setBasicDetails(prev => ({ ...prev, propertyType: t }))}
                                                    className={cn(
                                                        "flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all",
                                                        basicDetails.propertyType === t ? "bg-white text-primary shadow-md" : "text-muted-foreground hover:bg-white/50"
                                                    )}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {['Apartment', 'Villa', 'Builder Floor', 'Farmhouse', 'Plot/Land', 'Others'].map(st => (
                                            <button
                                                key={st}
                                                onClick={() => setBasicDetails(prev => ({ ...prev, subType: st }))}
                                                className={cn(
                                                    "px-6 py-3 rounded-full text-xs font-bold border-2 transition-all",
                                                    basicDetails.subType === st ? "bg-primary/10 border-primary text-primary" : "border-muted/50 text-muted-foreground hover:bg-muted/10 hover:border-muted"
                                                )}
                                            >
                                                {st}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Status</label>
                                        <div className="flex flex-wrap gap-3">
                                            {['Available', 'Under Construction'].map(s => (
                                                <button
                                                    key={s}
                                                    onClick={() => setBasicDetails(prev => ({ ...prev, status: s }))}
                                                    className={cn(
                                                        "px-6 py-3 rounded-xl text-xs font-bold border-2 transition-all",
                                                        basicDetails.status === s ? "bg-primary/10 border-primary text-primary" : "border-muted/50 text-muted-foreground"
                                                    )}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Property Address</label>
                                        <Input
                                            placeholder="Street name, landmark..."
                                            className="h-14 rounded-2xl bg-muted/20 border-none px-6 focus-visible:ring-2 focus-visible:ring-primary/20 font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Service Area Tags</label>
                                    <div className="flex flex-wrap gap-2">
                                        {basicDetails.areaTags.map(tag => (
                                            <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-muted/20 rounded-xl text-xs font-bold group">
                                                {tag}
                                                <button onClick={() => setBasicDetails(p => ({ ...p, areaTags: p.areaTags.filter(t => t !== tag) }))}>
                                                    <X size={14} className="text-danger opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            </div>
                                        ))}
                                        <button onClick={addAreaTag} className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'Specifications' && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                    <Counter label="No. of Bedrooms" value={specs.bedrooms} onChange={v => setSpecs(p => ({ ...p, bedrooms: v }))} />
                                    <Counter label="No. of Bathrooms" value={specs.bathrooms} onChange={v => setSpecs(p => ({ ...p, bathrooms: v }))} />
                                    <Counter label="No. of Balconies" value={specs.balconies} onChange={v => setSpecs(p => ({ ...p, balconies: v }))} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Area</label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="1200"
                                                className="h-14 rounded-2xl bg-muted/20 border-none px-6 text-lg font-black"
                                                value={specs.totalArea}
                                                onChange={e => setSpecs(p => ({ ...p, totalArea: e.target.value }))}
                                            />
                                            <div className="flex items-center px-4 bg-muted/20 rounded-2xl text-xs font-black uppercase h-14">
                                                sq. ft. <ChevronDown size={14} className="ml-2" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Price</label>
                                        <div className="flex gap-2 items-center">
                                            <div className="flex items-center px-4 bg-muted/20 rounded-2xl text-xs font-black uppercase h-14">
                                                INR <ChevronDown size={14} className="ml-2" />
                                            </div>
                                            <Input
                                                placeholder="0.00"
                                                className="h-14 rounded-2xl bg-muted/20 border-none px-6 text-lg font-black flex-1"
                                                value={specs.price}
                                                onChange={e => setSpecs(p => ({ ...p, price: e.target.value }))}
                                            />
                                            <span className="text-[10px] font-black uppercase text-muted-foreground whitespace-nowrap">₹ 0.0 per sq.ft.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CheckToggle label="Negotiable" active={specs.negotiable} onClick={() => setSpecs(p => ({ ...p, negotiable: !p.negotiable }))} />
                                    <CheckToggle label="All Inclusive" active={specs.allInclusive} onClick={() => setSpecs(p => ({ ...p, allInclusive: !p.allInclusive }))} />
                                </div>

                                <div className="space-y-6">
                                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Parking Availability</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['Not Available', 'Bike', 'Car', 'Car & Bike'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setSpecs(p => ({ ...p, parking: opt }))}
                                                className={cn(
                                                    "px-8 py-3 rounded-2xl text-xs font-bold border-2 transition-all",
                                                    specs.parking === opt ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "border-muted/50 text-muted-foreground"
                                                )}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">No. of Floors</label>
                                            <Input className="h-14 rounded-2xl bg-muted/20 border-none px-6" defaultValue="1" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Floor No.</label>
                                            <div className="flex items-center gap-2">
                                                <Input className="h-14 rounded-2xl bg-muted/20 border-none px-6" defaultValue="1" />
                                                <span className="text-xs text-muted-foreground font-black uppercase">out of 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Furnishing Status</label>
                                        <div className="flex gap-2">
                                            {['Unfurnished', 'Semi-Furnished', 'Fully Furnished'].map(f => (
                                                <button
                                                    key={f}
                                                    onClick={() => setSpecs(p => ({ ...p, furnishing: f }))}
                                                    className={cn(
                                                        "flex-1 py-3 px-2 rounded-xl text-[10px] font-bold border-2 transition-all",
                                                        specs.furnishing === f ? "bg-primary text-white border-primary" : "border-muted/50 text-muted-foreground"
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
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {categories.map((cat, idx) => (
                                    <div key={idx} className="space-y-6">
                                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">{cat.label}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                            {cat.items.map(item => (
                                                <button
                                                    key={item}
                                                    onClick={() => handleFeatureToggle(item)}
                                                    className={cn(
                                                        "flex items-center justify-between px-5 py-4 rounded-2xl text-xs font-bold border-2 transition-all group",
                                                        features.includes(item)
                                                            ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                                            : "border-muted/30 text-muted-foreground hover:border-muted/50"
                                                    )}
                                                >
                                                    {item}
                                                    {features.includes(item) ? (
                                                        <Check size={16} />
                                                    ) : (
                                                        <Plus size={16} className="opacity-30 group-hover:opacity-100" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeSection === 'Media' && (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Property Images</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                        <div className="aspect-[4/3] rounded-[32px] overflow-hidden relative group">
                                            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary">
                                                    <Edit3 size={18} />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-danger hover:text-white">
                                                    <Trash2 size={18} />
                                                </Button>
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <span className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">Living Room</span>
                                            </div>
                                        </div>

                                        <button className="aspect-[4/3] rounded-[32px] border-4 border-dashed border-muted flex flex-col items-center justify-center gap-4 hover:bg-muted/10 transition-all text-muted-foreground">
                                            <div className="h-12 w-12 bg-muted/20 rounded-2xl flex items-center justify-center">
                                                <Camera size={24} />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-wider">+ Add More Images</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-muted/50">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Engagement Links</label>
                                        <div className="space-y-3">
                                            {mediaLinks.map((ml, i) => (
                                                <div key={i} className="flex gap-2">
                                                    <div className="flex items-center w-full px-4 h-14 bg-muted/20 rounded-2xl gap-3">
                                                        <div className="text-primary">{ml.icon}</div>
                                                        <Input
                                                            placeholder={ml.platform}
                                                            className="border-none bg-transparent h-full px-0 font-bold focus-visible:ring-0"
                                                        />
                                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                                    </div>
                                                    <Button variant="ghost" size="icon" className="h-14 w-14 bg-muted/20 rounded-2xl text-danger hover:bg-danger/10">
                                                        <X size={20} />
                                                    </Button>
                                                </div>
                                            ))}
                                            <Button variant="ghost" className="w-full h-14 border-2 border-dashed border-muted rounded-2xl text-xs font-black uppercase tracking-widest text-muted-foreground">
                                                + Add Another Link
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-primary/5 p-8 rounded-[32px] border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center gap-4">
                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-primary">
                                                <Info size={32} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-sm uppercase tracking-wider">Helpful Tip</h4>
                                                <p className="text-xs text-muted-foreground mt-2 px-4 leading-relaxed font-medium">
                                                    Properties with video tours get **4x more engagements**. Paste your Instagram or YouTube link to verify visibility.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'Registration' && (
                            <div className="flex flex-col items-center justify-center h-[500px] text-center space-y-6">
                                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center animate-bounce">
                                    <CheckCircle2 size={48} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight">Almost Ready!</h2>
                                    <p className="text-muted-foreground max-w-sm mt-2 font-medium">
                                        By clicking "Publish Now", your property will be registered under your broker profile and visible to thousands.
                                    </p>
                                </div>
                                <Button size="lg" className="h-16 px-12 rounded-2xl bg-primary text-lg font-black shadow-2xl shadow-primary/20">
                                    Finalize Registration
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function NavButton({ id, label, current, onClick }: { id: Section, label: string, current: Section, onClick: (s: Section) => void }) {
    const isActive = id === current;
    return (
        <button
            onClick={() => onClick(id)}
            className={cn(
                "w-full flex items-center justify-between px-6 py-5 rounded-[24px] transition-all duration-300 group",
                isActive
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:bg-white hover:text-primary"
            )}
        >
            <span className="text-xs font-black uppercase tracking-widest">{label}</span>
            <div className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                isActive ? "bg-white scale-150 rotate-45" : "bg-muted-foreground/30 opacity-0 group-hover:opacity-100"
            )} />
        </button>
    );
}

function Counter({ label, value, onChange }: { label: string, value: number, onChange: (v: number) => void }) {
    return (
        <div className="space-y-4 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{label}</span>
            <div className="flex items-center justify-center gap-6">
                <button
                    onClick={() => onChange(Math.max(0, value - 0.5))}
                    className="h-12 w-12 rounded-2xl bg-muted/20 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
                >
                    <Minus size={20} />
                </button>
                <span className="text-3xl font-black tabular-nums">{value}</span>
                <button
                    onClick={() => onChange(value + 0.5)}
                    className="h-12 w-12 rounded-2xl bg-muted/20 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground"
                >
                    <Plus size={20} />
                </button>
            </div>
        </div>
    );
}

function CheckToggle({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex-1 flex items-center justify-center gap-3 h-14 rounded-2xl border-2 transition-all font-bold text-xs",
                active ? "bg-primary/10 border-primary text-primary" : "border-muted/50 text-muted-foreground"
            )}
        >
            <div className={cn("h-4 w-4 rounded border flex items-center justify-center", active ? "bg-primary border-primary" : "border-muted")}>
                {active && <Check size={12} className="text-white" />}
            </div>
            {label}
        </button>
    );
}
