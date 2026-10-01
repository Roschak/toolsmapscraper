'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Briefcase,
  Play,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Globe,
  Flame,
  Layers,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { apiRequest } from '../../lib/api';

export default function SearchPage() {
  const [form, setForm] = useState({
    name: '',
    city: 'Jakarta',
    country: 'Indonesia',
    category: 'Restaurant',
    keywords: '',
    provider: 'ALL',
    limit: 25,
  });

  const [nlQuery, setNlQuery] = useState('');
  const [launching, setLaunching] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  const presets = [
    { label: 'Jakarta Specialty Cafes', city: 'Jakarta', category: 'Coffee Roastery', query: 'specialty coffee' },
    { label: 'Bogor Fashion & Retail', city: 'Bogor', category: 'Retail Store', query: 'distro clothing' },
    { label: 'Surabaya Auto Workshops', city: 'Surabaya', category: 'Auto Repair', query: 'bengkel mobil' },
    { label: 'Bali Boutique Lodging', city: 'Denpasar', category: 'Boutique Hotel', query: 'villa resort' },
    { label: 'Bandung Dental Clinics', city: 'Bandung', category: 'Dental Clinic', query: 'dental clinic' },
  ];

  const applyPreset = (preset: (typeof presets)[0]) => {
    setForm({
      ...form,
      name: `${preset.label} Discovery`,
      city: preset.city,
      category: preset.category,
      keywords: preset.query,
    });
  };

  const handleNlSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlQuery.trim()) return;

    const lower = nlQuery.toLowerCase();
    let detectedCity = form.city;
    let detectedCategory = form.category;

    if (lower.includes('jakarta')) detectedCity = 'Jakarta';
    else if (lower.includes('bogor')) detectedCity = 'Bogor';
    else if (lower.includes('bandung')) detectedCity = 'Bandung';
    else if (lower.includes('surabaya')) detectedCity = 'Surabaya';
    else if (lower.includes('bali') || lower.includes('denpasar')) detectedCity = 'Denpasar';
    else if (lower.includes('semarang')) detectedCity = 'Semarang';
    else if (lower.includes('yogyakarta') || lower.includes('jogja')) detectedCity = 'Yogyakarta';

    if (lower.includes('kafe') || lower.includes('cafe') || lower.includes('kopi') || lower.includes('coffee')) {
      detectedCategory = 'Coffee Roastery';
    } else if (lower.includes('resto') || lower.includes('restaurant') || lower.includes('makan') || lower.includes('bistro')) {
      detectedCategory = 'Restaurant';
    } else if (lower.includes('gigi') || lower.includes('dental') || lower.includes('klinik')) {
      detectedCategory = 'Dental Clinic';
    } else if (lower.includes('hukum') || lower.includes('law') || lower.includes('legal') || lower.includes('advokat')) {
      detectedCategory = 'Law Office';
    } else if (lower.includes('bengkel') || lower.includes('auto') || lower.includes('mobil') || lower.includes('motor')) {
      detectedCategory = 'Auto Repair';
    } else if (lower.includes('hotel') || lower.includes('villa') || lower.includes('resort') || lower.includes('penginapan')) {
      detectedCategory = 'Boutique Hotel';
    } else if (lower.includes('toko') || lower.includes('baju') || lower.includes('retail') || lower.includes('fashion') || lower.includes('distro')) {
      detectedCategory = 'Retail Store';
    }

    setForm({
      ...form,
      name: `Discovery: ${nlQuery}`,
      city: detectedCity,
      category: detectedCategory,
      keywords: nlQuery,
    });
    setNlQuery('');
  };

  const fetchJobs = async () => {
    setLoadingJobs(true);
    try {
      const res = await apiRequest('/search?page=1&pageSize=20');
      setJobs(res.items || []);
    } catch (err: any) {
      console.error('Failed to fetch jobs:', err);
    } finally {
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleLaunch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLaunching(true);
    setMessage(null);

    try {
      const res = await apiRequest('/search', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      setMessage({
        type: 'success',
        text: `Discovery job "${res.name}" successfully dispatched to engine.`,
      });
      fetchJobs();
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: err.message || 'Failed to dispatch discovery job.',
      });
    } finally {
      setLaunching(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Prospect Discovery Launcher</h1>
          <p className="text-xs text-slate-500 mt-1">
            Dispatch autonomous search queries across providers to ingest and enrich local business leads.
          </p>
        </div>
        <button
          onClick={fetchJobs}
          className="self-start md:self-auto flex items-center space-x-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition"
        >
          <RefreshCw size={13} className={loadingJobs ? 'animate-spin' : ''} />
          <span>Refresh Jobs</span>
        </button>
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl border text-xs font-medium flex items-center space-x-2 ${
            message.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
        >
          {message.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Natural Language Search Assistant */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-5 text-white shadow-md space-y-3">
        <div className="flex items-center space-x-2">
          <Wand2 size={18} className="text-blue-400" />
          <h2 className="text-sm font-bold tracking-wide">Natural Language Discovery Assistant</h2>
          <span className="text-[10px] bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded font-semibold uppercase">
            AI Assistant
          </span>
        </div>
        <p className="text-xs text-blue-200">
          Describe the business type and target location in plain language (Indonesian or English), e.g. &ldquo;Cari kafe dan bistro di Bogor&rdquo; or &ldquo;Find auto workshops in Surabaya&rdquo;.
        </p>

        <form onSubmit={handleNlSearch} className="flex gap-2">
          <input
            type="text"
            value={nlQuery}
            onChange={(e) => setNlQuery(e.target.value)}
            placeholder="Type your search query in natural language..."
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-blue-300 text-xs px-3.5 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="flex items-center space-x-1.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition shrink-0"
          >
            <Sparkles size={14} />
            <span>Parse & Populate</span>
          </button>
        </form>

        {/* Quick Search Presets */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-blue-300 text-[11px] font-semibold">Discovery Presets:</span>
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => applyPreset(preset)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-2.5 py-1 rounded-md text-[11px] font-medium transition"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Search Form + Live Jobs List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Search Launcher Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-2 pb-4 mb-4 border-b border-slate-100">
            <Search size={18} className="text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">New Discovery Parameters</h2>
          </div>

          <form onSubmit={handleLaunch} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Campaign / Job Name (Optional)
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Jakarta Specialty Cafes Q4"
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target City</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Jakarta"
                    className="w-full text-xs pl-8 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <MapPin size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Country</label>
                <input
                  type="text"
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  placeholder="Indonesia"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Target Industry / Category</label>
              <div className="relative">
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full text-xs pl-8 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="Restaurant">Restaurant & Bistro</option>
                  <option value="Coffee Roastery">Coffee Roastery & Café</option>
                  <option value="Dental Clinic">Dental Clinic & Orthodontics</option>
                  <option value="Law Office">Law Office & Legal Associates</option>
                  <option value="Auto Repair">Auto Repair & Workshop</option>
                  <option value="Boutique Hotel">Boutique Hotel & Resort</option>
                  <option value="Digital Agency">Digital Agency & Software</option>
                  <option value="Retail Store">Retail Store & Boutique</option>
                </select>
                <Briefcase size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Keywords / Extra Queries</label>
              <input
                type="text"
                value={form.keywords}
                onChange={(e) => setForm({ ...form, keywords: e.target.value })}
                placeholder="e.g. halal, specialty roaster, premium"
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Data Provider</label>
                <select
                  value={form.provider}
                  onChange={(e) => setForm({ ...form, provider: e.target.value })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="ALL">Auto (Multi-Provider Dispatch)</option>
                  <option value="MOCK_PROVIDER">Global Simulator Engine</option>
                  <option value="GOOGLE_PLACES">Google Places API</option>
                  <option value="GEOAPIFY">Geoapify Places API</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Prospect Limit</label>
                <select
                  value={form.limit}
                  onChange={(e) => setForm({ ...form, limit: parseInt(e.target.value, 10) })}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value={10}>10 Prospects</option>
                  <option value={25}>25 Prospects</option>
                  <option value={50}>50 Prospects</option>
                  <option value={100}>100 Prospects</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={launching}
              className="w-full mt-2 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition disabled:opacity-50 text-xs"
            >
              <Play size={14} className={launching ? 'animate-spin' : ''} />
              <span>{launching ? 'Dispatching Job...' : 'Start Autonomous Discovery'}</span>
            </button>
          </form>
        </div>

        {/* Discovery Jobs Table / Progress List */}
        <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Layers size={18} className="text-slate-700" />
              <h2 className="text-sm font-bold text-slate-900">Job Execution Stream</h2>
            </div>
            <span className="text-xs text-slate-500">{jobs.length} jobs total</span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 max-h-[560px]">
            {loadingJobs && jobs.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">Loading execution stream...</div>
            ) : jobs.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                No discovery jobs recorded yet. Use the form on the left to start your first search.
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-slate-50 transition space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">{job.name}</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Target: {job.city || 'Global'}, {job.country} • {job.category}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                        job.status === 'COMPLETED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : job.status === 'RUNNING'
                          ? 'bg-blue-100 text-blue-800 animate-pulse'
                          : job.status === 'FAILED'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {job.status}
                    </span>
                  </div>

                  {/* Progress bar if running */}
                  {job.status === 'RUNNING' && (
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-blue-600 h-1.5 rounded-full animate-pulse w-3/4"></div>
                    </div>
                  )}

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-[11px]">
                    <div className="bg-white p-2 rounded-lg border border-slate-100 text-center">
                      <p className="text-slate-400 text-[10px] uppercase font-semibold">Leads Found</p>
                      <p className="font-bold text-slate-800 mt-0.5">{job.resultCount || 0}</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-100 text-center">
                      <p className="text-amber-600 text-[10px] uppercase font-semibold">Web Opportunities</p>
                      <p className="font-bold text-amber-700 mt-0.5">{job.websiteOpportunityCount || 0}</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-100 text-center">
                      <p className="text-slate-400 text-[10px] uppercase font-semibold">Duplicates</p>
                      <p className="font-bold text-slate-700 mt-0.5">{job.duplicateCount || 0}</p>
                    </div>
                  </div>

                  {job.status === 'COMPLETED' && (
                    <div className="flex justify-end pt-1">
                      <Link
                        href={`/prospects?city=${encodeURIComponent(job.city || '')}`}
                        className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
                      >
                        <span>Inspect Leads in CRM</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
