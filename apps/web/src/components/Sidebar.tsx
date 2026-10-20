'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Search,
  Users,
  BarChart3,
  Database,
  Settings,
  Sparkles,
  Compass,
  Menu,
  X,
  ShieldCheck,
  Flame,
  Globe2,
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard, badge: null },
  { name: 'Discovery Engine', href: '/search', icon: Search, badge: 'Scanner' },
  { name: 'Prospect CRM', href: '/prospects', icon: Users, badge: 'Hot' },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, badge: null },
  { name: 'Data Providers', href: '/data', icon: Database, badge: '5 Active' },
  { name: 'Settings', href: '/settings', icon: Settings, badge: null },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-3 left-4 z-50 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white shadow-lg transition-transform active:scale-95"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-[#0a0f1d] border-r border-slate-800/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand / Logo */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-extrabold text-base tracking-tight text-white">Prospect<span className="text-cyan-400">Hunter</span></span>
              </div>
              <p className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Sales Intelligence v1.0</p>
            </div>
          </Link>
        </div>

        {/* Global Grid Status Pill */}
        <div className="px-4 py-2.5 mx-3.5 my-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">Postgres Grid</span>
          </div>
          <span className="text-[10px] font-mono font-semibold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-800/40">
            PORT 5433
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/5'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    size={17}
                    className={`transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      item.badge === 'Hot'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : item.badge === 'Scanner'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-800/90 text-slate-300 border border-slate-700/60'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Operational Guardrails Pill */}
        <div className="p-3.5 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90">
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200 mb-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Commercial Pipeline</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Detect businesses without corporate websites for web design & digital storefront outreach.
            </p>
          </div>
        </div>

        {/* User Card */}
        <div className="p-3.5 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center ring-1 ring-white/10">
              AR
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-slate-200 truncate">Alex Rivera</p>
              <p className="text-[10px] font-mono text-slate-400 truncate">Lead Partner</p>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
        </div>
      </aside>
    </>
  );
}
