'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart2,
  TrendingUp,
  PieChart,
  MapPin,
  RefreshCw,
  Globe,
  Award,
  Users,
  Target,
} from 'lucide-react';
import { apiRequest } from '../../lib/api';

export default function AnalyticsPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const data = await apiRequest('/analytics');
      setStats(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Lead Intelligence Analytics</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Macro-level metrics across discovered markets, industries, and sales conversion stages.
          </p>
        </div>
        <button
          onClick={fetchStats}
          className="flex items-center space-x-1.5 self-start sm:self-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition"
        >
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          <span>Refresh Analytics</span>
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase">Total Prospect Database</p>
            <h3 className="text-2xl font-black text-slate-900 mt-0.5">
              {loading ? '-' : stats?.totalProspects ?? 0}
            </h3>
            <p className="text-[11px] text-slate-500">Across all search jobs</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Globe size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase">Opportunity Rate</p>
            <h3 className="text-2xl font-black text-amber-600 mt-0.5">
              {loading ? '-' : `${stats?.opportunityRate ?? 0}%`}
            </h3>
            <p className="text-[11px] text-amber-800/80">
              {stats?.websiteOpportunities ?? 0} businesses need a website
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Target size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase">Hot Lead Potential</p>
            <h3 className="text-2xl font-black text-rose-600 mt-0.5">
              {loading ? '-' : stats?.hotLeads ?? 0}
            </h3>
            <p className="text-[11px] text-slate-500">Commercial traction ready</p>
          </div>
        </div>
      </div>

      {/* Pipeline Funnel Stages */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">Sales Pipeline Stage Funnel</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {['NEW', 'RESEARCHED', 'DEMO_READY', 'CONTACTED', 'INTERESTED', 'CLIENT'].map((stage) => {
            const count =
              stats?.leadStatusBreakdown?.find((s: any) => s.status === stage)?.count || 0;
            return (
              <div
                key={stage}
                className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-center space-y-1"
              >
                <p className="text-[10px] uppercase font-bold text-slate-500">{stage.replace(/_/g, ' ')}</p>
                <p className="text-xl font-black text-slate-900">{count}</p>
                <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mt-1">
                  <div
                    className="bg-blue-600 h-1 rounded-full"
                    style={{
                      width: `${Math.min(100, Math.round((count / (stats?.totalProspects || 1)) * 100))}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Industry Opportunities + Geography */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Industry Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
            <PieChart size={18} className="text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">Opportunities by Industry Category</h3>
          </div>
          {!stats?.topCategories?.length ? (
            <p className="py-8 text-center text-slate-400 text-xs">No category data yet.</p>
          ) : (
            <div className="space-y-3">
              {stats.topCategories.map((c: any) => {
                const pct = Math.min(100, Math.round((c.count / (stats.totalProspects || 1)) * 100));
                return (
                  <div key={c.category} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{c.category}</span>
                      <span>{c.count} leads ({pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Geographic Breakdown */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
            <MapPin size={18} className="text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">Geographic Penetration</h3>
          </div>
          {!stats?.opportunitiesByRegion?.length ? (
            <p className="py-8 text-center text-slate-400 text-xs">No regional data yet.</p>
          ) : (
            <div className="space-y-3">
              {stats.opportunitiesByRegion.map((r: any) => {
                const pct = Math.min(100, Math.round((r.count / (stats.totalProspects || 1)) * 100));
                return (
                  <div key={r.region} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{r.region}</span>
                      <span>{r.count} leads ({pct}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-600 h-2 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
