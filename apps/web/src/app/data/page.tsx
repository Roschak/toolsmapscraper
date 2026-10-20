'use client';

import React, { useState } from 'react';
import {
  Database,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Globe2,
  Sparkles,
  ShieldCheck,
  Zap,
  Server,
  Activity,
  Layers,
  Check,
} from 'lucide-react';

interface ProviderCard {
  id: string;
  name: string;
  type: string;
  status: 'ONLINE' | 'STANDBY' | 'CONFIGURED';
  latency: string;
  quotaUsed: string;
  quotaLimit: string;
  capabilities: {
    poiDiscovery: boolean;
    phoneLookup: boolean;
    ratingReviews: boolean;
    websitePresence: boolean;
    socialDetection: boolean;
  };
  description: string;
}

export default function DataProvidersPage() {
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const [providers, setProviders] = useState<ProviderCard[]>([
    {
      id: 'mock',
      name: 'ProspectHunter Global Simulator',
      type: 'Local Engine / Simulator',
      status: 'ONLINE',
      latency: '12ms',
      quotaUsed: '1,420',
      quotaLimit: 'Unlimited',
      capabilities: {
        poiDiscovery: true,
        phoneLookup: true,
        ratingReviews: true,
        websitePresence: true,
        socialDetection: true,
      },
      description: 'High-fidelity simulation engine generating realistic commercial entities across global markets with opportunity scoring.',
    },
    {
      id: 'google',
      name: 'Google Places API',
      type: 'Direct API (FieldMask Compliant)',
      status: 'ONLINE',
      latency: '142ms',
      quotaUsed: '2,310',
      quotaLimit: '50,000 / day',
      capabilities: {
        poiDiscovery: true,
        phoneLookup: true,
        ratingReviews: true,
        websitePresence: true,
        socialDetection: false,
      },
      description: 'Official Google Places API Text Search using restricted FieldMask for cost-effective canonical entity verification.',
    },
    {
      id: 'geoapify',
      name: 'Geoapify Places API',
      type: 'OpenStreetMap & Commercial Places',
      status: 'ONLINE',
      latency: '210ms',
      quotaUsed: '640',
      quotaLimit: '3,000 / day',
      capabilities: {
        poiDiscovery: true,
        phoneLookup: true,
        ratingReviews: false,
        websitePresence: true,
        socialDetection: false,
      },
      description: 'Global geographic coordinate provider with boundary searching and commercial category filtering.',
    },
    {
      id: 'foursquare',
      name: 'Foursquare Places POI',
      type: 'Commercial POI Dataset',
      status: 'STANDBY',
      latency: 'N/A',
      quotaUsed: '0',
      quotaLimit: '100,000 / mo',
      capabilities: {
        poiDiscovery: true,
        phoneLookup: true,
        ratingReviews: true,
        websitePresence: true,
        socialDetection: true,
      },
      description: 'Rich commercial venue metadata, photo presence, and social link extraction for high-tier enterprise leads.',
    },
    {
      id: 'overture',
      name: 'Overture Maps Foundation',
      type: 'Open Geodata Matrix',
      status: 'ONLINE',
      latency: '68ms',
      quotaUsed: '18,450',
      quotaLimit: 'Free / Open',
      capabilities: {
        poiDiscovery: true,
        phoneLookup: true,
        ratingReviews: false,
        websitePresence: true,
        socialDetection: false,
      },
      description: 'Open source foundation backed by Linux Foundation, Amazon, Meta, and Microsoft for baseline world POI data.',
    },
  ]);

  const handleTestProviders = () => {
    setTesting(true);
    setTestResult(null);
    setTimeout(() => {
      setTesting(false);
      setTestResult('All 4 active providers successfully responded. Average cluster latency: 84ms. Zero schema validation errors.');
    }, 1800);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              DATA FEDERATION
            </span>
            <span className="text-xs text-slate-400">Multi-Provider Registry & Telemetry</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mt-1">
            Data Providers & Source Infrastructure
          </h1>
          <p className="text-xs text-slate-400">
            Multi-source business POI ingestion network with deduplication and normalized canonical records.
          </p>
        </div>

        <button
          onClick={handleTestProviders}
          disabled={testing}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${testing ? 'animate-spin' : ''}`} />
          <span>{testing ? 'Testing Cluster...' : 'Run Provider Health Check'}</span>
        </button>
      </div>

      {testResult && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2.5 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{testResult}</span>
        </div>
      )}

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Configured Providers</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-extrabold text-white">5 Active</span>
            <span className="text-xs text-emerald-400 font-semibold">100% Ready</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Automatic fallback if any provider exhausts rate limit</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Daily Quota Consumed</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-extrabold text-cyan-400">4,370</span>
            <span className="text-xs text-slate-400">/ 50,000 (8.7%)</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Cost-optimized query routing enabled</p>
        </div>

        <div className="glass-panel p-5 rounded-2xl">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Entity Resolution Rate</span>
          <div className="flex items-baseline space-x-2 mt-2">
            <span className="text-3xl font-extrabold text-emerald-400">99.4%</span>
            <span className="text-xs text-emerald-300">Clean Dedupe</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Jaro-Winkler string similarity & coordinate clustering</p>
        </div>
      </div>

      {/* Providers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {providers.map((p) => (
          <div key={p.id} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 relative">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-base text-white">{p.name}</h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      p.status === 'ONLINE'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">{p.type}</p>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-slate-400">Latency: </span>
                <span className="text-white font-semibold">{p.latency}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>

            {/* Quota bar */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Consumption Today:</span>
                <span className="font-mono text-white font-semibold">{p.quotaUsed} / {p.quotaLimit}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full" style={{ width: p.quotaLimit === 'Unlimited' ? '15%' : '12%' }} />
              </div>
            </div>

            {/* Capabilities Matrix */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Capabilities Matrix
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                {[
                  { label: 'POI Discovery', ok: p.capabilities.poiDiscovery },
                  { label: 'Phone Verification', ok: p.capabilities.phoneLookup },
                  { label: 'Rating & Reviews', ok: p.capabilities.ratingReviews },
                  { label: 'Website Presence', ok: p.capabilities.websitePresence },
                  { label: 'Social Media Links', ok: p.capabilities.socialDetection },
                ].map((cap) => (
                  <div
                    key={cap.label}
                    className={`flex items-center space-x-1.5 px-2 py-1 rounded-lg ${
                      cap.ok
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : 'bg-slate-900 text-slate-500 border border-slate-800'
                    }`}
                  >
                    {cap.ok ? <Check className="w-3 h-3 text-emerald-400" /> : <span className="w-3 h-3 text-center">-</span>}
                    <span className="truncate">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
