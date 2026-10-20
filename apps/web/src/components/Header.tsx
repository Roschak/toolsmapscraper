'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, Sparkles, Command, Database, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { api } from '../lib/api';

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [backendStatus, setBackendStatus] = useState<{ online: boolean; prospectCount: number }>({
    online: true,
    prospectCount: 0,
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check initial health & set up periodic poll
    const checkStatus = async () => {
      const status = await api.checkHealth();
      setBackendStatus(status);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 15000);

    // Keyboard shortcut Ctrl+K / Cmd+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/prospects?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-[#090d18]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 flex items-center justify-between transition-colors">
      {/* Left Search Bar (Desktop) */}
      <div className="flex items-center space-x-4 flex-1 max-w-xl pl-12 lg:pl-0">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search business names, categories, or cities (e.g. 'Bandung coffee')..."
            className="w-full bg-slate-900/90 border border-slate-800/90 text-xs text-slate-100 pl-9 pr-20 py-2.5 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-12 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700/60 text-[10px] font-mono text-slate-400 pointer-events-none">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </form>
      </div>

      {/* Right Telemetry & Actions */}
      <div className="flex items-center space-x-3">
        {/* Quick Scan Action */}
        <Link
          href="/search"
          className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>New Discovery</span>
        </Link>

        {/* Live Sync / Backend Indicator */}
        <div
          title={
            backendStatus.online
              ? `Backend API connected on Port 4000 (${backendStatus.prospectCount} prospects indexed in PostgreSQL)`
              : 'Backend disconnected or starting up'
          }
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-colors ${
            backendStatus.online
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              backendStatus.online ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
            }`}
          />
          <span className="hidden md:inline font-semibold">
            {backendStatus.online ? `API ACTIVE (${backendStatus.prospectCount} LEADS)` : 'RECONNECTING'}
          </span>
          <span className="md:hidden">LIVE</span>
        </div>
      </div>
    </header>
  );
}
