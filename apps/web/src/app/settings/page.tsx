'use client';

import React, { useState, useEffect } from 'react';
import { Settings, Sliders, Shield, Key, CheckCircle2, Save, RefreshCw } from 'lucide-react';
import { apiRequest } from '../../lib/api';

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>(null);
  const [weights, setWeights] = useState({
    noWebsiteScore: 35,
    highRatingScore: 20,
    reviewVolumeScore: 15,
    establishedLocationScore: 15,
    activePhoneScore: 15,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const data = await apiRequest('/settings');
      setSettings(data);
      if (data.scoringWeights) {
        setWeights(data.scoringWeights);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSaveWeights = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await apiRequest('/settings', {
        method: 'POST',
        body: JSON.stringify(weights),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: any) {
      alert(`Failed to save settings: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">Platform Settings & Scoring Architecture</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Tune the multi-factor scoring model, review provider credentials, and configure system rules.
        </p>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-lg flex items-center space-x-2">
          <CheckCircle2 size={16} />
          <span>Scoring weights updated successfully in persistent database.</span>
        </div>
      )}

      {/* Scoring Weight Calibration */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
          <Sliders size={18} className="text-blue-600" />
          <h2 className="text-sm font-bold text-slate-900">Lead Scoring Engine Weights (Total: 100 Points)</h2>
        </div>

        <form onSubmit={handleSaveWeights} className="space-y-4 text-xs">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>No Website Listed / Social-Only Bonus</span>
                <span className="text-blue-600 font-bold">{weights.noWebsiteScore} pts</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                value={weights.noWebsiteScore}
                onChange={(e) => setWeights({ ...weights, noWebsiteScore: parseInt(e.target.value, 10) })}
                className="w-full accent-blue-600"
              />
              <p className="text-[11px] text-slate-400">
                Core indicator of a business that requires website design & web presence development services.
              </p>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>High Customer Rating Factor (Rating &gt;= 4.2)</span>
                <span className="text-blue-600 font-bold">{weights.highRatingScore} pts</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                value={weights.highRatingScore}
                onChange={(e) => setWeights({ ...weights, highRatingScore: parseInt(e.target.value, 10) })}
                className="w-full accent-blue-600"
              />
              <p className="text-[11px] text-slate-400">
                Signals commercial popularity and budget to invest in digital upgrades.
              </p>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Review Volume / Traffic Proof</span>
                <span className="text-blue-600 font-bold">{weights.reviewVolumeScore} pts</span>
              </div>
              <input
                type="range"
                min={5}
                max={25}
                value={weights.reviewVolumeScore}
                onChange={(e) => setWeights({ ...weights, reviewVolumeScore: parseInt(e.target.value, 10) })}
                className="w-full accent-blue-600"
              />
              <p className="text-[11px] text-slate-400">
                High review counts demonstrate an active, established customer base.
              </p>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-slate-700 mb-1">
                <span>Contactability (Verified Phone Available)</span>
                <span className="text-blue-600 font-bold">{weights.activePhoneScore} pts</span>
              </div>
              <input
                type="range"
                min={5}
                max={20}
                value={weights.activePhoneScore}
                onChange={(e) => setWeights({ ...weights, activePhoneScore: parseInt(e.target.value, 10) })}
                className="w-full accent-blue-600"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition disabled:opacity-50"
            >
              <Save size={14} />
              <span>{saving ? 'Saving...' : 'Save Configuration'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* System Architecture Metadata */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 text-xs">
        <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
          <Shield size={18} className="text-slate-700" />
          <h2 className="text-sm font-bold text-slate-900">Database & Runtime Environment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Database Engine</p>
            <p className="font-bold text-slate-800">PostgreSQL 18.6 (Local Cluster port 5433)</p>
            <p className="text-slate-500">ORM: Prisma 7.9.1 with `@prisma/adapter-pg`</p>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400">Security & RBAC</p>
            <p className="font-bold text-slate-800">PBKDF2-SHA512 + JWT HMAC-256</p>
            <p className="text-slate-500">Roles: ADMIN, SALES, ANALYST, VIEWER</p>
          </div>
        </div>
      </div>
    </div>
  );
}
