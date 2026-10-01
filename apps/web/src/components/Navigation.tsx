'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Search,
  Users,
  Database,
  Settings,
  BarChart2,
  LogOut,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { getCurrentUser, removeAuthToken } from '../lib/api';

export default function Navigation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = getCurrentUser();
    setUser(u || { name: 'Admin', email: 'admin@prospecthunter.com', role: 'ADMIN' });
  }, []);

  const navItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/search', label: 'Discovery Search', icon: Search },
    { href: '/prospects', label: 'Prospects CRM', icon: Users },
    { href: '/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/data', label: 'Data & Exports', icon: Database },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  const handleLogout = () => {
    removeAuthToken();
    window.location.href = '/login';
  };

  // If on login page, render children directly without full sidebar
  if (pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-200 flex flex-col shadow-xl border-r border-slate-800">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Sparkles size={20} />
            </div>
            <div>
              <h1 className="font-bold text-base text-white tracking-wide">ProspectHunter</h1>
              <p className="text-xs text-blue-400 font-medium tracking-tight">Lead Intelligence Platform</p>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Intelligence Core
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* System status pill */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-emerald-400">Engine Online</span>
            <span className="text-slate-500">•</span>
            <span>PostgreSQL 18</span>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div className="flex items-center space-x-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs uppercase border border-blue-500/30">
                {user?.name ? user.name[0] : 'U'}
              </div>
              <div className="truncate">
                <p className="text-xs font-medium text-white truncate">{user?.name || 'User'}</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold">{user?.role || 'SALES'}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Logout / Switch account"
              className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded transition"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold text-slate-800">
              {navItems.find((i) => i.href === pathname)?.label || 'Overview'}
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
              Global Edition 1.0.0
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-md">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Role: <strong className="text-slate-700 font-semibold">{user?.role || 'ADMIN'}</strong></span>
            </div>
            <Link
              href="/search"
              className="flex items-center space-x-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg shadow-sm transition"
            >
              <Search size={14} />
              <span>New Discovery</span>
            </Link>
          </div>
        </header>

        {/* Scrollable Page Body */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50/70 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
