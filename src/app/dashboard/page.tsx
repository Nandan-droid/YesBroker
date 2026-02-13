"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LayoutDashboard, Home, Users, Settings, LogOut, TrendingUp, DollarSign, Building, Bell, Search, Menu, MessageSquare, Mail, Layers, CreditCard } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';

// Mock Data for Charts
const revenueData = [
    { name: 'Jan', income: 4000, expense: 2400 },
    { name: 'Feb', income: 3000, expense: 1398 },
    { name: 'Mar', income: 2000, expense: 9800 },
    { name: 'Apr', income: 2780, expense: 3908 },
    { name: 'May', income: 1890, expense: 4800 },
    { name: 'Jun', income: 2390, expense: 3800 },
    { name: 'Jul', income: 3490, expense: 4300 },
];

const salesData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 550 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 600 },
    { name: 'Jun', value: 700 },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <MetricCard
                    title="No. of Properties"
                    value="2,854"
                    change="+7.34%"
                    color="bg-purple-100 text-purple-600"
                    icon={<Building size={24} />}
                    chart={<MiniBarChart color="#8b5cf6" />}
                />
                <MetricCard
                    title="Regi. Agents"
                    value="705"
                    change="+76.89%"
                    isPositive
                    color="bg-emerald-100 text-emerald-600"
                    icon={<Users size={24} />}
                    chart={<MiniBarChart color="#10b981" />}
                />
                <MetricCard
                    title="Customers"
                    value="9,431"
                    change="+45.00%"
                    isPositive
                    color="bg-orange-100 text-orange-600"
                    icon={<Users size={24} />}
                    chart={<MiniBarChart color="#f59e0b" />}
                />
                <MetricCard
                    title="Revenue"
                    value="$78.3M"
                    change="+8.76%"
                    isPositive
                    color="bg-blue-100 text-blue-600"
                    icon={<DollarSign size={24} />}
                    chart={<MiniBarChart color="#2563eb" />}
                />
            </div>

            {/* Main Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Sales Analytic (Large Wave Chart) */}
                <Card className="xl:col-span-2 border-none shadow-sm rounded-3xl overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Sales Analytic</CardTitle>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">This Month</span>
                        </div>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Area type="monotone" dataKey="income" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                                <Area type="monotone" dataKey="expense" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Balance Card (Purple) */}
                <Card className="bg-primary text-white border-none shadow-lg shadow-primary/30 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <DollarSign size={120} />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                        <div>
                            <h3 className="text-3xl font-bold mb-1">$117,000.43</h3>
                            <p className="text-white/80">My Balance</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-2xl font-bold">$13,321.12</p>
                                    <p className="text-sm text-white/70">Income</p>
                                </div>
                                <div className="w-px h-10 bg-white/20" />
                                <div>
                                    <p className="text-2xl font-bold">$7,566.11</p>
                                    <p className="text-sm text-white/70">Expense</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white border-none rounded-xl">Send</Button>
                                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-none rounded-xl">Receive</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Property & Revenue Targets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TargetCard title="Property" value="15,780" target="60%" icon={<Home className="text-primary" size={28} />} color="bg-primary" />
                <TargetCard title="Revenue" value="$78.3M" target="80%" icon={<DollarSign className="text-emerald-500" size={28} />} color="bg-emerald-500" />
            </div>
        </div>
    );
}

function MetricCard({ title, value, change, isPositive, color, icon, chart }: any) {
    return (
        <Card className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className={cn("p-3 rounded-xl", color)}>
                        {icon}
                    </div>
                    <div className="h-10 w-20">
                        {chart}
                    </div>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{title}</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-2xl font-bold">{value}</h3>
                        <span className={cn(
                            "text-xs font-bold px-2 py-1 rounded-md",
                            change.includes("+") ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                        )}>
                            {change}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function TargetCard({ title, value, target, icon, color }: any) {
    return (
        <Card className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-8 flex items-center justify-between">
                <div className="text-center w-full">
                    <div className="bg-muted p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{value}</h3>
                    <p className="text-muted-foreground mb-4">{target} Target</p>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full", color)} style={{ width: target }} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function MiniBarChart({ color }: { color: string }) {
    const data = [
        { v: 10 }, { v: 20 }, { v: 15 }, { v: 25 }, { v: 30 }, { v: 20 }, { v: 10 }
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <Bar dataKey="v" fill={color} radius={[2, 2, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )
}
