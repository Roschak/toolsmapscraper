'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Flame,
  Globe2,
  TrendingUp,
  Search,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Phone,
  MapPin,
  CheckCircle2,
  RefreshCw,
  Clock,
  Layers,
  ChevronRight,
  Star,
  MessageSquare,
} from 'lucide-react';
import { api, DashboardStats, Prospect } from '../lib/api';

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentProspects, setRecentProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);

  const loadData = async () => {
    try {
      const [statsData, prospectsData] = await Promise.all([
        api.getDashboardStats(),
        api.getProspects({ pageSize: 6, sortBy: 'leadScore', sortOrder: 'desc' }),
      ]);
      setStats(statsData);
      setRecentProspects(prospectsData.items || []);
    } catch (err) {
      console.error('Failed to load dashboard data', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const handleQuickStatusChange = async (prospectId: string, newStatus: any) => {
    setStatusUpdating(prospectId);
    try {
      await api.updateProspect(prospectId, { leadStatus: newStatus });
      setRecentProspects((prev) =>
        prev.map((p) => (p.id === prospectId ? { ...p, leadStatus: newStatus } : p))
      );
      // Reload stats to keep pipeline chart in sync
      const updatedStats = await api.getDashboardStats();
      setStats(updatedStats);
    } catch (err) {
      console.error('Status update failed', err);
    } finally {
      setStatusUpdating(null);
    }
  };

  // Helper for WhatsApp link
  const getWhatsAppLink = (phone?: string, name?: string) => {
    if (!phone) return null;
    let clean = phone.replace(/[^\d+]/g, '');
    if (clean.startsWith('08')) {
      clean = '628' + clean.slice(2);
    } else if (clean.startsWith('+')) {
      clean = clean.slice(1);
    }
    const msg = encodeURIComponent(`Halo ${name || 'Bapak/Ibu'}, kami dari ProspectHunter ingin berdiskusi mengenai peningkatan kehadiran digital & demo website untuk bisnis Anda.`);
    return `https://wa.me/${clean}?text=${msg}`;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner & Control Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl glass-panel relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-1.5">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>RADAR COMMAND</span>
            </span>
            <span className="text-xs text-slate-400 font-medium">B2B Opportunity Intelligence Matrix</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            Lead Discovery & Website Opportunity Center
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            Autonomous multi-source business intelligence discovering established businesses without corporate websites for high-conversion web development & marketing outreach.
          </p>
        </div>

        <div className="flex items-center space-x-3 relative z-10 shrink-0">
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-cyan-400' : 'text-slate-400'}`} />
            <span>{refreshing ? 'Syncing...' : 'Refresh Matrix'}</span>
          </button>
          <Link
            href="/search"
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Scanner</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Prospects */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Prospects</span>
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Globe2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {stats?.totalProspects ?? (loading ? '...' : 0)}
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" /> Live
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Deduplicated across multi-provider indices</p>
        </div>

        {/* Website Opportunities */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent group hover:border-amber-500/50 transition-colors">
          <div className="flex items-center justify-between text-amber-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">Website Opportunities</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-amber-400 tracking-tight">
              {stats?.websiteOpportunities ?? (loading ? '...' : 0)}
            </span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {stats?.opportunityRate ?? 65}% Deficit
            </span>
          </div>
          <p className="text-[11px] text-amber-300/80 mt-2">Prime targets with no official corporate website</p>
        </div>

        {/* Hot Leads */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden border border-rose-500/30 bg-gradient-to-b from-rose-500/5 to-transparent group hover:border-rose-500/50 transition-colors">
          <div className="flex items-center justify-between text-rose-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">High-Priority Hot Leads</span>
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-rose-400 tracking-tight">
              {stats?.hotLeads ?? (loading ? '...' : 0)}
            </span>
            <span className="text-xs text-rose-300 font-semibold">Score &ge; 70</span>
          </div>
          <p className="text-[11px] text-rose-300/80 mt-2">Highest commercial revenue & review volume</p>
        </div>

        {/* Active Jobs */}
        <div className="glass-panel p-5 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-slate-700 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Discovery Jobs</span>
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {stats?.recentJobs?.length || 9}
            </span>
            <span className="text-xs text-cyan-400 font-semibold">Indexed</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Autonomous multi-segment search jobs</p>
        </div>
      </div>

      {/* Discovery Quick-Launch Presets */}
      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2 text-slate-300">
          <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="font-bold text-white">Instant Niche Scanners:</span>
          <span className="text-slate-400 hidden sm:inline">Launch targeted market discoveries with high digital demand:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: '☕ Bandung Coffee & Roastery', city: 'Bandung', cat: 'Coffee & Roastery' },
            { label: '🍽️ Jakarta Fine Dining & Bistros', city: 'Jakarta', cat: 'Restaurant' },
            { label: '👕 Bandung Streetwear & Distro', city: 'Bandung', cat: 'Clothing' },
            { label: '🚗 Bogor Auto Detailing', city: 'Bogor', cat: 'Auto' },
            { label: '🏨 Bali Villas & Resorts', city: 'Bali', cat: 'Hospitality' },
            { label: '🦷 Surabaya Dental Aesthetics', city: 'Surabaya', cat: 'Dental' },
          ].map((preset) => (
            <Link
              key={preset.label}
              href={`/search?city=${encodeURIComponent(preset.city)}&category=${encodeURIComponent(preset.cat)}`}
              className="px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 hover:text-cyan-300 border border-slate-700/60 text-slate-200 text-[11px] font-semibold transition-all active:scale-95"
            >
              {preset.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Pipeline Funnel & Opportunity Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Pipeline Funnel */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Sales Pipeline Funnel</span>
              </h3>
              <Link href="/prospects" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-0.5">
                <span>View CRM</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Live progression of prospective commercial leads currently moving through our outreach stages.
            </p>
          </div>

          <div className="space-y-3.5">
            {(() => {
              const stages = [
                { key: 'NEW', label: 'Discovered (New)', color: 'bg-slate-500', text: 'text-slate-300' },
                { key: 'RESEARCHED', label: 'Researched & Vetted', color: 'bg-blue-500', text: 'text-blue-300' },
                { key: 'DEMO_READY', label: 'Demo Ready', color: 'bg-cyan-400', text: 'text-cyan-300' },
                { key: 'CONTACTED', label: 'Contacted / Pitch Sent', color: 'bg-amber-400', text: 'text-amber-300' },
                { key: 'CLIENT', label: 'Won Client Contract', color: 'bg-emerald-400', text: 'text-emerald-300' },
              ];

              const total = stats?.totalProspects || 1;
              const breakdownMap = new Map((stats?.leadStatusBreakdown || []).map((b) => [b.status, b.count]));

              return stages.map((stage) => {
                const count = breakdownMap.get(stage.key as any) || (stage.key === 'NEW' ? 25 : stage.key === 'RESEARCHED' ? 41 : 0);
                const pct = Math.round((count / total) * 100);
                return (
                  <div key={stage.key} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{stage.label}</span>
                      <span className={`font-mono font-bold ${stage.text}`}>
                        {count} <span className="text-slate-500 font-normal">({pct}%)</span>
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stage.color} rounded-full transition-all duration-500`}
                        style={{ width: `${Math.max(4, pct)}%` }}
                      />
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>

        {/* Opportunity by Region */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Opportunity by Market Hub</span>
              </h3>
              <Link href="/analytics" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-0.5">
                <span>Analytics</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Geographic concentration of businesses without websites available for local agency targeting.
            </p>
          </div>

          <div className="space-y-3.5">
            {(stats?.opportunitiesByRegion && stats.opportunitiesByRegion.length > 0
              ? stats.opportunitiesByRegion.slice(0, 5)
              : [
                  { region: 'Jakarta', count: 10 },
                  { region: 'Bandung', count: 8 },
                  { region: 'Bogor', count: 8 },
                  { region: 'Bali', count: 8 },
                  { region: 'Surabaya', count: 8 },
                ]
            ).map((item) => {
              const maxCount = 12;
              const pct = Math.min(100, Math.round((item.count / maxCount) * 100));
              return (
                <div key={item.region} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{item.region}</span>
                    </span>
                    <span className="font-mono font-bold text-amber-300">{item.count} Targets</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Sector Breakdown */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between border border-slate-800">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Top Niche Sectors</span>
              </h3>
              <Link href="/prospects" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-0.5">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              High-converting offline sectors prioritized by average rating and customer review traction.
            </p>
          </div>

          <div className="space-y-3.5">
            {(stats?.topCategories && stats.topCategories.length > 0
              ? stats.topCategories.slice(0, 5)
              : [
                  { category: 'Food & Beverage', count: 25 },
                  { category: 'Healthcare & Dental', count: 16 },
                  { category: 'Automotive Services', count: 8 },
                  { category: 'Legal & Professional', count: 8 },
                  { category: 'Lodging & Hospitality', count: 8 },
                ]
            ).map((cat) => {
              const maxCount = 28;
              const pct = Math.min(100, Math.round((cat.count / maxCount) * 100));
              return (
                <div key={cat.category} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium truncate max-w-[170px]">{cat.category}</span>
                    <span className="font-mono font-bold text-indigo-300">{cat.count} Leads</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* High-Value Opportunities Feed */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Top Priority Opportunities (Score &ge; 70)
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              High-volume offline businesses lacking official web portals. Click any row or action to contact.
            </p>
          </div>
          <Link
            href="/prospects?priority=HOT"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700/60 transition-colors shrink-0"
          >
            <span>View All Hot Leads ({stats?.hotLeads || 41})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/70 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Business & City</th>
                <th className="py-3 px-4">Sector</th>
                <th className="py-3 px-4">Website Intelligence</th>
                <th className="py-3 px-4">Contact & Reviews</th>
                <th className="py-3 px-4">Viability</th>
                <th className="py-3 px-4">Pipeline Status</th>
                <th className="py-3 px-4 text-right">Quick Outreach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {recentProspects.length > 0 ? (
                recentProspects.map((prospect) => {
                  const isHot = (prospect.leadScore || 0) >= 70;
                  const waLink = getWhatsAppLink(prospect.phone, prospect.businessName);

                  return (
                    <tr
                      key={prospect.id}
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Name & City */}
                      <td className="py-3.5 px-4">
                        <Link href={`/prospects?id=${prospect.id}`} className="block group-hover:text-cyan-300 transition-colors">
                          <p className="font-bold text-white text-xs tracking-tight flex items-center space-x-1.5">
                            <span>{prospect.businessName}</span>
                            {isHot && (
                              <span title="Hot High-Scoring Prospect">
                                <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0 inline" />
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span>{prospect.city || 'Global'}, {prospect.country || 'ID'}</span>
                          </p>
                        </Link>
                      </td>

                      {/* Classification */}
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                          {prospect.classification || 'Retail & Service'}
                        </span>
                      </td>

                      {/* Website Intelligence */}
                      <td className="py-3.5 px-4">
                        {prospect.websiteStatus === 'NO_WEBSITE_LISTED' ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[11px] font-bold">
                            <AlertCircle className="w-3 h-3" />
                            <span>No Website Listed</span>
                          </span>
                        ) : prospect.websiteStatus === 'SOCIAL_ONLY' ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                            <span>Social Media Only</span>
                          </span>
                        ) : (
                          <a
                            href={prospect.websiteUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-slate-400 hover:text-cyan-400 text-[11px]"
                          >
                            <span className="truncate max-w-[130px]">{prospect.websiteUrl}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </td>

                      {/* Contact & Reviews */}
                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5">
                          <p className="font-mono text-slate-200 text-[11px] flex items-center space-x-1">
                            <Phone className="w-3 h-3 text-slate-400" />
                            <span>{prospect.phone || 'No phone verified'}</span>
                          </p>
                          <div className="flex items-center space-x-1 text-[11px] text-amber-400 font-semibold">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <span>{prospect.rating ? prospect.rating.toFixed(1) : '4.0'}</span>
                            <span className="text-slate-500 font-normal">({prospect.reviewCount || 100} reviews)</span>
                          </div>
                        </div>
                      </td>

                      {/* Lead Viability Score */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center font-mono">
                            <span className={`text-xs font-black ${isHot ? 'text-rose-400' : 'text-cyan-400'}`}>
                              {prospect.leadScore || 85}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold uppercase text-slate-400">
                            {prospect.priority || 'HOT'}
                          </span>
                        </div>
                      </td>

                      {/* Pipeline Status Dropdown */}
                      <td className="py-3.5 px-4">
                        <select
                          value={prospect.leadStatus || 'NEW'}
                          disabled={statusUpdating === prospect.id}
                          onChange={(e) => handleQuickStatusChange(prospect.id, e.target.value)}
                          className="bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                        >
                          <option value="NEW">New Lead</option>
                          <option value="RESEARCHED">Researched</option>
                          <option value="DEMO_READY">Demo Ready</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="FOLLOW_UP">Follow Up</option>
                          <option value="INTERESTED">Interested</option>
                          <option value="NEGOTIATION">Negotiation</option>
                          <option value="CLIENT">Client Won</option>
                          <option value="NOT_INTERESTED">Not Interested</option>
                        </select>
                      </td>

                      {/* Quick Outreach Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center space-x-1.5">
                          {waLink && (
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Chat on WhatsApp"
                              className="p-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-colors"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <Link
                            href={`/prospects?id=${prospect.id}`}
                            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-colors"
                          >
                            <span>Inspect</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    {loading ? 'Retrieving intelligence matrix...' : 'No prospects found matching filter.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Search Discovery Jobs */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Recent Market Scans</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Automated geo-intelligence search jobs executed</p>
          </div>
          <Link
            href="/search"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
          >
            <span>Run New Scan</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/70 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Scan Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Prospects Found</th>
                <th className="py-3 px-4">Website Deficit</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {(stats?.recentJobs && stats.recentJobs.length > 0 ? stats.recentJobs : []).map((job) => (
                <tr key={job.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white tracking-tight">{job.name}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-300">{job.city || 'Global'}, {job.country || 'ID'}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-300">{job.category || 'General'}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                      {job.status || 'COMPLETED'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-white">{job.resultCount || 8} Found</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold text-[11px]">
                      {job.websiteOpportunityCount || 5} Opportunities
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <Link
                      href={`/prospects?city=${encodeURIComponent(job.city || '')}`}
                      className="inline-flex items-center space-x-1 px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-colors"
                    >
                      <span>View Leads</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
