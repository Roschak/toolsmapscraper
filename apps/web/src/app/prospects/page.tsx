'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Users,
  Search,
  Filter,
  Download,
  Flame,
  Globe2,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Clock,
  Sparkles,
  ArrowUpDown,
  X,
  Plus,
  Send,
  Building2,
  FileText,
  Star,
  Layers,
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Copy,
  Check,
  Navigation,
} from 'lucide-react';
import { api, Prospect } from '../../lib/api';

function ProspectsContent() {
  const searchParams = useSearchParams();

  // Filter states
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [cityFilter, setCityFilter] = useState(searchParams.get('city') || 'ALL');
  const [websiteFilter, setWebsiteFilter] = useState<'ALL' | 'OPPORTUNITY_ONLY' | 'SOCIAL_ONLY' | 'LISTED'>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<'ALL' | 'HOT' | 'HIGH' | 'MEDIUM'>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  // Data states
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState<string | null>(null);

  // Selected prospect for detail drawer
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(null);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [addingNote, setAddingNote] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const loadProspects = async () => {
    setLoading(true);
    try {
      const data = await api.getProspects({
        query: query.trim() || undefined,
        city: cityFilter === 'ALL' ? undefined : cityFilter,
        priority: priorityFilter === 'ALL' ? undefined : priorityFilter,
        leadStatus: statusFilter === 'ALL' ? undefined : statusFilter,
        websiteOpportunityOnly: websiteFilter === 'OPPORTUNITY_ONLY',
        sortBy: 'leadScore',
        sortOrder: 'desc',
        pageSize: 100,
      });

      let items = data.items || [];
      if (websiteFilter === 'SOCIAL_ONLY') {
        items = items.filter((p) => p.websiteStatus === 'SOCIAL_ONLY');
      } else if (websiteFilter === 'LISTED') {
        items = items.filter((p) => p.websiteStatus === 'WEBSITE_LISTED');
      }

      setProspects(items);
      setTotal(data.total || items.length);

      // If URL had ?id=..., select that prospect
      const targetId = searchParams.get('id');
      if (targetId) {
        const found = items.find((p) => p.id === targetId);
        if (found) setSelectedProspect(found);
      }
    } catch (err) {
      console.error('Failed to load prospects', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProspects();
  }, [cityFilter, websiteFilter, priorityFilter, statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadProspects();
  };

  const handleStatusUpdate = async (id: string, newStatus: any) => {
    setStatusUpdating(id);
    try {
      await api.updateProspect(id, { leadStatus: newStatus });
      setProspects((prev) => prev.map((p) => (p.id === id ? { ...p, leadStatus: newStatus } : p)));
      if (selectedProspect && selectedProspect.id === id) {
        setSelectedProspect({ ...selectedProspect, leadStatus: newStatus });
      }
    } catch (err) {
      console.error('Status update failed', err);
    } finally {
      setStatusUpdating(null);
    }
  };

  const handlePriorityUpdate = async (id: string, newPriority: any) => {
    try {
      await api.updateProspect(id, { priority: newPriority });
      setProspects((prev) => prev.map((p) => (p.id === id ? { ...p, priority: newPriority } : p)));
      if (selectedProspect && selectedProspect.id === id) {
        setSelectedProspect({ ...selectedProspect, priority: newPriority });
      }
    } catch (err) {
      console.error('Priority update failed', err);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProspect || !newNoteContent.trim()) return;

    setAddingNote(true);
    try {
      const newNote = await api.addProspectNote(selectedProspect.id, newNoteContent.trim(), 'Alex Rivera');
      const updatedNotes = [
        {
          id: newNote?.id || `temp_${Date.now()}`,
          content: newNoteContent.trim(),
          authorName: 'Alex Rivera',
          createdAt: new Date().toISOString(),
        },
        ...(selectedProspect.leadNotes || []),
      ];

      const updatedProspect = { ...selectedProspect, leadNotes: updatedNotes };
      setSelectedProspect(updatedProspect);
      setProspects((prev) => prev.map((p) => (p.id === selectedProspect.id ? updatedProspect : p)));
      setNewNoteContent('');
    } catch (err) {
      console.error('Failed to add note', err);
    } finally {
      setAddingNote(false);
    }
  };

  const handleExport = async (format: 'CSV' | 'JSON') => {
    setExporting(true);
    setExportSuccess(null);
    try {
      const job = await api.triggerExport(format, {
        city: cityFilter === 'ALL' ? undefined : cityFilter,
        priority: priorityFilter === 'ALL' ? undefined : priorityFilter,
      });

      // Trigger real browser file download
      if (job?.id) {
        const downloadUrl = api.getExportDownloadUrl(job.id);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `prospecthunter_${format.toLowerCase()}_${Date.now()}.${format.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      setExportSuccess(`Exported & downloaded ${prospects.length} prospects to ${format}!`);
      setTimeout(() => setExportSuccess(null), 4500);
    } catch (err) {
      console.error('Export failed', err);
    } finally {
      setExporting(false);
    }
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Helper for WhatsApp link
  const getWhatsAppLink = (phone?: string, name?: string) => {
    if (!phone) return null;
    let clean = phone.replace(/[^\d+]/g, '');
    if (clean.startsWith('08')) {
      clean = '628' + clean.slice(2);
    } else if (clean.startsWith('+')) {
      clean = clean.slice(1);
    }
    const msg = encodeURIComponent(`Halo ${name || 'Bapak/Ibu'}, kami dari tim ProspectHunter. Kami melihat bisnis Anda memiliki reputasi pelanggan yang bagus dan ingin berdiskusi mengenai pembuatan website digital kustom.`);
    return `https://wa.me/${clean}?text=${msg}`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              PROSPECT CRM
            </span>
            <span className="text-xs text-slate-400 font-medium">B2B Sales Pipeline & Opportunity Management</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white mt-1">
            Commercial Prospects Database
          </h1>
          <p className="text-xs text-slate-400">
            {total} commercial establishments discovered across {cityFilter === 'ALL' ? 'global markets' : cityFilter} with automated website presence gap analysis.
          </p>
        </div>

        {/* Export Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => handleExport('CSV')}
            disabled={exporting}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all active:scale-95 shadow-sm disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>{exporting ? 'Generating...' : 'Export CSV'}</span>
          </button>
          <button
            onClick={() => handleExport('JSON')}
            disabled={exporting}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all active:scale-95 shadow-sm disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Export JSON</span>
          </button>
        </div>
      </div>

      {exportSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center space-x-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{exportSuccess}</span>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search business name, category, or address (e.g. 'Nexus', 'Jl. Sudirman')..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-24 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
            />
            {query && (
              <button
                type="button"
                onClick={() => { setQuery(''); loadProspects(); }}
                className="absolute right-16 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-bold transition-colors"
            >
              Filter
            </button>
          </form>

          {/* Quick Controls */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* City Dropdown */}
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="ALL">All Hubs (Global)</option>
              <option value="Bandung">Bandung, Indonesia</option>
              <option value="Jakarta">Jakarta, Indonesia</option>
              <option value="Bogor">Bogor, Indonesia</option>
              <option value="Bali">Bali, Indonesia</option>
              <option value="Surabaya">Surabaya, Indonesia</option>
              <option value="Singapore">Singapore</option>
              <option value="Tokyo">Tokyo, Japan</option>
              <option value="Melbourne">Melbourne, Australia</option>
            </select>

            {/* Pipeline Stage Dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400 cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="NEW">New Lead</option>
              <option value="RESEARCHED">Researched</option>
              <option value="DEMO_READY">Demo Ready</option>
              <option value="CONTACTED">Contacted</option>
              <option value="FOLLOW_UP">Follow Up</option>
              <option value="INTERESTED">Interested</option>
              <option value="CLIENT">Client Won</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'table' ? 'bg-cyan-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Table
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'cards' ? 'bg-cyan-500 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cards
              </button>
            </div>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
          <span className="text-slate-500 text-[11px] font-semibold">Website Need:</span>
          {[
            { id: 'ALL', label: 'All Prospects' },
            { id: 'OPPORTUNITY_ONLY', label: '⚡ No Website (High Opportunity)' },
            { id: 'SOCIAL_ONLY', label: '📱 Social Media Only' },
            { id: 'LISTED', label: '🌐 Website Listed' },
          ].map((w) => (
            <button
              key={w.id}
              onClick={() => setWebsiteFilter(w.id as any)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                websiteFilter === w.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {w.label}
            </button>
          ))}

          <span className="text-slate-500 text-[11px] font-semibold ml-2">Priority:</span>
          {[
            { id: 'ALL', label: 'All' },
            { id: 'HOT', label: '🔥 HOT Leads' },
            { id: 'HIGH', label: 'High' },
            { id: 'MEDIUM', label: 'Medium' },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setPriorityFilter(p.id as any)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                priorityFilter === p.id
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Table or Cards */}
      {viewMode === 'table' ? (
        <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/70 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Business & City</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Website Intelligence</th>
                  <th className="py-3 px-4">Contact & Reviews</th>
                  <th className="py-3 px-4">Lead Score</th>
                  <th className="py-3 px-4">Pipeline Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {prospects.length > 0 ? (
                  prospects.map((prospect) => {
                    const isHot = (prospect.leadScore || 0) >= 70;
                    const waLink = getWhatsAppLink(prospect.phone, prospect.businessName);

                    return (
                      <tr
                        key={prospect.id}
                        className={`hover:bg-slate-800/40 transition-colors cursor-pointer group ${
                          selectedProspect?.id === prospect.id ? 'bg-cyan-500/10' : ''
                        }`}
                        onClick={() => setSelectedProspect(prospect)}
                      >
                        {/* Name & City */}
                        <td className="py-3.5 px-4">
                          <p className="font-bold text-white text-xs tracking-tight flex items-center space-x-1.5 group-hover:text-cyan-300 transition-colors">
                            <span>{prospect.businessName}</span>
                            {isHot && (
                              <span title="Hot Opportunity">
                                <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0 inline" />
                              </span>
                            )}
                          </p>
                          <p className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span>{prospect.city || 'Global'}, {prospect.country || 'ID'}</span>
                          </p>
                        </td>

                        {/* Classification */}
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                            {prospect.classification || 'Retail & Service'}
                          </span>
                        </td>

                        {/* Website Intelligence */}
                        <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                          {prospect.websiteStatus === 'NO_WEBSITE_LISTED' ? (
                            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[11px] font-bold">
                              <AlertCircle className="w-3 h-3" />
                              <span>No Website Listed</span>
                            </span>
                          ) : prospect.websiteStatus === 'SOCIAL_ONLY' ? (
                            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                              <span>Social Media Only</span>
                            </span>
                          ) : (
                            <a
                              href={prospect.websiteUrl || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-slate-400 hover:text-cyan-400 text-[11px]"
                            >
                              <span className="truncate max-w-[130px]">{prospect.websiteUrl}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </td>

                        {/* Contact & Reviews */}
                        <td className="py-3.5 px-4">
                          <div className="space-y-0.5">
                            <p className="font-mono text-slate-200 text-[11px] flex items-center space-x-1">
                              <Phone className="w-3 h-3 text-slate-400" />
                              <span>{prospect.phone || 'No phone'}</span>
                            </p>
                            <div className="flex items-center space-x-1 text-[11px] text-amber-400 font-semibold">
                              <Star className="w-3 h-3 fill-amber-400" />
                              <span>{prospect.rating ? prospect.rating.toFixed(1) : '4.0'}</span>
                              <span className="text-slate-500 font-normal">({prospect.reviewCount || 100})</span>
                            </div>
                          </div>
                        </td>

                        {/* Lead Viability Score */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center font-mono">
                              <span className={`text-xs font-black ${isHot ? 'text-rose-400' : 'text-cyan-400'}`}>
                                {prospect.leadScore || 85}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-slate-400">
                              {prospect.priority || 'HOT'}
                            </span>
                          </div>
                        </td>

                        {/* Pipeline Status Dropdown */}
                        <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={prospect.leadStatus || 'NEW'}
                            disabled={statusUpdating === prospect.id}
                            onChange={(e) => handleStatusUpdate(prospect.id, e.target.value)}
                            className="bg-slate-900 border border-slate-700/80 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-slate-200 focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                          >
                            <option value="NEW">New Lead</option>
                            <option value="RESEARCHED">Researched</option>
                            <option value="DEMO_READY">Demo Ready</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="FOLLOW_UP">Follow Up</option>
                            <option value="INTERESTED">Interested</option>
                            <option value="CLIENT">Client Won</option>
                            <option value="NOT_INTERESTED">Not Interested</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="inline-flex items-center space-x-1.5">
                            {waLink && (
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Chat on WhatsApp"
                                className="p-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-colors"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <button
                              type="button"
                              onClick={() => setSelectedProspect(prospect)}
                              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-colors"
                            >
                              <span>Inspect</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      {loading ? 'Retrieving prospects database...' : 'No prospects found matching your filter criteria.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Cards Kanban Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prospects.map((prospect) => {
            const isHot = (prospect.leadScore || 0) >= 70;
            const waLink = getWhatsAppLink(prospect.phone, prospect.businessName);

            return (
              <div
                key={prospect.id}
                onClick={() => setSelectedProspect(prospect)}
                className={`glass-panel p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                  selectedProspect?.id === prospect.id
                    ? 'border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {prospect.classification || 'Retail'}
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs font-black text-cyan-400">
                        {prospect.leadScore || 80}
                      </div>
                      {isHot && <Flame className="w-4 h-4 text-rose-400" />}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {prospect.businessName}
                  </h3>

                  <p className="text-xs text-slate-400 flex items-center space-x-1 mt-1 line-clamp-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{prospect.address || `${prospect.city}, ${prospect.country}`}</span>
                  </p>

                  <div className="mt-3.5">
                    {prospect.websiteStatus === 'NO_WEBSITE_LISTED' ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[11px] font-bold">
                        <AlertCircle className="w-3 h-3" />
                        <span>No Website Listed</span>
                      </span>
                    ) : prospect.websiteStatus === 'SOCIAL_ONLY' ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold">
                        <span>Social Media Profile Only</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-[11px] font-medium">
                        <span>Active Website</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center space-x-1 text-xs text-amber-400 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{prospect.rating ? prospect.rating.toFixed(1) : '4.0'}</span>
                    <span className="text-slate-500 font-normal">({prospect.reviewCount || 100})</span>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {waLink && (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProspect(prospect)}
                      className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 transition-colors"
                    >
                      Inspect
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Slide-out Prospect Detail Drawer */}
      {selectedProspect && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProspect(null)}
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-xl bg-[#090d18] border-l border-slate-800 h-full overflow-y-auto p-6 z-10 space-y-6 shadow-2xl animate-fade-in">
            {/* Header / Close */}
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {selectedProspect.classification || 'Commercial Entity'}
                </span>
                <h2 className="text-xl font-black text-white mt-1 tracking-tight">
                  {selectedProspect.businessName}
                </h2>
                <p className="text-xs text-slate-400 flex items-center space-x-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{selectedProspect.address || `${selectedProspect.city}, ${selectedProspect.country}`}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProspect(null)}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Toolbar */}
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
              {getWhatsAppLink(selectedProspect.phone, selectedProspect.businessName) && (
                <a
                  href={getWhatsAppLink(selectedProspect.phone, selectedProspect.businessName)!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              )}
              {selectedProspect.phone && (
                <a
                  href={`tel:${selectedProspect.phone}`}
                  className="flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Phone</span>
                </a>
              )}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${selectedProspect.businessName} ${selectedProspect.city || ''}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Google Maps</span>
              </a>
            </div>

            {/* Opportunity Analysis Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Opportunity Diagnostics</span>
                </span>
                <span className="font-mono text-xs font-black text-rose-400 bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 rounded-md">
                  SCORE: {selectedProspect.leadScore || 85}/100
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white">Status:</span>
                  {selectedProspect.websiteStatus === 'NO_WEBSITE_LISTED' ? (
                    <span className="text-xs font-bold text-rose-400">NO OFFICIAL WEBSITE LISTED</span>
                  ) : selectedProspect.websiteStatus === 'SOCIAL_ONLY' ? (
                    <span className="text-xs font-bold text-amber-400">SOCIAL MEDIA ONLY (No Web Portal)</span>
                  ) : (
                    <span className="text-xs font-bold text-emerald-400">Website Listed</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {selectedProspect.notes || 'Prime prospect for customized business website pitch.'}
                </p>
              </div>

              {/* Copyable Data points */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-slate-400 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Phone:</span>
                    <strong className="text-white font-mono">{selectedProspect.phone || 'N/A'}</strong>
                  </span>
                  {selectedProspect.phone && (
                    <button
                      type="button"
                      onClick={() => copyToClipboard(selectedProspect.phone!, 'phone')}
                      className="text-cyan-400 hover:text-cyan-300 text-[11px] font-semibold flex items-center space-x-1"
                    >
                      {copiedField === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <span className="text-slate-400 flex items-center space-x-1.5 truncate max-w-[320px]">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{selectedProspect.address || selectedProspect.city}</span>
                  </span>
                  {selectedProspect.address && (
                    <button
                      type="button"
                      onClick={() => copyToClipboard(selectedProspect.address!, 'address')}
                      className="text-cyan-400 hover:text-cyan-300 text-[11px] font-semibold flex items-center space-x-1 shrink-0"
                    >
                      {copiedField === 'address' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedField === 'address' ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Pipeline Stage Management */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Update Pipeline Stage
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'NEW', label: '1. New Discovery' },
                  { id: 'RESEARCHED', label: '2. Researched' },
                  { id: 'DEMO_READY', label: '3. Demo Ready' },
                  { id: 'CONTACTED', label: '4. Contacted' },
                  { id: 'INTERESTED', label: '5. In Negotiation' },
                  { id: 'CLIENT', label: '6. Won Client 🎉' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleStatusUpdate(selectedProspect.id, s.id)}
                    className={`p-2.5 rounded-xl font-semibold text-left transition-all ${
                      selectedProspect.leadStatus === s.id
                        ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20 border border-cyan-400'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sales Notes Section */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Sales Notes & Outreach Log</span>
              </span>

              {/* Add Note Form */}
              <form onSubmit={handleAddNote} className="flex gap-2">
                <input
                  type="text"
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  placeholder="Log outreach activity, call summary, demo response..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  disabled={addingNote || !newNoteContent.trim()}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold disabled:opacity-50 transition-colors shrink-0"
                >
                  {addingNote ? 'Saving...' : 'Add Note'}
                </button>
              </form>

              {/* Notes List */}
              <div className="space-y-2 max-h-56 overflow-y-auto">
                {selectedProspect.leadNotes && selectedProspect.leadNotes.length > 0 ? (
                  selectedProspect.leadNotes.map((note) => (
                    <div key={note.id} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span className="font-semibold text-cyan-300">{note.authorName || 'Alex Rivera'}</span>
                        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                      </div>
                      <p className="text-slate-200">{note.content}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 py-2">No notes recorded yet. Add your first note above!</p>
                )}
              </div>
            </div>

            {/* Footer Close */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProspect(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProspectsPage() {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex items-center space-x-3 text-cyan-400">
            <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium">Loading Prospects CRM...</span>
          </div>
        </div>
      }
    >
      <ProspectsContent />
    </React.Suspense>
  );
}
