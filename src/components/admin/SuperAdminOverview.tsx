import React from 'react';
import { Network, Building2, Users, UserCheck, Banknote, TrendingUp, CalendarCheck, AlertTriangle } from 'lucide-react';

export const SuperAdminOverview: React.FC = () => {
  const kpis = [
    { title: 'Total Federations', value: '4', sub: 'Across 4 States', icon: Network, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Total Cooperatives', value: '42', sub: 'Active Societies', icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Verified Workers', value: '18,450', sub: '+12% this month', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Total Customers', value: '1.2M', sub: 'Registered Users', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Platform Revenue', value: '₹4.2Cr', sub: 'Zero Commission Model', icon: Banknote, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Worker Earnings', value: '₹35.5Cr', sub: 'Direct 85% Payout', icon: TrendingUp, color: 'text-emerald-700', bg: 'bg-emerald-100' },
    { title: 'Active Bookings', value: '8,420', sub: 'Real-time', icon: CalendarCheck, color: 'text-slate-600', bg: 'bg-slate-100' },
    { title: 'Emergency Bookings', value: '142', sub: 'High Priority', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex justify-between items-center">
        <div>
          <h3 className="font-extrabold text-lg text-slate-900">System-Wide KPI Dashboard</h3>
          <p className="text-xs text-slate-500 font-medium">Aggregated metrics across the entire Sahakaar network.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{kpi.title}</span>
              <div className={`w-8 h-8 rounded-xl ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
            </div>
            <span className="text-2xl font-extrabold text-slate-900 block">{kpi.value}</span>
            <span className="text-[10px] text-slate-500 font-semibold block mt-1">{kpi.sub}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Platform Bookings Trend */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Platform Bookings</h4>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">30 Days Trend</span>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 pt-6 px-2">
            {[ 32, 45, 60, 50, 75, 90, 85, 110, 100, 120, 140, 130 ].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                <span className="text-[8px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition">{val}k</span>
                <div style={{ height: `${val/1.5}%` }} className="w-full bg-blue-500 hover:bg-blue-400 rounded-t-lg transition-all shadow" />
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Trend */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Revenue Trend</h4>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">Quarterly</span>
          </div>
          <div className="h-48 flex items-end justify-between gap-6 pt-6 px-2">
            {[ {q: 'Q1', val: 65}, {q: 'Q2', val: 78}, {q: 'Q3', val: 85}, {q: 'Q4', val: 100} ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group w-full">
                <span className="text-[10px] font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition">₹{d.val}Cr</span>
                <div style={{ height: `${d.val}%` }} className="w-full bg-emerald-500 hover:bg-emerald-400 rounded-t-xl transition-all shadow" />
                <span className="text-[10px] font-bold text-slate-500">{d.q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Federation Distribution */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Federation Worker Distribution</h4>
          </div>
          <div className="space-y-4 pt-2">
            {[
              { name: 'Telangana', val: '45%', color: 'bg-emerald-500' },
              { name: 'Maharashtra', val: '30%', color: 'bg-blue-500' },
              { name: 'Karnataka', val: '15%', color: 'bg-indigo-500' },
              { name: 'Andhra Pradesh', val: '10%', color: 'bg-sky-500' }
            ].map((f, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>{f.name}</span>
                  <span>{f.val}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${f.color}`} style={{ width: f.val }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Demand */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Service Demand Analytics</h4>
          </div>
          <div className="space-y-4 pt-2">
            {[
              { name: 'Electrician', val: '38%', color: 'bg-purple-500' },
              { name: 'Plumber', val: '28%', color: 'bg-rose-500' },
              { name: 'AC Technician', val: '22%', color: 'bg-amber-500' },
              { name: 'Painter', val: '12%', color: 'bg-cyan-500' }
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>{s.name}</span>
                  <span>{s.val}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color}`} style={{ width: s.val }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
