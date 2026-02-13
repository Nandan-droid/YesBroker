"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    Camera,
    IndianRupee,
    MapPin,
    Building,
    Ruler,
    Info,
    Plus,
    X,
    CheckCircle2,
    ChevronRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AddPropertyPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate property creation
        setTimeout(() => {
            router.push("/dashboard/listings");
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
            {/* Breadcrumbs / Header */}
            <div className="flex flex-col gap-4">
                <Link
                    href="/dashboard/listings"
                    className="group text-sm font-semibold text-muted-foreground flex items-center hover:text-primary transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Listings
                </Link>

                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter text-[#111827]">Add New Listing</h1>
                        <p className="text-lg text-muted-foreground mt-1">Get your property in front of the right buyers.</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-border/50 shadow-sm">
                        <StepIndicator current={step} step={1} label="Basic" />
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <StepIndicator current={step} step={2} label="Media" />
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <StepIndicator current={step} step={3} label="Finish" />
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Form Details */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-2 h-6 bg-primary rounded-full" />
                            Core Information
                        </h2>
                        <Card className="rounded-[32px] border-border/50 shadow-sm overflow-hidden">
                            <CardContent className="p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#374151]">Property Title</label>
                                        <Input
                                            placeholder="e.g. 3BHK Sea View Penthouse"
                                            required
                                            className="h-12 rounded-xl bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#374151]">Listing Price</label>
                                        <div className="relative">
                                            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                placeholder="e.g. 5.50 Cr"
                                                required
                                                className="h-12 pl-10 rounded-xl bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#374151]">Precise Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            placeholder="e.g. Pali Hill, Bandra West"
                                            required
                                            className="h-12 pl-10 rounded-xl bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#374151]">Carpet Area (sqft)</label>
                                        <div className="relative">
                                            <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                            <Input
                                                type="number"
                                                placeholder="1200"
                                                className="h-12 pl-10 rounded-xl bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#374151]">Property Type</label>
                                        <select className="flex h-12 w-full rounded-xl bg-muted/30 border-none px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                                            <option>Apartment</option>
                                            <option>Penthouse</option>
                                            <option>Villa</option>
                                            <option>Plot</option>
                                            <option>Commercial</option>
                                        </select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-2 h-6 bg-primary rounded-full" />
                            Marketing Copy
                        </h2>
                        <Card className="rounded-[32px] border-border/50 shadow-sm overflow-hidden">
                            <CardContent className="p-8 space-y-2">
                                <label className="text-sm font-bold text-[#374151]">Description</label>
                                <textarea
                                    className="flex min-h-[160px] w-full rounded-xl bg-muted/30 border-none px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-none"
                                    placeholder="Tell the story of this home. Mention high ceilings, sunlight, neighborhood vibes..."
                                />
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Right Column: Media & Actions */}
                <div className="space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-2 h-6 bg-primary rounded-full" />
                            Media
                        </h2>
                        <Card className="rounded-[32px] border-dashed border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer group relative">
                            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="w-20 h-20 bg-white text-primary rounded-[24px] flex items-center justify-center mb-6 shadow-xl shadow-primary/10 group-hover:scale-110 transition-transform">
                                    <Camera size={32} />
                                </div>
                                <p className="text-xl font-black text-[#111827]">Upload Photos</p>
                                <p className="text-sm text-muted-foreground mt-2 px-4 italic">Drag & drop or tap to browse your gallery.</p>
                                <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer" />
                            </CardContent>
                        </Card>

                        {/* Preview Placeholders */}
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2].map(i => (
                                <div key={i} className="aspect-square bg-muted/50 rounded-2xl border border-border/50 flex items-center justify-center text-muted-foreground italic text-xs">
                                    Empty Slot
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="sticky top-28 space-y-4">
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-16 rounded-[24px] text-lg font-black shadow-2xl shadow-primary/30 group"
                            disabled={loading}
                        >
                            {loading ? "Posting to YesBroker..." : "Publish Listing"}
                            <CheckCircle2 className="ml-2 w-5 h-5 transition-opacity group-hover:opacity-100 opacity-70" />
                        </Button>
                        <p className="text-center text-xs text-muted-foreground">
                            Your listing will be instantly live on your public portfolio.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}

function StepIndicator({ current, step, label }: { current: number, step: number, label: string }) {
    const isActive = current >= step;
    return (
        <div className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors",
            isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
        )}>
            <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[10px]",
                isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground"
            )}>
                {step}
            </div>
            {label}
        </div>
    );
}
