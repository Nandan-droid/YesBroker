"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, DollarSign, Building, Users, Calendar, ArrowUpRight, ArrowDownRight, MoreVertical, Star, MapPin, Home, Layers } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

// Mock Data for Charts
const revenueData = [
    { name: 'Jan', income: 4000, expense: 2400 },
    { name: 'Feb', income: 3000, expense: 1398 },
    { name: 'Mar', income: 4000, expense: 9800 },
    { name: 'Apr', income: 2780, expense: 3908 },
    { name: 'May', income: 1890, expense: 4800 },
    { name: 'Jun', income: 2390, expense: 3800 },
    { name: 'Jul', income: 3490, expense: 4300 },
];

const propertyStatusData = [
    { name: 'For Sale', value: 400, color: '#8b5cf6' },
    { name: 'For Rent', value: 300, color: '#10b981' },
    { name: 'Sold', value: 300, color: '#f59e0b' },
];

const topAgents = [
    { name: 'Rahul Sharma', properties: 45, rating: 4.8, image: 'https://i.pravatar.cc/150?u=rahul' },
    { name: 'Priya Verma', properties: 38, rating: 4.9, image: 'https://i.pravatar.cc/150?u=priya' },
    { name: 'Amit Singh', properties: 32, rating: 4.7, image: 'https://i.pravatar.cc/150?u=amit' },
];

const recentProperties = [
    { name: 'Luxury Villa', location: 'Alibaug, Mumbai', price: '₹4.5 Cr', status: 'For Sale', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop' },
    { name: 'Skyline Apartment', location: 'Worli, Mumbai', price: '₹12.2 Cr', status: 'For Rent', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop' },
    { name: 'Studio Flat', location: 'Andheri, Mumbai', price: '₹85 L', status: 'For Sale', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop' },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8 pb-12">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <MetricCard
                    title="Total Revenue"
                    value="₹78.3 Cr"
                    change="+12.5%"
                    isPositive
                    icon={<DollarSign size={20} />}
                    color="bg-purple-100 text-purple-600"
                />
                <MetricCard
                    title="Properties Sold"
                    value="1,284"
                    change="+8.2%"
                    isPositive
                    icon={<Building size={20} />}
                    color="bg-emerald-100 text-emerald-600"
                />
                <MetricCard
                    title="Active Agents"
                    value="705"
                    change="-2.4%"
                    isPositive={false}
                    icon={<Users size={20} />}
                    color="bg-blue-100 text-blue-600"
                />
                <MetricCard
                    title="Customer Leads"
                    value="9,431"
                    change="+15.0%"
                    isPositive
                    icon={<TrendingUp size={20} />}
                    color="bg-orange-100 text-orange-600"
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Sales Analytic */}
                <Card className="xl:col-span-2 border-none shadow-sm rounded-3xl overflow-hidden bg-white">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle className="text-xl font-bold">Income Analysis</CardTitle>
                            <CardDescription>Monthly revenue vs expenses</CardDescription>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-xl">This Year</Button>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                <Area type="monotone" dataKey="income" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorIncome)" />
                                <Area type="monotone" dataKey="expense" stroke="#10b981" strokeWidth={4} fillOpacity={0} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Property Status Donut */}
                <Card className="border-none shadow-sm rounded-3xl bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Property Status</CardTitle>
                        <CardDescription>Distribution of listings</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[250px] flex flex-col items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={propertyStatusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {propertyStatusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="grid grid-cols-3 gap-4 mt-4 w-full text-center">
                            {propertyStatusData.map(item => (
                                <div key={item.name}>
                                    <p className="text-xs text-muted-foreground">{item.name}</p>
                                    <p className="text-sm font-bold">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Properties */}
                <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl bg-white overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-xl font-bold">Recent Properties</CardTitle>
                        <Link href="/dashboard/listings" className="text-sm text-primary font-semibold hover:underline">View All</Link>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-muted/50">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Property</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-muted">
                                    {recentProperties.map((prop, i) => (
                                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={prop.image} className="h-10 w-10 rounded-lg object-cover" alt="" />
                                                    <span className="font-semibold text-sm">{prop.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <MapPin size={12} />
                                                    {prop.location}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-sm">{prop.price}</td>
                                            <td className="px-6 py-4">
                                                <span className={cn(
                                                    "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                                                    prop.status === 'For Sale' ? "bg-purple-100 text-purple-600" : "bg-emerald-100 text-emerald-600"
                                                )}>
                                                    {prop.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Button variant="ghost" size="icon" className="rounded-full">
                                                    <MoreVertical size={16} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Top Agents */}
                <Card className="border-none shadow-sm rounded-3xl bg-white">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Top Agents</CardTitle>
                        <CardDescription>Performance leaders</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {topAgents.map((agent, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="relative">
                                        <img src={agent.image} className="h-12 w-12 rounded-2xl object-cover shadow-md" alt="" />
                                        <div className="absolute -bottom-1 -right-1 bg-white rounded-lg px-1 py-0.5 shadow-sm border border-muted flex items-center gap-0.5">
                                            <Star size={10} className="fill-yellow-400 text-yellow-400" />
                                            <span className="text-[10px] font-bold">{agent.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm group-hover:text-primary transition-colors">{agent.name}</p>
                                        <p className="text-xs text-muted-foreground">{agent.properties} Properties Sold</p>
                                    </div>
                                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-8 rounded-2xl bg-muted/30 text-foreground hover:bg-primary hover:text-white transition-all border-none font-bold">
                            View All Agents
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Property & Revenue Targets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TargetCard title="Sales Target" value="15,780 Units" target="75%" icon={<Home className="text-primary" size={28} />} color="bg-primary" />
                <TargetCard title="Revenue Target" value="₹100 Cr" target="80%" icon={<DollarSign className="text-emerald-500" size={28} />} color="bg-emerald-500" />
            </div>
        </div>
    );
}

function MetricCard({ title, value, change, isPositive, color, icon }: any) {
    return (
        <Card className="border-none shadow-sm rounded-3xl bg-white group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110", color)}>
                        {icon}
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{title}</p>
                        <h3 className="text-2xl font-black tracking-tight">{value}</h3>
                    </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-muted/50">
                    <div className={cn(
                        "flex items-center gap-0.5 text-xs font-bold rounded-full px-2 py-0.5",
                        isPositive ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                    )}>
                        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {change}
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium italic">vs last month</span>
                </div>
            </CardContent>
        </Card>
    )
}

function TargetCard({ title, value, target, icon, color }: any) {
    return (
        <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8 flex items-center justify-between">
                <div className="flex items-center gap-6 w-full">
                    <div className="bg-muted p-5 rounded-3xl">
                        {icon}
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">{title}</p>
                                <h3 className="text-3xl font-black">{value}</h3>
                            </div>
                            <span className="text-sm font-bold text-primary">{target} Achievement</span>
                        </div>
                        <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                            <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: target }} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
