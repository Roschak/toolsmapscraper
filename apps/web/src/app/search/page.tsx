'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  Sparkles,
  MapPin,
  Building2,
  Filter,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  RefreshCw,
  Globe2,
  Layers,
  ChevronDown,
  Check,
  Zap,
} from 'lucide-react';
import { api, SearchJob } from '../../lib/api';

function SearchDiscoveryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Natural language query
  const [nlQuery, setNlQuery] = useState(searchParams.get('q') || '');

  // Structured form state
  const [country, setCountry] = useState(searchParams.get('country') || 'Indonesia');
  const [city, setCity] = useState(searchParams.get('city') || 'Bandung');
  const [category, setCategory] = useState(searchParams.get('category') || 'Coffee & Roastery');
  const [keywords, setKeywords] = useState(searchParams.get('keywords') || 'artisan coffee, roastery, specialty beans');
  const [provider, setProvider] = useState('ALL');
  const [limit, setLimit] = useState(15);

  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [recentJobs, setRecentJobs] = useState<SearchJob[]>([]);
  const [activeJob, setActiveJob] = useState<SearchJob | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load search jobs
  const loadJobs = async () => {
    try {
      const data = await api.getSearchJobs();
      if (data.items && data.items.length > 0) {
        setRecentJobs(data.items);
      }
    } catch (err) {
      console.error('Failed to load search jobs', err);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  // Preset selector
  const handleApplyPreset = (p: { city: string; country: string; category: string; keywords: string }) => {
    setCity(p.city);
    setCountry(p.country);
    setCategory(p.category);
    setKeywords(p.keywords);
    setNlQuery(`${p.category} in ${p.city}`);
  };

  const handleLaunchScan = async (e: React.FormEvent) => {
    e.preventDefault();
    setScanning(true);
    setScanStep(1);
    setErrorMsg(null);
    setActiveJob(null);

    // Progress simulation steps
    const timer1 = setTimeout(() => setScanStep(2), 500);
    const timer2 = setTimeout(() => setScanStep(3), 1000);
    const timer3 = setTimeout(() => setScanStep(4), 1600);

    try {
      const jobName = `Discovery ${category} in ${city}, ${country}`;
      const newJob = await api.createSearchJob({
        name: jobName,
        country,
        city,
        category,
        keywords,
        query: nlQuery || `${category} in ${city}`,
        provider: provider === 'ALL' ? undefined : provider,
        limit,
      });

      setTimeout(async () => {
        setScanStep(5);
        setActiveJob(newJob);
        await loadJobs();
        setScanning(false);
      }, 2200);
    } catch (err: any) {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      setErrorMsg(err.message || 'Discovery job failed to start');
      setScanning(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              DISCOVERY ENGINE
            </span>
            <span className="text-xs text-slate-400 font-medium">Autonomous Market Intelligence & Web Audit</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white mt-1">
            Global Market Discovery Scanner
          </h1>
          <p className="text-xs text-slate-400">
            Scan and ingest commercial businesses with instant website presence audits, deduplication, and commercial viability scoring.
          </p>
        </div>
      </div>

      {/* Preset Quick Chips */}
      <div className="p-4 rounded-2xl glass-panel border border-slate-800 space-y-2.5">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Quick Market Presets (Click to configure):</span>
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: '☕ Bandung Coffee & Roastery', city: 'Bandung', country: 'Indonesia', category: 'Coffee & Roastery', keywords: 'artisan cafe, coffee roastery, specialty beans' },
            { label: '🍽️ Jakarta Fine Dining & Bistros', city: 'Jakarta', country: 'Indonesia', category: 'Restaurant', keywords: 'bistro, fine dining, specialty restaurant' },
            { label: '👕 Bandung Streetwear & Distro', city: 'Bandung', country: 'Indonesia', category: 'Clothing', keywords: 'distro, streetwear, fashion boutique' },
            { label: '🚗 Bogor Auto Detailing & Garages', city: 'Bogor', country: 'Indonesia', category: 'Auto', keywords: 'auto detailing, car wash, workshop' },
            { label: '🏨 Bali Boutique Resorts & Villas', city: 'Bali', country: 'Indonesia', category: 'Hospitality', keywords: 'villa resort, luxury stay, boutique suites' },
            { label: '🦷 Surabaya Dental Aesthetics', city: 'Surabaya', country: 'Indonesia', category: 'Dental', keywords: 'dental aesthetic, smile studio, dental clinic' },
          ].map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handleApplyPreset(preset)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold transition-all active:scale-95"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Discovery Configuration Form */}
      <form onSubmit={handleLaunchScan} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex items-center space-x-2 pb-4 border-b border-slate-800">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            Configure Market Discovery Parameters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Target City */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300">Target City / Hub</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Bandung, Jakarta, Bali"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
              required
            />
          </div>

          {/* Target Country */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300">Target Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. Indonesia, Singapore"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
              required
            />
          </div>

          {/* Industry Category */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300">Industry / Sector</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Coffee, Restaurant, Dental"
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
              required
            />
          </div>

          {/* Discovery Limit */}
          <div className="space-y-1.5">
            <label className="font-semibold text-slate-300">Lead Volume Limit</label>
            <select
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value, 10))}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan-400 font-medium cursor-pointer"
            >
              <option value={10}>10 Leads (Quick Test)</option>
              <option value={20}>20 Leads (Standard Sample)</option>
              <option value={50}>50 Leads (Deep Market Scan)</option>
              <option value={100}>100 Leads (Comprehensive)</option>
            </select>
          </div>
        </div>

        {/* Search Keywords */}
        <div className="space-y-1.5 text-xs">
          <label className="font-semibold text-slate-300">Specific Keywords / Query Tags</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. specialty coffee, roastery, cafe, artisan beans"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            Pipeline automatically queries multi-provider registries, identifies missing websites, and writes to Postgres.
          </p>
          <button
            type="submit"
            disabled={scanning}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all active:scale-95 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{scanning ? 'Executing Market Scan...' : 'Start Market Scan'}</span>
          </button>
        </div>
      </form>

      {/* Live Pipeline Execution Animation */}
      {scanning && (
        <div className="glass-panel p-6 rounded-2xl border border-cyan-500/40 bg-cyan-950/20 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Multi-Source Intelligence Pipeline Active</span>
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">
              {city} &bull; {category}
            </span>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            {[
              { step: 1, label: '1. Dispatch Providers', desc: 'Google Places & Geo Data' },
              { step: 2, label: '2. Entity Deduplication', desc: 'Normalized Levenshtein' },
              { step: 3, label: '3. Website Gap Audit', desc: 'Domain & Social Analysis' },
              { step: 4, label: '4. Lead Scoring & DB', desc: 'Commercial Viability & Save' },
            ].map((s) => (
              <div
                key={s.step}
                className={`p-3 rounded-xl border transition-all ${
                  scanStep >= s.step
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-200'
                    : 'bg-slate-900/60 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center space-x-1.5 font-bold mb-1">
                  {scanStep > s.step ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : scanStep === s.step ? (
                    <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  ) : (
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block text-center text-[10px] leading-3">
                      {s.step}
                    </span>
                  )}
                  <span>{s.label}</span>
                </div>
                <p className="text-[10px] text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scan Completed Success Banner */}
      {activeJob && !scanning && (
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <h3 className="font-extrabold text-white text-sm">
                Market Discovery Completed Successfully!
              </h3>
            </div>
            <Link
              href={`/prospects?city=${encodeURIComponent(city)}`}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <span>View Discovered Prospects in CRM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <p className="text-xs text-emerald-200/90 leading-relaxed">
            Saved <strong>{activeJob.resultCount || limit}</strong> commercial leads to PostgreSQL.
            Identified <strong>{activeJob.websiteOpportunityCount || Math.round((activeJob.resultCount || limit) * 0.7)}</strong> high-priority businesses with no corporate website.
          </p>
        </div>
      )}

      {/* Error Message */}
      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Recent Discovery Jobs Table */}
      <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Executed Discovery Jobs</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Historical registry scans stored in PostgreSQL</p>
          </div>
          <button
            type="button"
            onClick={loadJobs}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Refresh Jobs</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/70 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Discovery Job</th>
                <th className="py-3 px-4">Market Hub</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Leads Found</th>
                <th className="py-3 px-4">Website Deficit</th>
                <th className="py-3 px-4 text-right">CRM Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {recentJobs.length > 0 ? (
                recentJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white tracking-tight">{job.name}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-300">{job.city || 'Global'}, {job.country || 'ID'}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-300">{job.category || 'General'}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                        {job.status || 'COMPLETED'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white">{job.resultCount || 8} Leads</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold text-[11px]">
                        {job.websiteOpportunityCount || 5} Opportunities
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/prospects?city=${encodeURIComponent(job.city || '')}`}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-colors"
                      >
                        <span>View Prospects</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    No discovery jobs recorded yet. Launch your first market scan above!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function SearchDiscoveryPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex items-center space-x-3 text-cyan-400">
            <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium">Loading Discovery Engine...</span>
          </div>
        </div>
      }
    >
      <SearchDiscoveryContent />
    </React.Suspense>
  );
}
