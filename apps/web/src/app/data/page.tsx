'use client';

import React, { useState, useEffect } from 'react';
import {
  Database,
  Download,
  FileSpreadsheet,
  FileCode,
  CheckCircle2,
  AlertCircle,
  Play,
  RefreshCw,
  HardDrive,
  Layers,
  Upload,
  FileUp,
  Sparkles,
} from 'lucide-react';
import { apiRequest } from '../../lib/api';

export default function DataAndExportsPage() {
  const [exports, setExports] = useState<any[]>([]);
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Export form
  const [format, setFormat] = useState<'CSV' | 'JSON'>('CSV');
  const [websiteOpportunityOnly, setWebsiteOpportunityOnly] = useState(true);
  const [priority, setPriority] = useState('');

  // Import form state
  const [csvText, setCsvText] = useState('');
  const [parsedRows, setParsedRows] = useState<any[]>([]);
  const [importing, setImporting] = useState(false);
  const [importMessage, setImportMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const loadSampleCsv = () => {
    const sample = `businessName,phone,city,country,category,website,address
Kurnia Rasa Seafood,+62215551234,Jakarta,Indonesia,Restaurant,,Jl. Muara Karang No. 18
Bintang Jaya Motor Workshop,+62215555678,Bogor,Indonesia,Auto Repair,,Jl. Pajajaran No. 45
Sinar Cantik Dental Care,+62224567890,Bandung,Indonesia,Dental Clinic,https://instagram.com/sinarcantik_dental,Jl. Dago No. 12
Bali Haven Resort & Spa,+62361789012,Denpasar,Indonesia,Boutique Hotel,https://www.balihavenresort.com,Jl. Sunset Road 88
Nusantara Tech Studio,+62215559999,Jakarta,Indonesia,Digital Agency,,Jl. Sudirman Kav 25`;
    setCsvText(sample);
    parseCsv(sample);
  };

  const parseCsv = (textToParse?: string) => {
    const text = textToParse || csvText;
    if (!text.trim()) {
      setParsedRows([]);
      return;
    }
    const lines = text.trim().split(/\r?\n/).filter((l) => l.trim().length > 0);
    if (lines.length < 2) return;

    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
      const parts = lines[i].split(',').map((p) => p.trim());
      const row: any = {};
      headers.forEach((h, idx) => {
        row[h] = parts[idx] || '';
      });
      if (row.businessname || row.name) {
        rows.push({
          businessName: row.businessname || row.name,
          phone: row.phone || row.telephone || '',
          city: row.city || 'Jakarta',
          country: row.country || 'Indonesia',
          category: row.category || row.type || 'Commercial',
          website: row.website || row.url || '',
          address: row.address || '',
        });
      }
    }
    setParsedRows(rows);
  };

  const handleImportLeads = async () => {
    if (parsedRows.length === 0) return;
    setImporting(true);
    setImportMessage(null);
    try {
      const res = await apiRequest('/prospects/import', {
        method: 'POST',
        body: JSON.stringify({ records: parsedRows }),
      });
      setImportMessage({
        type: 'success',
        text: `Successfully ingested and scored ${res.importedCount || parsedRows.length} prospects into CRM!`,
      });
      setCsvText('');
      setParsedRows([]);
    } catch (err: any) {
      setImportMessage({
        type: 'error',
        text: err.message || 'Failed to import business records.',
      });
    } finally {
      setImporting(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [exportList, settingsData] = await Promise.all([
        apiRequest('/export'),
        apiRequest('/settings'),
      ]);
      setExports(exportList || []);
      setProviders(settingsData.providers || []);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateExport = async (e: React.FormEvent) => {
    e.preventDefault();
    setExporting(true);
    setMessage(null);
    try {
      const filters: any = {};
      if (websiteOpportunityOnly) filters.websiteOpportunityOnly = true;
      if (priority) filters.priority = priority;

      const job = await apiRequest('/export', {
        method: 'POST',
        body: JSON.stringify({ format, filters }),
      });

      setMessage(`Export job generated: ${job.recordCount} records prepared for download.`);
      fetchData();
    } catch (err: any) {
      alert(`Export failed: ${err.message}`);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">Data Providers & Export Center</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Monitor upstream provider connections, telemetry, and generate CSV/JSON exports for CRM systems.
        </p>
      </div>

      {/* Provider Connectivity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database size={18} className="text-blue-600" />
              <h3 className="font-bold text-slate-900 text-xs">Global Simulator Provider</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              Active
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Internal high-fidelity business discovery engine with realistic ratings, locations, and missing-website distributions.
          </p>
          <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] text-slate-600">
            <span>Latency</span>
            <span className="font-semibold text-slate-800">&lt; 15ms</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database size={18} className="text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-xs">Google Places API</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
              Standby
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Google Maps official enterprise place search connector. Plug your API key in Settings to activate live Google searches.
          </p>
          <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] text-slate-600">
            <span>Integration</span>
            <span className="font-semibold text-slate-800">Adapter Ready</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database size={18} className="text-purple-600" />
              <h3 className="font-bold text-slate-900 text-xs">Geoapify Places API</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
              Standby
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            OpenStreetMap & Geoapify global spatial database for geocoding and commercial category classification.
          </p>
          <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] text-slate-600">
            <span>Integration</span>
            <span className="font-semibold text-slate-800">Adapter Ready</span>
          </div>
        </div>
      </div>

      {/* Export Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Export Generator Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
            <Download size={18} className="text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900">Generate Leads Export</h2>
          </div>

          {message && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center space-x-2">
              <CheckCircle2 size={16} />
              <span>{message}</span>
            </div>
          )}

          <form onSubmit={handleCreateExport} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">File Format</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormat('CSV')}
                  className={`flex items-center justify-center space-x-2 p-2.5 rounded-lg border font-semibold transition ${
                    format === 'CSV'
                      ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                      : 'bg-white border-slate-300 text-slate-700'
                  }`}
                >
                  <FileSpreadsheet size={16} />
                  <span>CSV (Excel / CRM)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('JSON')}
                  className={`flex items-center justify-center space-x-2 p-2.5 rounded-lg border font-semibold transition ${
                    format === 'JSON'
                      ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                      : 'bg-white border-slate-300 text-slate-700'
                  }`}
                >
                  <FileCode size={16} />
                  <span>JSON Payload</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Filter by Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">All Priorities</option>
                <option value="HOT">Hot Leads Only (&gt;=80 Score)</option>
                <option value="HIGH">High Priority Only</option>
                <option value="MEDIUM">Medium Priority Only</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 pt-1">
              <input
                type="checkbox"
                id="oppOnly"
                checked={websiteOpportunityOnly}
                onChange={(e) => setWebsiteOpportunityOnly(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="oppOnly" className="text-slate-700 font-medium">
                Website Opportunities Only (Exclude listed websites)
              </label>
            </div>

            <button
              type="submit"
              disabled={exporting}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-sm transition disabled:opacity-50"
            >
              <Download size={14} className={exporting ? 'animate-spin' : ''} />
              <span>{exporting ? 'Compiling File...' : 'Create & Download Export'}</span>
            </button>
          </form>
        </div>

        {/* Export History Table */}
        <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">Recent Export Deliverables</h2>
            <button
              onClick={fetchData}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center space-x-1"
            >
              <RefreshCw size={12} />
              <span>Refresh</span>
            </button>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {loading ? (
              <p className="text-center py-8 text-slate-400 text-xs">Loading exports...</p>
            ) : exports.length === 0 ? (
              <p className="text-center py-8 text-slate-400 text-xs">No export files created yet.</p>
            ) : (
              exports.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                      {exp.format === 'JSON' ? <FileCode size={16} /> : <FileSpreadsheet size={16} />}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">
                        prospecthunter_export_{exp.id.slice(0, 8)}.{exp.format.toLowerCase()}
                      </p>
                      <p className="text-[10px] text-slate-500">
                        {exp.recordCount} records • {new Date(exp.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {exp.status === 'COMPLETED' ? (
                    <a
                      href={`http://localhost:4000/api/export/${exp.id}/download`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold px-3 py-1.5 rounded-md shadow-xs transition"
                    >
                      <Download size={12} />
                      <span>Download</span>
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold text-blue-600 animate-pulse">Processing</span>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* CSV Lead Dataset Ingestion Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-slate-100 gap-2">
          <div className="flex items-center space-x-2">
            <Upload size={18} className="text-blue-600" />
            <div>
              <h2 className="text-sm font-bold text-slate-900">Custom Business Dataset Ingestion (CSV / Raw Leads)</h2>
              <p className="text-[11px] text-slate-500">
                Import external directory listings, regional business files, or custom databases into the autonomous pipeline.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={loadSampleCsv}
            className="flex items-center space-x-1.5 text-xs text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-lg font-semibold transition self-start sm:self-auto"
          >
            <Sparkles size={13} />
            <span>Load Sample CSV</span>
          </button>
        </div>

        {importMessage && (
          <div
            className={`p-3 rounded-xl border text-xs font-semibold flex items-center space-x-2 ${
              importMessage.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            {importMessage.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            <span>{importMessage.text}</span>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Paste CSV Content (Columns: <code className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded">businessName, phone, city, country, category, website, address</code>)
            </label>
            <textarea
              rows={4}
              value={csvText}
              onChange={(e) => {
                setCsvText(e.target.value);
                parseCsv(e.target.value);
              }}
              placeholder="businessName,phone,city,country,category,website,address&#10;Kurnia Rasa Seafood,+62215551234,Jakarta,Indonesia,Restaurant,,Jl. Muara Karang No. 18"
              className="w-full text-xs font-mono p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {parsedRows.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  Parsed Records Preview ({parsedRows.length} ready for ingestion)
                </span>
                <span className="text-[11px] text-slate-500">
                  Will be automatically classified, scored, and website-audited
                </span>
              </div>

              <div className="border border-slate-200 rounded-lg overflow-x-auto max-h-48 overflow-y-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-slate-50 sticky top-0 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-500">
                    <tr>
                      <th className="py-2 px-3">Business</th>
                      <th className="py-2 px-3">Category</th>
                      <th className="py-2 px-3">Location</th>
                      <th className="py-2 px-3">Phone</th>
                      <th className="py-2 px-3">Website</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {parsedRows.map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">{r.businessName}</td>
                        <td className="py-2 px-3 text-slate-600">{r.category}</td>
                        <td className="py-2 px-3 text-slate-600">{r.city}, {r.country}</td>
                        <td className="py-2 px-3 text-slate-600">{r.phone || '-'}</td>
                        <td className="py-2 px-3 text-slate-600">{r.website || <span className="text-amber-600 font-medium">None (Opportunity)</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  disabled={importing}
                  onClick={handleImportLeads}
                  className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-sm transition disabled:opacity-50"
                >
                  <FileUp size={14} className={importing ? 'animate-spin' : ''} />
                  <span>{importing ? 'Ingesting & Scoring...' : `Ingest ${parsedRows.length} Prospects to CRM`}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
