'use client';

import React, { useState, useEffect } from 'react';
import {
  Users,
  Search,
  Filter,
  Globe,
  Phone,
  MapPin,
  Star,
  Flame,
  ArrowUpDown,
  ExternalLink,
  Edit3,
  MessageSquare,
  CheckCircle,
  X,
  Plus,
  RefreshCw,
  CheckSquare,
  Square,
  Trash2,
  Laptop,
  Send,
  Save,
} from 'lucide-react';
import { apiRequest } from '../../lib/api';

export default function ProspectsPage() {
  const [prospects, setProspects] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [loading, setLoading] = useState(true);

  // Filters
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [priority, setPriority] = useState('');
  const [leadStatus, setLeadStatus] = useState('');
  const [websiteOpportunityOnly, setWebsiteOpportunityOnly] = useState(false);
  const [sortBy, setSortBy] = useState('leadScore');
  const [activeTab, setActiveTab] = useState<'ALL' | 'HOT' | 'OPPORTUNITIES' | 'DEMOS'>('ALL');

  // Bulk Selection
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkStatus, setBulkStatus] = useState('CONTACTED');
  const [bulkActionLoading, setBulkActionLoading] = useState(false);

  // Detail Modal State
  const [selectedProspect, setSelectedProspect] = useState<any | null>(null);
  const [newNote, setNewNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);

  // Modal Demo editing state
  const [modalDemoStatus, setModalDemoStatus] = useState('NOT_CREATED');
  const [modalDemoUrl, setModalDemoUrl] = useState('');
  const [savingDemo, setSavingDemo] = useState(false);

  const fetchProspects = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('page', String(page));
      params.set('pageSize', String(pageSize));
      if (query) params.set('query', query);
      if (city) params.set('city', city);
      if (priority) params.set('priority', priority);
      if (leadStatus) params.set('leadStatus', leadStatus);
      if (websiteOpportunityOnly) params.set('websiteOpportunityOnly', 'true');
      if (sortBy) params.set('sortBy', sortBy);

      const res = await apiRequest(`/prospects?${params.toString()}`);
      setProspects(res.items || []);
      setTotal(res.total || 0);
    } catch (err: any) {
      console.error('Error fetching prospects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProspects();
  }, [page, priority, leadStatus, websiteOpportunityOnly, sortBy]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchProspects();
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await apiRequest(`/prospects/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ leadStatus: newStatus }),
      });
      setProspects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, leadStatus: newStatus } : p))
      );
      if (selectedProspect && selectedProspect.id === id) {
        setSelectedProspect({ ...selectedProspect, leadStatus: newStatus });
      }
    } catch (err: any) {
      alert(`Failed to update status: ${err.message}`);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim() || !selectedProspect) return;
    setSavingNote(true);
    try {
      const note = await apiRequest(`/prospects/${selectedProspect.id}/notes`, {
        method: 'POST',
        body: JSON.stringify({ content: newNote }),
      });
      setSelectedProspect({
        ...selectedProspect,
        leadNotes: [note, ...(selectedProspect.leadNotes || [])],
      });
      setNewNote('');
    } catch (err: any) {
      alert(`Failed to add note: ${err.message}`);
    } finally {
      setSavingNote(false);
    }
  };

  const applyTab = (tab: 'ALL' | 'HOT' | 'OPPORTUNITIES' | 'DEMOS') => {
    setActiveTab(tab);
    setPage(1);
    if (tab === 'ALL') {
      setPriority('');
      setWebsiteOpportunityOnly(false);
      setLeadStatus('');
    } else if (tab === 'HOT') {
      setPriority('HOT');
      setWebsiteOpportunityOnly(false);
      setLeadStatus('');
    } else if (tab === 'OPPORTUNITIES') {
      setPriority('');
      setWebsiteOpportunityOnly(true);
      setLeadStatus('');
    } else if (tab === 'DEMOS') {
      setPriority('');
      setWebsiteOpportunityOnly(false);
      setLeadStatus('DEMO_READY');
    }
  };

  const openDetail = async (p: any) => {
    setSelectedProspect(p);
    setModalDemoStatus(p.demoStatus || 'NOT_CREATED');
    setModalDemoUrl(p.demoUrl || '');
    try {
      const detailed = await apiRequest(`/prospects/${p.id}`);
      setSelectedProspect(detailed);
      setModalDemoStatus(detailed.demoStatus || 'NOT_CREATED');
      setModalDemoUrl(detailed.demoUrl || '');
    } catch {}
  };

  const handleSaveDemo = async () => {
    if (!selectedProspect) return;
    setSavingDemo(true);
    try {
      await apiRequest(`/prospects/${selectedProspect.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          demoStatus: modalDemoStatus,
          demoUrl: modalDemoUrl,
        }),
      });
      setSelectedProspect({
        ...selectedProspect,
        demoStatus: modalDemoStatus,
        demoUrl: modalDemoUrl,
      });
      setProspects((prev) =>
        prev.map((item) =>
          item.id === selectedProspect.id
            ? { ...item, demoStatus: modalDemoStatus, demoUrl: modalDemoUrl }
            : item
        )
      );
      alert('Demo intelligence saved successfully!');
    } catch (err: any) {
      alert(`Failed to save demo: ${err.message}`);
    } finally {
      setSavingDemo(false);
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.length === prospects.length && prospects.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(prospects.map((p) => p.id));
    }
  };

  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkStatusUpdate = async () => {
    if (selectedIds.length === 0) return;
    setBulkActionLoading(true);
    try {
      await apiRequest('/prospects/bulk-status', {
        method: 'POST',
        body: JSON.stringify({ ids: selectedIds, status: bulkStatus }),
      });
      setProspects((prev) =>
        prev.map((p) => (selectedIds.includes(p.id) ? { ...p, leadStatus: bulkStatus } : p))
      );
      setSelectedIds([]);
    } catch (err: any) {
      alert(`Bulk update failed: ${err.message}`);
    } finally {
      setBulkActionLoading(false);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} selected prospects?`)) return;
    setBulkActionLoading(true);
    try {
      await apiRequest('/prospects/bulk-delete', {
        method: 'POST',
        body: JSON.stringify({ ids: selectedIds }),
      });
      fetchProspects();
      setSelectedIds([]);
    } catch (err: any) {
      alert(`Bulk delete failed: ${err.message}`);
    } finally {
      setBulkActionLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Prospect Intelligence CRM</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage qualified business leads, track website opportunities, and progress sales pipelines.
          </p>
        </div>
        <button
          onClick={fetchProspects}
          className="flex items-center space-x-1.5 self-start sm:self-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition"
        >
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Quick Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => applyTab('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            activeTab === 'ALL'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Prospects ({total})
        </button>
        <button
          onClick={() => applyTab('HOT')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            activeTab === 'HOT'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-white text-rose-700 hover:bg-rose-50 border border-slate-200'
          }`}
        >
          <Flame size={13} />
          <span>Hot Leads (Score 80+)</span>
        </button>
        <button
          onClick={() => applyTab('OPPORTUNITIES')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            activeTab === 'OPPORTUNITIES'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white text-amber-700 hover:bg-amber-50 border border-slate-200'
          }`}
        >
          <Globe size={13} />
          <span>Website Opportunities</span>
        </button>
        <button
          onClick={() => applyTab('DEMOS')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            activeTab === 'DEMOS'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white text-indigo-700 hover:bg-indigo-50 border border-slate-200'
          }`}
        >
          <Laptop size={13} />
          <span>Demo Pipeline</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
        <form onSubmit={handleSearchSubmit} className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search business name, city, classification..."
              className="w-full text-xs pl-8 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
          </div>

          <select
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              setPage(1);
            }}
            className="text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">All Priorities</option>
            <option value="HOT">🔥 Hot (80+)</option>
            <option value="HIGH">High (65-79)</option>
            <option value="MEDIUM">Medium (45-64)</option>
            <option value="LOW">Low (&lt;45)</option>
          </select>

          <select
            value={leadStatus}
            onChange={(e) => {
              setLeadStatus(e.target.value);
              setPage(1);
            }}
            className="text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">All Statuses</option>
            <option value="NEW">New</option>
            <option value="RESEARCHED">Researched</option>
            <option value="DEMO_READY">Demo Ready</option>
            <option value="CONTACTED">Contacted</option>
            <option value="INTERESTED">Interested</option>
            <option value="CLIENT">Client Won</option>
            <option value="LOST">Lost / Unqualified</option>
          </select>

          <button
            type="button"
            onClick={() => {
              setWebsiteOpportunityOnly(!websiteOpportunityOnly);
              setPage(1);
            }}
            className={`flex items-center space-x-1.5 text-xs px-3 py-2 rounded-lg font-medium border transition ${
              websiteOpportunityOnly
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Globe size={13} />
            <span>Website Opportunity Only</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
            className="text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="leadScore">Sort: Highest Lead Score</option>
            <option value="rating">Sort: Highest Rating</option>
            <option value="createdAt">Sort: Discovery Date</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition"
          >
            Apply Filters
          </button>
        </form>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>Found <strong>{total}</strong> verified prospects</span>
          <span>Showing page {page} of {Math.max(1, Math.ceil(total / pageSize))}</span>
        </div>
      </div>

      {/* Bulk Action Toolbar */}
      {selectedIds.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 font-bold text-blue-900">
            <CheckSquare size={16} className="text-blue-600" />
            <span>{selectedIds.length} prospects selected</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-slate-600 font-medium">Change Status:</span>
              <select
                value={bulkStatus}
                onChange={(e) => setBulkStatus(e.target.value)}
                className="px-2 py-1 rounded-md border border-slate-300 bg-white text-xs"
              >
                <option value="NEW">New</option>
                <option value="RESEARCHED">Researched</option>
                <option value="DEMO_READY">Demo Ready</option>
                <option value="CONTACTED">Contacted</option>
                <option value="INTERESTED">Interested</option>
                <option value="CLIENT">Client Won</option>
                <option value="LOST">Lost</option>
              </select>
              <button
                type="button"
                disabled={bulkActionLoading}
                onClick={handleBulkStatusUpdate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md font-semibold disabled:opacity-50"
              >
                Apply
              </button>
            </div>

            <button
              type="button"
              disabled={bulkActionLoading}
              onClick={handleBulkDelete}
              className="flex items-center space-x-1 text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-1 rounded-md font-semibold transition"
            >
              <Trash2 size={13} />
              <span>Delete Selected</span>
            </button>
          </div>
        </div>
      )}

      {/* Prospects Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[10px]">
                <th className="py-3 px-3 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === prospects.length && prospects.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4">Business & Category</th>
                <th className="py-3 px-4">Contact & Location</th>
                <th className="py-3 px-4">Website & Demo</th>
                <th className="py-3 px-4">Traction / Reviews</th>
                <th className="py-3 px-4">Score & Priority</th>
                <th className="py-3 px-4">Pipeline Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    Loading prospects database...
                  </td>
                </tr>
              ) : prospects.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    No prospects match the current filter criteria.
                  </td>
                </tr>
              ) : (
                prospects.map((p) => {
                  const isOpportunity =
                    p.websiteStatus === 'NO_WEBSITE_LISTED' || p.websiteStatus === 'SOCIAL_ONLY';
                  return (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Checkbox */}
                      <td className="py-3.5 px-3 text-center">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(p.id)}
                          onChange={() => handleToggleSelect(p.id)}
                          className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                      </td>

                      {/* Name & Category */}
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => openDetail(p)}
                          className="font-bold text-slate-900 hover:text-blue-600 text-left text-xs"
                        >
                          {p.businessName}
                        </button>
                        <div className="flex items-center space-x-1.5 mt-0.5">
                          <span className="text-[11px] text-slate-500 font-medium">
                            {p.classification || 'Commercial'}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-[10px] font-semibold text-slate-400 px-1.5 py-0.2 bg-slate-100 rounded">
                            {p.businessModel || 'B2C'}
                          </span>
                        </div>
                      </td>

                      {/* Contact & Location */}
                      <td className="py-3.5 px-4 text-slate-600 space-y-1">
                        <div className="flex items-center space-x-1 truncate max-w-[180px]">
                          <MapPin size={12} className="text-slate-400 shrink-0" />
                          <span className="truncate">{p.city || 'Jakarta'}, {p.country || 'ID'}</span>
                        </div>
                        {p.phone && (
                          <div className="flex items-center space-x-1 text-slate-500">
                            <Phone size={11} className="text-slate-400 shrink-0" />
                            <span>{p.phone}</span>
                          </div>
                        )}
                      </td>

                      {/* Website & Demo */}
                      <td className="py-3.5 px-4 space-y-1">
                        {p.websiteStatus === 'NO_WEBSITE_LISTED' ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            <span>No Website (Prime Lead)</span>
                          </span>
                        ) : p.websiteStatus === 'SOCIAL_ONLY' ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>Social Media Only</span>
                          </span>
                        ) : (
                          <a
                            href={p.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1 text-blue-600 hover:underline text-[11px]"
                          >
                            <span className="truncate max-w-[130px]">{p.websiteUrl?.replace(/^https?:\/\//, '')}</span>
                            <ExternalLink size={10} />
                          </a>
                        )}

                        {p.demoStatus && p.demoStatus !== 'NOT_CREATED' && (
                          <div className="pt-0.5">
                            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                              <Laptop size={10} />
                              <span>{p.demoStatus.replace(/_/g, ' ')}</span>
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Traction / Reviews */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center space-x-1">
                          <Star size={12} className="text-amber-500 fill-amber-400" />
                          <span className="font-bold text-slate-800">{p.rating ? p.rating.toFixed(1) : '-'}</span>
                          <span className="text-[11px] text-slate-400">({p.reviewCount ?? 0} reviews)</span>
                        </div>
                      </td>

                      {/* Score & Priority */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`font-black text-xs px-2 py-0.5 rounded-md ${
                              p.priority === 'HOT'
                                ? 'bg-rose-100 text-rose-800'
                                : p.priority === 'HIGH'
                                ? 'bg-orange-100 text-orange-800'
                                : p.priority === 'MEDIUM'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {Math.round(p.leadScore || 0)}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-slate-500">
                            {p.priority || 'LOW'}
                          </span>
                        </div>
                      </td>

                      {/* Pipeline Status Dropdown */}
                      <td className="py-3.5 px-4">
                        <select
                          value={p.leadStatus}
                          onChange={(e) => handleStatusChange(p.id, e.target.value)}
                          className={`text-[11px] font-semibold px-2 py-1 rounded-md border focus:outline-none ${
                            p.leadStatus === 'CLIENT'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              : p.leadStatus === 'INTERESTED'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : p.leadStatus === 'CONTACTED'
                              ? 'bg-purple-50 text-purple-800 border-purple-300'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          <option value="NEW">New</option>
                          <option value="RESEARCHED">Researched</option>
                          <option value="DEMO_READY">Demo Ready</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="FOLLOW_UP">Follow Up</option>
                          <option value="INTERESTED">Interested</option>
                          <option value="NEGOTIATION">Negotiation</option>
                          <option value="CLIENT">Client Won</option>
                          <option value="LOST">Lost</option>
                        </select>
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => openDetail(p)}
                          className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {total > pageSize && (
          <div className="p-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {page} of {Math.ceil(total / pageSize)}
            </span>
            <button
              disabled={page >= Math.ceil(total / pageSize)}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Detail & Notes Modal */}
      {selectedProspect && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                  Lead Profile Intelligence
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">{selectedProspect.businessName}</h3>
                <p className="text-xs text-slate-500">
                  {selectedProspect.classification} • {selectedProspect.city}, {selectedProspect.country}
                </p>
              </div>
              <button
                onClick={() => setSelectedProspect(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-5 text-xs">
              {/* Score & Opportunity Card */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Opportunity Score</p>
                  <p className="text-2xl font-black text-rose-600 mt-1">{Math.round(selectedProspect.leadScore || 0)}</p>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase">{selectedProspect.priority}</span>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Customer Rating</p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">★ {selectedProspect.rating || '-'}</p>
                  <span className="text-[10px] text-slate-500">{selectedProspect.reviewCount || 0} reviews</span>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase font-bold">Website Status</p>
                  <p className="text-xs font-bold text-amber-700 mt-2">
                    {selectedProspect.websiteStatus?.replace(/_/g, ' ')}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Contact Details</h4>
                <div className="grid grid-cols-2 gap-3 bg-slate-50/60 p-3 rounded-lg border border-slate-100">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Telephone</span>
                    <span className="font-semibold text-slate-800">{selectedProspect.phone || 'Not available'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Address</span>
                    <span className="font-semibold text-slate-800">{selectedProspect.address || selectedProspect.city}</span>
                  </div>
                </div>
              </div>

              {/* Website Demo & Pitch Integration */}
              <div className="space-y-2 bg-indigo-50/50 p-3.5 rounded-xl border border-indigo-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-indigo-900 font-bold text-xs uppercase tracking-wide">
                    <Laptop size={14} className="text-indigo-600" />
                    <span>Website Demo & Pitch Pipeline</span>
                  </div>
                  <button
                    type="button"
                    disabled={savingDemo}
                    onClick={handleSaveDemo}
                    className="flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[11px] px-3 py-1 rounded-md shadow-xs transition disabled:opacity-50"
                  >
                    <Save size={12} />
                    <span>{savingDemo ? 'Saving...' : 'Save Demo'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 uppercase mb-1">
                      Demo Readiness Status
                    </label>
                    <select
                      value={modalDemoStatus}
                      onChange={(e) => setModalDemoStatus(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="NOT_CREATED">Not Created</option>
                      <option value="IN_PROGRESS">In Progress (Designing)</option>
                      <option value="READY">Ready (Demo Deployed)</option>
                      <option value="SENT">Sent to Business Owner</option>
                      <option value="APPROVED">Approved / Accepted</option>
                      <option value="REJECTED">Rejected</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-slate-600 uppercase mb-1">
                      Demo Preview URL
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        value={modalDemoUrl}
                        onChange={(e) => setModalDemoUrl(e.target.value)}
                        placeholder="https://demo.prospecthunter.com/preview/..."
                        className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                {modalDemoUrl && (
                  <div className="pt-1 flex items-center justify-between text-[11px]">
                    <a
                      href={modalDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-indigo-600 hover:underline font-semibold"
                    >
                      <span>Open Live Demo Preview</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </div>

              {/* Notes Timeline */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide flex items-center justify-between">
                  <span>Sales & Research Notes</span>
                  <span className="text-slate-400 text-[11px] font-normal">
                    {selectedProspect.leadNotes?.length || 0} notes
                  </span>
                </h4>

                <form onSubmit={handleAddNote} className="space-y-2">
                  <textarea
                    rows={2}
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add an outreach update or research finding..."
                    className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={savingNote || !newNote.trim()}
                      className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-sm transition disabled:opacity-50"
                    >
                      <Plus size={13} />
                      <span>{savingNote ? 'Saving...' : 'Add Note'}</span>
                    </button>
                  </div>
                </form>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {selectedProspect.leadNotes?.length ? (
                    selectedProspect.leadNotes.map((note: any) => (
                      <div key={note.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                          <span className="font-semibold text-slate-700">{note.authorName || 'Sales Agent'}</span>
                          <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="text-slate-700">{note.content}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-4 text-slate-400 text-xs">No notes recorded yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
