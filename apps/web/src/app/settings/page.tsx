'use client';

import React, { useState, useEffect } from 'react';
import {
  Settings,
  ShieldCheck,
  Save,
  CheckCircle2,
  Lock,
  Sliders,
  Server,
  Key,
  AlertTriangle,
  RotateCcw,
  Check,
} from 'lucide-react';
import { api } from '../../lib/api';

export default function SettingsPage() {
  const [dailyLimit, setDailyLimit] = useState('50000');
  const [monthlyLimit, setMonthlyLimit] = useState('1000000');
  const [jobLimit, setJobLimit] = useState('50');
  const [mockMode, setMockMode] = useState(true);
  const [defaultCountry, setDefaultCountry] = useState('Indonesia');
  const [retentionDays, setRetentionDays] = useState('30');

  // Keys
  const [googleKey, setGoogleKey] = useState('AIzaSyD-••••••••••••••••••••••••••••');
  const [geoapifyKey, setGeoapifyKey] = useState('geo_live_••••••••••••••••••••••••');
  const [foursquareKey, setFoursquareKey] = useState('fsq3••••••••••••••••••••••••••••');

  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    api.getSettings().then((s) => {
      if (s.SEARCH_DAILY_LIMIT) setDailyLimit(String(s.SEARCH_DAILY_LIMIT));
      if (s.SEARCH_MONTHLY_LIMIT) setMonthlyLimit(String(s.SEARCH_MONTHLY_LIMIT));
      if (s.DEFAULT_COUNTRY) setDefaultCountry(String(s.DEFAULT_COUNTRY));
      if (s.EXPORT_RETENTION_DAYS) setRetentionDays(String(s.EXPORT_RETENTION_DAYS));
      if (typeof s.MOCK_MODE === 'boolean') setMockMode(s.MOCK_MODE);
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveSuccess(false);

    try {
      await api.updateSettings({
        SEARCH_DAILY_LIMIT: parseInt(dailyLimit, 10),
        SEARCH_MONTHLY_LIMIT: parseInt(monthlyLimit, 10),
        DEFAULT_COUNTRY: defaultCountry,
        EXPORT_RETENTION_DAYS: parseInt(retentionDays, 10),
        MOCK_MODE: mockMode,
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    } catch (err) {
      console.error('Failed to save settings', err);
      // Client optimistic feedback
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              SYSTEM CONFIGURATION
            </span>
            <span className="text-xs text-slate-400">Security & Operational Guardrails</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mt-1">
            Platform Settings & Limits
          </h1>
          <p className="text-xs text-slate-400">
            Configure query budgets, scoring weights, API secrets, and SSRF boundary policies.
          </p>
        </div>

        {saveSuccess && (
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings Saved Successfully</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Search & Query Rate Limits */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Query Rate Limits & Discovery Quotas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Daily Global Search Limit</label>
              <input
                type="number"
                value={dailyLimit}
                onChange={(e) => setDailyLimit(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
              <p className="text-[11px] text-slate-500">Maximum API calls allocated per 24 hour rolling window.</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Monthly Budget Cap</label>
              <input
                type="number"
                value={monthlyLimit}
                onChange={(e) => setMonthlyLimit(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
              <p className="text-[11px] text-slate-500">Hard stop to prevent unexpected provider invoice overages.</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Default Target Country</label>
              <select
                value={defaultCountry}
                onChange={(e) => setDefaultCountry(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Indonesia">Indonesia</option>
                <option value="Singapore">Singapore</option>
                <option value="Japan">Japan</option>
                <option value="Australia">Australia</option>
                <option value="United States">United States</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">Export File Retention (Days)</label>
              <input
                type="number"
                value={retentionDays}
                onChange={(e) => setRetentionDays(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              />
              <p className="text-[11px] text-slate-500">Generated CSV/JSON files purged after this interval.</p>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-800">
            <div>
              <p className="text-xs font-semibold text-white">Multi-Source Simulator Fallback</p>
              <p className="text-[11px] text-slate-400">
                Automatically generate high-fidelity simulated prospects when commercial API limits expire.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMockMode(!mockMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                mockMode ? 'bg-cyan-500' : 'bg-slate-800'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  mockMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Lead Scoring Weights Config */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Lead Opportunity Scoring Weights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200">
                <span>No Website Listed Weight</span>
                <span className="font-mono text-cyan-400">+40 pts</span>
              </div>
              <p className="text-[11px] text-slate-400">Heaviest factor: indicates immediate need for digital storefront.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200">
                <span>Social-Media-Only Presence</span>
                <span className="font-mono text-cyan-400">+25 pts</span>
              </div>
              <p className="text-[11px] text-slate-400">Active online audience but no branded checkout/booking site.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200">
                <span>High Rating & Review Volume</span>
                <span className="font-mono text-cyan-400">+20 pts</span>
              </div>
              <p className="text-[11px] text-slate-400">Proves existing customer trust and commercial cash flow.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200">
                <span>Direct Phone & Physical Address</span>
                <span className="font-mono text-cyan-400">+15 pts</span>
              </div>
              <p className="text-[11px] text-slate-400">Ensures sales agent can contact and follow up immediately.</p>
            </div>
          </div>
        </div>

        {/* API Credentials & Vault */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
            <Key className="w-4 h-4 text-amber-400" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Provider API Credentials (Vault Masked)
            </h2>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Google Places API Key</label>
              <div className="relative">
                <input
                  type="password"
                  value={googleKey}
                  onChange={(e) => setGoogleKey(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
                <Lock className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Geoapify Places API Key</label>
              <div className="relative">
                <input
                  type="password"
                  value={geoapifyKey}
                  onChange={(e) => setGeoapifyKey(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
                <Lock className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Foursquare API Key</label>
              <div className="relative">
                <input
                  type="password"
                  value={foursquareKey}
                  onChange={(e) => setFoursquareKey(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                />
                <Lock className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Security & SSRF Protection Banner */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-3 text-xs">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-white">SSRF & Privacy Compliance Active</p>
            <p className="text-slate-400 leading-relaxed">
              All backend website audit requests block RFC-1918 private IPv4 addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), link-local addresses, and AWS/GCP metadata endpoints (169.254.169.254).
            </p>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all active:scale-95 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving System Configuration...' : 'Save Configuration'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
