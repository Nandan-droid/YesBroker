"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Home as HomeIcon,
  Key,
  Building,
  Layers,
  MapPin,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Smartphone
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-primary/20">
      {/* Premium Navbar */}
      <nav className="fixed top-0 inset-x-0 h-20 bg-white/90 backdrop-blur-md border-b border-border/50 z-50 px-6">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="text-[#111827]">Yes<span className="text-primary italic">Broker</span></span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <Link href="/homes?type=buy" className="text-sm font-bold text-[#374151] hover:text-primary transition-colors tracking-tight">Buy</Link>
              <Link href="/homes?type=rent" className="text-sm font-bold text-[#374151] hover:text-primary transition-colors tracking-tight">Rent</Link>
              <Link href="/homes?type=sell" className="text-sm font-bold text-[#374151] hover:text-primary transition-colors tracking-tight">Sell</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-[#374151] hover:text-primary transition-colors hidden sm:block">
              Manage Listings
            </Link>
            <Button className="rounded-2xl font-black px-6 shadow-xl shadow-primary/20 group" asChild>
              <Link href="/onboarding">
                Join as Broker <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-20">
        {/* Zillow-Style Hero Section with Premium Backdrop */}
        <section
          className="relative h-[85vh] min-h-[700px] flex items-center justify-center px-6 overflow-hidden"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%'
          }}
        >
          {/* Enhanced Dark Overlay for Perfect Readability */}
          <div className="absolute inset-0 bg-[#111827]/60 backdrop-blur-[1px]" />

          {/* Background Visual (Abstract Premium Gradient) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />

          <div className="relative w-full max-w-4xl text-center space-y-10">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Find it. <span className="text-primary italic drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">Tour it.</span> <br />
              Own it.
            </h1>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto bg-white p-2 md:p-3 rounded-[32px] shadow-2xl flex items-center gap-2 border border-border/50 group focus-within:ring-4 ring-primary/20 transition-all">
              <div className="flex-1 flex items-center px-4">
                <Search className="text-muted-foreground w-6 h-6 mr-3" />
                <input
                  placeholder="Enter Address, Neighborhood, City, or ZIP Code"
                  className="w-full h-12 bg-transparent border-none outline-none font-bold text-lg text-[#111827] placeholder:text-muted-foreground/60"
                />
              </div>
              <Button size="lg" className="h-12 md:h-14 px-10 rounded-2xl font-black text-lg">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Badge label="South Mumbai" />
              <Badge label="Bandra West" />
              <Badge label="Juhu Luxury" />
              <Badge label="Thane Central" />
            </div>
          </div>
        </section>

        {/* Journey Options (Buy/Rent/Sell) */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <JourneyCard
              icon={<HomeIcon className="w-12 h-12" />}
              title="Buy a home"
              description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else."
              btnText="Browse homes"
              link="/homes?type=buy"
            />
            <JourneyCard
              icon={<Key className="w-12 h-12" />}
              title="Rent a home"
              description="We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent."
              btnText="Find rentals"
              link="/homes?type=rent"
            />
            <JourneyCard
              icon={<Building className="w-12 h-12" />}
              title="For Brokers"
              description="Join the elite network of YesBroker. Create your 30-second digital portfolio and manage leads with zero effort."
              btnText="Join as Broker"
              link="/onboarding"
              variant="primary"
            />
          </div>
        </section>

        {/* Trust & Stats Section */}
        <section className="py-24 bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                The most trusted real estate network in <span className="text-primary italic">Mumbai</span>.
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed">
                Whether you're selling your current home or finding a new one, YesBroker helps you navigate the Mumbai market with confidence.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <StatItem label="Verified Listings" value="12k+" />
                <StatItem label="RERA Brokers" value="500+" />
                <StatItem label="Monthly Tours" value="45k+" />
                <StatItem label="Closed Deals" value="₹2.4B+" />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 space-y-8 backdrop-blur-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest">
                  <TrendingUp size={16} /> Market Insight
                </div>
                <h3 className="text-3xl font-black tracking-tighter">Everything you need to know about South Mumbai property trends.</h3>
              </div>
              <ul className="space-y-4">
                <ValuePoint text="Verified property valuations" />
                <ValuePoint text="Direct WhatsApp connection to owners" />
                <ValuePoint text="Historical price trends for every ZIP" />
              </ul>
              <button className="w-full h-16 rounded-[24px] border border-white/20 bg-transparent text-white hover:bg-white hover:text-[#111827] text-lg font-black transition-all">
                Explore Market Data
              </button>
            </div>
          </div>
        </section>

        {/* Platform Features for Brokers */}
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#111827]">
              Empowering India's Modern Brokers
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Move away from PDFs and Zip files. Upgrade to a digital identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Smartphone className="text-primary w-10 h-10" />}
              title="WhatsApp Native"
              description="Get instant lead alerts on WhatsApp. Your clients can reach you in one tap."
            />
            <FeatureCard
              icon={<ShieldCheck className="text-primary w-10 h-10" />}
              title="Verified Trust"
              description="Showcase your RERA credentials and closed deals to build ultimate trust."
            />
            <FeatureCard
              icon={<ArrowRight className="text-primary w-10 h-10" />}
              title="Instant Portfolio"
              description="Upload photos from your phone and your public URL is ready. No complex setup."
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 pb-32 px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-[64px] p-12 md:p-20 text-center text-white space-y-10 shadow-2xl shadow-primary/30 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none relative z-10 text-balance">
              Ready to find your <br className="hidden md:block" /> new beginning?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Button size="lg" className="h-16 px-12 rounded-[24px] bg-white text-primary hover:bg-white/90 text-xl font-black shadow-xl" asChild>
                <Link href="/onboarding">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 rounded-[24px] border-white/30 text-white hover:bg-white/10 hover:text-white text-xl font-black" asChild>
                <Link href="/homes">Browse Listings</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="py-20 px-6 border-t border-border/50 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
                <Layers className="text-white w-4 h-4" />
              </div>
              <span className="text-[#111827]">YesBroker</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              Leading the digital transformation of Mumbai's real estate market.
              Built for brokers, loved by families.
            </p>
          </div>

          <FooterColumn title="Platform" links={["Buy", "Rent", "Commercial", "New Projects"]} />
          <FooterColumn title="Broker Focus" links={["Join YesBroker", "Digital Portfolio", "Lead Manager", "Pricing"]} />
          <FooterColumn title="Company" links={["About Us", "Contact", "Privacy", "Terms"]} />
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/50 flex justify-between items-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <p>© 2026 YesBroker Real Estate Services India.</p>
          <p>South Mumbai • Bandra • Thane</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <Link href="#" className="text-sm font-bold text-[#374151] hover:text-primary transition-colors tracking-tight">
      {label}
    </Link>
  )
}

function JourneyCard({ icon, title, description, btnText, link, variant = "outline" }: any) {
  return (
    <Card className="rounded-[40px] border-border/50 p-10 flex flex-col items-center text-center space-y-6 hover:shadow-2xl transition-all duration-500 group">
      <div className="p-6 bg-primary/5 rounded-[32px] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div className="space-y-4 flex-1">
        <h3 className="text-3xl font-black tracking-tighter text-[#111827]">{title}</h3>
        <p className="text-md text-muted-foreground font-medium leading-relaxed">{description}</p>
      </div>
      <Button
        variant={variant === "primary" ? "default" : "outline"}
        className={cn(
          "h-14 w-full rounded-2xl text-md font-black shadow-lg shadow-primary/5",
          variant === "primary" ? "shadow-primary/20" : "border-border/50"
        )}
        asChild
      >
        <Link href={link}>{btnText}</Link>
      </Button>
    </Card>
  )
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-3xl font-black italic">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{label}</p>
    </div>
  )
}

function ValuePoint({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-lg font-bold text-white/90">
      <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
      {text}
    </li>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 bg-[#F9FAFB] rounded-[40px] border border-border/50 space-y-6 hover:bg-white hover:shadow-xl transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <div className="space-y-2">
        <h3 className="text-2xl font-black tracking-tighter text-[#111827]">{title}</h3>
        <p className="text-muted-foreground font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function FooterColumn({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-6">
      <p className="text-sm font-black uppercase tracking-widest text-[#111827]">{title}</p>
      <ul className="space-y-3">
        {links.map(l => (
          <li key={l}>
            <Link href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Badge({ label }: { label: string }) {
  return (
    <span className="px-5 py-2 rounded-full bg-white border border-border/50 text-sm font-bold text-[#374151] hover:border-primary cursor-pointer shadow-sm transition-all hover:-translate-y-0.5">
      {label}
    </span>
  )
}
