"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Plus,
    Search,
    Filter,
    MoreHorizontal,
    MapPin,
    Edit2,
    ExternalLink,
    CheckCircle,
    Trash2,
    Eye,
    TrendingUp
} from "lucide-react";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const INITIAL_PROPERTIES = [
    { id: 101, title: "3BHK Sea View Apartment", location: "Bandra West, Mumbai", price: "₹4.5 Cr", type: "Sale", status: "Active", views: 245, date: "12 Feb 2026" },
    { id: 102, title: "Luxury Penthouse", location: "Juhu, Mumbai", price: "₹6.8 Cr", type: "Sale", status: "Active", views: 56, date: "10 Feb 2026" },
    { id: 103, title: "Commercial Office Space", location: "BKC, Mumbai", price: "₹12.0 Cr", type: "Sale", status: "Draft", views: 12, date: "08 Feb 2026" },
    { id: 104, title: "2BHK Cozy Flat", location: "Andheri East, Mumbai", price: "₹1.8 Cr", type: "Sale", status: "Sold", views: 890, date: "05 Feb 2026" },
    { id: 105, title: "Villa with Pool", location: "Alibaug", price: "₹15.0 Cr", type: "Sale", status: "Active", views: 120, date: "01 Feb 2026" },
];

export default function ListingsPage() {
    const [properties, setProperties] = useState(INITIAL_PROPERTIES);

    const handleMarkAsSold = (id: number) => {
        setProperties(prev => prev.map(p =>
            p.id === id ? { ...p, status: 'Sold' } : p
        ));
        alert(`Property #${id} has been marked as SOLD.`);
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this listing?")) {
            setProperties(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-8 font-sans pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900">Portfolio Management</h1>
                    <p className="text-slate-500 font-medium">Tracking {properties.length} active listings across Mumbai.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-2xl border-slate-200 h-12 px-6 font-bold shadow-sm">
                        Export Data
                    </Button>
                    <Button size="lg" className="rounded-2xl h-12 px-6 font-black uppercase tracking-wider shadow-xl shadow-primary/20 transition-all active:scale-95" asChild>
                        <Link href="/dashboard/add-property">
                            <Plus size={18} className="mr-2 stroke-[3]" /> Post New Unit
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard label="Live Units" value={properties.filter(p => p.status === 'Active').length} color="text-emerald-600" />
                <StatCard label="Drafts" value={properties.filter(p => p.status === 'Draft').length} color="text-amber-500" />
                <StatCard label="Successfully Sold" value={properties.filter(p => p.status === 'Sold').length} color="text-slate-900" />
                <StatCard label="Total Reach" value="2.4k Views" color="text-primary" />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 h-5 w-5" />
                    <Input
                        placeholder="Search properties by title or location..."
                        className="pl-12 h-14 bg-slate-50/50 border-none rounded-2xl text-sm font-semibold focus-visible:ring-2 focus-visible:ring-primary/20"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="outline" className="flex-1 md:flex-none h-14 rounded-2xl border-slate-100 bg-white font-bold text-slate-600 hover:bg-slate-50 transition-all">
                        <Filter size={18} className="mr-2" /> Filter By Status
                    </Button>
                    <Button variant="outline" className="flex-1 md:flex-none h-14 rounded-2xl border-slate-100 bg-white font-bold text-slate-600 hover:bg-slate-50 transition-all">
                        Most Recent <ChevronDown size={18} className="ml-2" />
                    </Button>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                <Table>
                    <TableHeader className="bg-slate-50/50">
                        <TableRow className="hover:bg-transparent border-slate-100">
                            <TableHead className="px-8 h-16 font-black uppercase tracking-[0.1em] text-[10px] text-slate-400">Property Details</TableHead>
                            <TableHead className="px-6 h-16 font-black uppercase tracking-[0.1em] text-[10px] text-slate-400">Operational Status</TableHead>
                            <TableHead className="px-6 h-16 font-black uppercase tracking-[0.1em] text-[10px] text-slate-400">Listed Price</TableHead>
                            <TableHead className="px-6 h-16 font-black uppercase tracking-[0.1em] text-[10px] text-slate-400">Analytics</TableHead>
                            <TableHead className="px-8 h-16 font-black uppercase tracking-[0.1em] text-[10px] text-slate-400 text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {properties.map((prop) => (
                            <TableRow key={prop.id} className="hover:bg-slate-50/50 transition-colors border-slate-50 group">
                                <TableCell className="px-8 py-6">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="font-black text-slate-800 group-hover:text-primary transition-colors">{prop.title}</span>
                                        <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                            <MapPin size={12} className="mr-1.5 text-primary/50" /> {prop.location}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="px-6 py-6">
                                    <StatusBadge status={prop.status} />
                                </TableCell>
                                <TableCell className="px-6 py-6">
                                    <div className="font-black text-slate-900">{prop.price}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">For {prop.type}</div>
                                </TableCell>
                                <TableCell className="px-6 py-6 font-medium">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={14} className="text-emerald-500" />
                                        <span className="font-black text-slate-700">{prop.views}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">Impact</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-8 py-6 text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200">
                                                <MoreHorizontal size={20} className="text-slate-400" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[220px] p-2 rounded-2xl shadow-2xl border-slate-100 animate-in slide-in-from-top-2 duration-200">
                                            <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 py-2">Property Control</DropdownMenuLabel>
                                            <DropdownMenuItem asChild className="rounded-xl py-3 cursor-pointer">
                                                <Link href={`/dashboard/add-property`} className="flex items-center gap-3">
                                                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                                                        <Edit2 size={16} />
                                                    </div>
                                                    <span className="font-bold text-sm">Edit Details</span>
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild className="rounded-xl py-3 cursor-pointer">
                                                <Link href={`/p/rahul-sharma/${prop.id}`} target="_blank" className="flex items-center gap-3">
                                                    <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                                                        <ExternalLink size={16} />
                                                    </div>
                                                    <span className="font-bold text-sm">View Public Page</span>
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator className="my-2 bg-slate-50" />
                                            <DropdownMenuItem
                                                className="rounded-xl py-3 cursor-pointer text-slate-900"
                                                onClick={() => handleMarkAsSold(prop.id)}
                                            >
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                                                        <CheckCircle size={16} />
                                                    </div>
                                                    <span className="font-bold text-sm">Mark as Sold</span>
                                                </div>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="rounded-xl py-3 cursor-pointer text-danger hover:bg-danger/10"
                                                onClick={() => handleDelete(prop.id)}
                                            >
                                                <div className="flex items-center gap-3 w-full">
                                                    <div className="bg-danger/10 p-2 rounded-lg text-danger">
                                                        <Trash2 size={16} />
                                                    </div>
                                                    <span className="font-bold text-sm">Remove Listing</span>
                                                </div>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function StatCard({ label, value, color }: { label: string, value: string | number, color: string }) {
    return (
        <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{label}</p>
            <p className={cn("text-2xl font-black", color)}>{value}</p>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    if (status === "Active") {
        return (
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 w-fit">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Live</span>
            </div>
        )
    }
    if (status === "Sold") {
        return (
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 w-fit grayscale">
                <CheckCircle size={12} />
                <span className="text-[10px] font-black uppercase tracking-widest">Achieved</span>
            </div>
        )
    }
    return (
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 border border-amber-100 w-fit">
            <span className="text-[10px] font-black uppercase tracking-widest">Draft</span>
        </div>
    )
}

function ChevronDown({ className, size }: { className?: string, size?: number }) {
    return <Plus className={cn("rotate-45", className)} size={size} />
}
