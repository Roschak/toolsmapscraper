'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Globe,
  Flame,
  Search,
  ArrowRight,
  TrendingUp,
  MapPin,
  Briefcase,
  RefreshCw,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { apiRequest } from '../lib/api';

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest('/analytics');
      setStats(data);
    } catch (err: any) {
      setError(err.message || 'Failed to connect to API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 text-white shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-semibold text-blue-400 tracking-wider">
            Command Center
          </span>
          <h1 className="text-2xl font-bold mt-1">Prospect Discovery & Opportunity Radar</h1>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl">
            Real-time global business intelligence engine. Identify commercial businesses with missing websites, high ratings, and primed sales readiness.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={fetchStats}
            className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-lg text-xs font-medium border border-slate-700 transition"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            <span>Sync</span>
          </button>
          <Link
            href="/search"
            className="flex items-center space-x-1.5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md transition"
          >
            <Search size={14} />
            <span>Launch Discovery</span>
          </Link>
        </div>
      </div>

      {error && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-sm flex items-center justify-between">
          <span>{error}</span>
          <button
            onClick={fetchStats}
            className="text-xs font-semibold underline hover:text-amber-900"
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Discovered</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-2">
              {loading ? '-' : stats?.totalProspects ?? 0}
            </h3>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
              <TrendingUp size={12} className="text-emerald-500" />
              <span>Verified business records</span>
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Website Opportunities</p>
            <h3 className="text-3xl font-extrabold text-amber-600 mt-2">
              {loading ? '-' : stats?.websiteOpportunities ?? 0}
            </h3>
            <p className="text-xs text-amber-700/80 mt-1">
              {stats?.opportunityRate ?? 0}% missing or social-only site
            </p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Globe size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Hot Priority Leads</p>
            <h3 className="text-3xl font-extrabold text-rose-600 mt-2">
              {loading ? '-' : stats?.hotLeads ?? 0}
            </h3>
            <p className="text-xs text-slate-400 mt-1">Score 80+ commercial potential</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
            <Flame size={20} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Search Jobs</p>
            <h3 className="text-3xl font-extrabold text-indigo-600 mt-2">
              {loading ? '-' : stats?.activeJobs ?? 0}
            </h3>
            <p className="text-xs text-slate-400 mt-1">Engine task runners</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Clock size={20} />
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Top Categories & Opportunities by Region */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Opportunities by Industry */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Briefcase size={18} className="text-blue-600" />
                <h3 className="font-semibold text-slate-900 text-sm">Discovered Industries</h3>
              </div>
              <Link href="/prospects" className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium">
                <span>View Prospects</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            {loading ? (
              <div className="py-8 text-center text-slate-400 text-xs">Loading analytics...</div>
            ) : !stats?.topCategories?.length ? (
              <div className="py-8 text-center text-slate-400 text-xs">
                No search data yet. Launch a search from the discovery tab to ingest prospects.
              </div>
            ) : (
              <div className="space-y-3">
                {stats.topCategories.map((cat: any) => {
                  const percent = Math.min(100, Math.round((cat.count / (stats.totalProspects || 1)) * 100));
                  return (
                    <div key={cat.category} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium text-slate-700">
                        <span>{cat.category}</span>
                        <span>{cat.count} prospects ({percent}%)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Regional Distribution */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-slate-100">
              <MapPin size={18} className="text-emerald-600" />
              <h3 className="font-semibold text-slate-900 text-sm">Geographic Footprint</h3>
            </div>
            {loading ? (
              <div className="py-6 text-center text-slate-400 text-xs">Loading geography...</div>
            ) : !stats?.opportunitiesByRegion?.length ? (
              <div className="py-6 text-center text-slate-400 text-xs">No locations discovered yet.</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stats.opportunitiesByRegion.map((r: any) => (
                  <div key={r.region} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <p className="text-xs text-slate-500 truncate">{r.region}</p>
                    <p className="text-lg font-bold text-slate-800 mt-0.5">{r.count}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Recent Search Jobs & Quick Discovery */}
        <div className="space-y-6">
          {/* Recent Jobs */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <h3 className="font-semibold text-slate-900 text-sm">Recent Discovery Jobs</h3>
              <Link href="/search" className="text-xs text-blue-600 hover:underline">
                View all
              </Link>
            </div>

            {loading ? (
              <div className="py-8 text-center text-slate-400 text-xs">Loading jobs...</div>
            ) : !stats?.recentJobs?.length ? (
              <div className="text-center py-6 text-slate-400 text-xs">
                <p>No recent jobs executed.</p>
                <Link
                  href="/search"
                  className="mt-3 inline-block bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md font-medium text-xs hover:bg-blue-100 transition"
                >
                  Start First Search
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {stats.recentJobs.map((job: any) => (
                  <div key={job.id} className="p-3 bg-slate-50/80 rounded-lg border border-slate-100 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-slate-800 truncate max-w-[160px]">
                        {job.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                          job.status === 'COMPLETED'
                            ? 'bg-emerald-100 text-emerald-800'
                            : job.status === 'RUNNING'
                            ? 'bg-blue-100 text-blue-800 animate-pulse'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{job.city || 'Global'} • {job.category || 'Business'}</span>
                      <span className="font-medium text-slate-700">{job.resultCount || 0} leads</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions Card */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-5 rounded-xl text-white shadow-sm space-y-3">
            <h4 className="font-semibold text-sm">Need to export leads?</h4>
            <p className="text-xs text-slate-300">
              Download hot prospects with missing websites formatted directly for CRM ingestion or cold email outreach.
            </p>
            <div className="pt-2">
              <Link
                href="/data"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 px-3.5 py-2 rounded-lg transition"
              >
                <span>Go to Export Manager</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
