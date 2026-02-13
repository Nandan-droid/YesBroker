"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Home, Users, Settings, LogOut, Building, Bell, Search, Menu, Layers, CreditCard } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background flex font-sans">
            {/* Dark Sidebar */}
            <aside className="hidden lg:flex w-72 flex-col bg-sidebar-bg text-sidebar-fg fixed inset-y-0 left-0 z-50 transition-all duration-300">
                <div className="flex h-20 items-center px-8">
                    <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
                        <div className="bg-white text-primary p-1.5 rounded-lg rotate-3 shadow-md">
                            <Layers className="h-6 w-6" />
                        </div>
                        <span className="text-white">Yes<span className="text-primary italic">Broker</span></span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-4 px-4 opacity-50">Menu</p>
                        <nav className="space-y-1">
                            <SidebarLink href="/dashboard" icon={<LayoutDashboard />} label="Dashboard" />
                            <SidebarLink href="/dashboard/add-property" icon={<Layers />} label="Add Property" />
                            <SidebarLink href="/dashboard/customers" icon={<Users />} label="Customers" />
                            <SidebarLink href="/dashboard/listings" icon={<Home />} label="Property" />
                            <SidebarLink href="/dashboard/settings" icon={<Settings />} label="Settings" />
                        </nav>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-4 px-4 opacity-50">Custom</p>
                        <nav className="space-y-1">
                            <SidebarLink href="/demo" icon={<LayoutDashboard />} label="Demo Page" />
                            <SidebarLink href="/dashboard/transactions" icon={<CreditCard />} label="Transactions" />
                        </nav>
                    </div>
                </div>

                <div className="p-4 m-4 bg-sidebar-accent/30 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-purple-400 p-[2px]">
                            <img src="https://github.com/shadcn.png" className="rounded-full" alt="User" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">Rahul Sharma</p>
                            <p className="text-xs text-sidebar-fg truncate">Admin</p>
                        </div>
                        <LogOut size={16} className="ml-auto cursor-pointer hover:text-white" />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 p-8 space-y-8 overflow-x-hidden">
                {/* Header */}
                <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground">
                            <Menu />
                        </Button>
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <input
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 bg-muted rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-danger rounded-full" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <Settings size={20} />
                        </Button>
                    </div>
                </header>

                {children}
            </main>
        </div>
    );
}

function SidebarLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-sidebar-fg hover:bg-sidebar-accent hover:text-white"
            )}
        >
            <div className={cn("transition-colors", isActive ? "text-white" : "text-sidebar-fg group-hover:text-white")}>
                {icon}
            </div>
            {label}
        </Link>
    )
}
