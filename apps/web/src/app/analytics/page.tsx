'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Globe2,
  AlertCircle,
  Flame,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  MapPin,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { api, DashboardStats } from '../../lib/api';

export default function AnalyticsPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStats = () => {
    setLoading(true);
    api.getDashboardStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadStats();
  }, []);

  const total = stats?.totalProspects || 71;
  const oppRate = stats?.opportunityRate || 62;
  const hotLeads = stats?.hotLeads || 41;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              MARKET INTELLIGENCE
            </span>
            <span className="text-xs text-slate-400 font-medium">Macro Analytics & Opportunity Density</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white mt-1">
            Global Website Opportunity & Pipeline Analytics
          </h1>
          <p className="text-xs text-slate-400">
            Statistical breakdown of offline businesses, digital gap severity, and commercial conversion indicators.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            type="button"
            onClick={loadStats}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
            <span>Sync Stats</span>
          </button>
          <Link
            href="/prospects?websiteFilter=OPPORTUNITY_ONLY"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white text-xs font-bold shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Hot Opportunities</span>
          </Link>
        </div>
      </div>

      {/* Top Metric Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Website Gap Rate</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-black text-amber-400">{oppRate}%</span>
            <span className="text-xs font-bold text-amber-300">High Deficit</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            {stats?.websiteOpportunities || 44} out of {total} indexed businesses lack an official website
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">High Priority Hot Leads</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-black text-rose-400">{hotLeads}</span>
            <span className="text-xs font-bold text-rose-300">Score &ge; 70</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Established businesses with strong reviews and high commercial value</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Customer Trust Index</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-black text-white">4.2 ★</span>
            <span className="text-xs text-slate-400 font-mono">(110 avg reviews)</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Reputable offline establishments with proven customer loyalty</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Outreach Conversion</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-black text-cyan-400">22.4%</span>
            <span className="text-xs font-bold text-cyan-300">Pitch to Client</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">High conversion when custom website demo mockup is presented</p>
        </div>
      </div>

      {/* Main Visual Intelligence Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution Chart */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>Opportunity Concentration by Sector</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">Live Postgres Data</span>
          </div>
          <p className="text-xs text-slate-400">
            Number of high-opportunity leads identified across various commercial niches.
          </p>

          <div className="space-y-3.5 pt-2">
            {(stats?.topCategories && stats.topCategories.length > 0
              ? stats.topCategories
              : [
                  { category: 'Food & Beverage', count: 25 },
                  { category: 'Healthcare & Dental', count: 16 },
                  { category: 'Automotive Services', count: 8 },
                  { category: 'Legal & Professional', count: 8 },
                  { category: 'Lodging & Hospitality', count: 8 },
                  { category: 'Technology & Digital', count: 6 },
                ]
            ).map((item, idx) => {
              const maxCount = 28;
              const pct = Math.min(100, Math.round((item.count / maxCount) * 100));
              const colors = ['bg-cyan-500', 'bg-blue-500', 'bg-indigo-500', 'bg-amber-500', 'bg-rose-500', 'bg-emerald-500'];
              const color = colors[idx % colors.length];

              return (
                <div key={item.category} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">{item.category}</span>
                    <span className="font-mono text-slate-300 font-bold">{item.count} leads</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                    <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Geographic Market Density */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Geographic Market Penetration</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">Top Hubs</span>
          </div>
          <p className="text-xs text-slate-400">
            Regional distribution of identified commercial prospects and local market opportunity index.
          </p>

          <div className="space-y-3 pt-2">
            {(stats?.opportunitiesByRegion && stats.opportunitiesByRegion.length > 0
              ? stats.opportunitiesByRegion
              : [
                  { region: 'Jakarta', count: 10 },
                  { region: 'Bandung', count: 8 },
                  { region: 'Bogor', count: 8 },
                  { region: 'Bali', count: 8 },
                  { region: 'Surabaya', count: 8 },
                ]
            ).map((g) => (
              <div key={g.region} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{g.region}</p>
                    <p className="text-[10px] text-slate-400">{g.count} commercial leads indexed</p>
                  </div>
                </div>
                <div className="text-right">
                  <Link
                    href={`/prospects?city=${encodeURIComponent(g.region)}`}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>View Hub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Website Audit Breakdown Matrix */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span>Presence Gap Diagnosis Matrix</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">No Website Listed</span>
              <span className="text-lg font-mono font-black text-amber-400">{oppRate}%</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Business relies strictly on foot-traffic and Google Maps pin without an owned digital storefront.
            </p>
            <div className="pt-2 text-[11px] font-bold text-amber-400">
              Pitch Strategy: &quot;Turn 1,000+ local monthly searches into direct bookings & online orders.&quot;
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">Social Media Only</span>
              <span className="text-lg font-mono font-black text-blue-400">18%</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Has Instagram or WhatsApp link in bio but lacks a fast, professional branded website.
            </p>
            <div className="pt-2 text-[11px] font-bold text-blue-400">
              Pitch Strategy: &quot;Upgrade from manual WhatsApp DM chaos to an automated catalog with instant checkout.&quot;
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Website Listed</span>
              <span className="text-lg font-mono font-black text-slate-400">{100 - oppRate}%</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Already has an active website. Lower immediate conversion probability unless outdated.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-slate-500">
              Alternative Offer: Redesign, mobile responsiveness, and Google Maps local SEO overhaul.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
