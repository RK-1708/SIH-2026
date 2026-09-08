import React, { useState } from 'react';
import { Building2, MapPin, Users, Activity, Plus, FileText, Ban, Search } from 'lucide-react';

export const ManageFederations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const federations = [
    { id: 'F001', name: 'Telangana Labour Federation', region: 'South India (TS)', coops: 24, workers: 4520, status: 'Active' },
    { id: 'F002', name: 'Maharashtra Gig Workers Union', region: 'West India (MH)', coops: 42, workers: 8100, status: 'Active' },
    { id: 'F003', name: 'Karnataka Service Co-op', region: 'South India (KA)', coops: 18, workers: 3200, status: 'Active' },
    { id: 'F004', name: 'Delhi NCR Tradesmen', region: 'North India (DL)', coops: 12, workers: 2150, status: 'Suspended' },
    { id: 'F005', name: 'Kerala Artisan Federation', region: 'South India (KL)', coops: 31, workers: 5800, status: 'Active' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">Registered Federations</h3>
          <p className="text-xs text-slate-500 font-medium mt-1">Manage regional federations and their underlying cooperatives.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search federations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition w-full sm:w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap">
            <Plus className="w-4 h-4" />
            <span>Add Federation</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <th className="px-6 py-4">Federation Name</th>
              <th className="px-6 py-4">Region</th>
              <th className="px-6 py-4">Cooperatives</th>
              <th className="px-6 py-4">Total Workers</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {federations.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).map(fed => (
              <tr key={fed.id} className="hover:bg-slate-50/50 transition group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{fed.name}</div>
                      <div className="text-[10px] text-slate-400 font-semibold">{fed.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {fed.region}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs font-bold text-slate-700">
                    {fed.coops} Societies
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                    <Users className="w-3.5 h-3.5" />
                    {fed.workers.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${
                    fed.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {fed.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition" title="View Details">
                      <FileText className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-600 transition hover:border-red-200" title={fed.status === 'Suspended' ? 'Unsuspend' : 'Suspend Federation'}>
                      <Ban className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {federations.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-500 text-sm font-semibold">
                  No federations found matching "{searchTerm}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
