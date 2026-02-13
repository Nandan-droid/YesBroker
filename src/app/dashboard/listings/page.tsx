"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, MoreHorizontal, MapPin, Bed, Bath, ArrowUpRight } from "lucide-react";
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
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const MOCK_PROPERTIES = [
    { id: 101, title: "3BHK Sea View Apartment", location: "Bandra West, Mumbai", price: "₹4.5 Cr", type: "Sale", status: "Active", views: 245, date: "12 Feb 2026" },
    { id: 102, title: "Luxury Penthouse", location: "Juhu, Mumbai", price: "₹6.8 Cr", type: "Sale", status: "Active", views: 56, date: "10 Feb 2026" },
    { id: 103, title: "Commercial Office Space", location: "BKC, Mumbai", price: "₹12.0 Cr", type: "Sale", status: "Draft", views: 12, date: "08 Feb 2026" },
    { id: 104, title: "2BHK Cozy Flat", location: "Andheri East, Mumbai", price: "₹1.8 Cr", type: "Sale", status: "Sold", views: 890, date: "05 Feb 2026" },
    { id: 105, title: "Villa with Pool", location: "Alibaug", price: "₹15.0 Cr", type: "Sale", status: "Active", views: 120, date: "01 Feb 2026" },
];

export default function ListingsPage() {
    return (
        <div className="space-y-8 font-sans">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground">My Listings</h1>
                    <p className="text-muted-foreground">Manage and track your property portfolio.</p>
                </div>
                <Button size="lg" className="rounded-xl shadow-lg shadow-primary/20" asChild>
                    <Link href="/dashboard/add-property">
                        <Plus size={18} className="mr-2" /> Add New Property
                    </Link>
                </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center bg-white p-4 rounded-xl border border-border/50 shadow-sm">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Search properties..."
                        className="pl-10 bg-muted/50 border-none focus-visible:ring-1"
                    />
                </div>
                <Button variant="outline" className="border-border/50">
                    <Filter size={16} className="mr-2" /> Filters
                </Button>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="w-[300px] font-bold">Property</TableHead>
                            <TableHead className="font-bold">Status</TableHead>
                            <TableHead className="font-bold">Price</TableHead>
                            <TableHead className="font-bold">Views</TableHead>
                            <TableHead className="font-bold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {MOCK_PROPERTIES.map((prop) => (
                            <TableRow key={prop.id} className="hover:bg-muted/20 transition-colors">
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-base">{prop.title}</span>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <MapPin size={12} className="mr-1" /> {prop.location}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <StatusBadge status={prop.status} />
                                </TableCell>
                                <TableCell>
                                    <div className="font-bold text-base">{prop.price}</div>
                                    <div className="text-xs text-muted-foreground">{prop.type}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center text-sm font-medium">
                                        {prop.views} <span className="text-muted-foreground ml-1">views</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreHorizontal size={16} />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[160px]">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                                            <DropdownMenuItem>View Public Page</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">Mark as Sold</DropdownMenuItem>
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

function StatusBadge({ status }: { status: string }) {
    if (status === "Active") {
        return (
            <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200">
                Active
            </Badge>
        )
    }
    if (status === "Sold") {
        return (
            <Badge variant="outline" className="bg-slate-100 text-slate-500 border-slate-200">
                Sold
            </Badge>
        )
    }
    return (
        <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
            Draft
        </Badge>
    )
}
