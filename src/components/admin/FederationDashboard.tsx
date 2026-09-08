import React from 'react';
import { Users, Activity, TrendingUp, Heart, Building2 } from 'lucide-react';

export const FederationDashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Societies</span>
            <Building2 className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">42</span>
          <span className="text-[10px] text-emerald-600 font-semibold block mt-1">38 Active</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Workers</span>
            <Users className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">2,846</span>
          <span className="text-[10px] text-emerald-600 font-semibold block mt-1">2,613 Verified Members</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Bookings</span>
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">684</span>
          <span className="text-[10px] text-rose-500 font-semibold block mt-1">12 Emergency Bookings</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Worker Earnings</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-emerald-700">₹48.6L</span>
          <span className="text-[10px] text-amber-600 font-semibold block mt-1">₹3.2L Welfare Contribution</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Bookings by Society</h4>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">Top Performers</span>
          </div>
          <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { day: 'HYD', count: 520, height: '55%' },
              { day: 'SEC', count: 580, height: '62%' },
              { day: 'WAR', count: 640, height: '70%' },
              { day: 'GUN', count: 610, height: '66%' },
              { day: 'KHA', count: 720, height: '80%' },
            ].map(d => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition">{d.count}</span>
                <div style={{ height: d.height }} className="w-full bg-emerald-500 hover:bg-emerald-400 rounded-t-xl transition-all shadow" />
                <span className="text-[11px] font-bold text-slate-600">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Service Demand Distribution</h4>
            <span className="text-xs font-bold text-slate-500">Real-time</span>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            {[
              { name: 'Electrician', val: '94%', count: 412, color: 'bg-emerald-500' },
              { name: 'AC Technician', val: '98%', count: 280, color: 'bg-sky-500' },
              { name: 'Plumber', val: '88%', count: 350, color: 'bg-blue-500' },
              { name: 'Cleaner', val: '82%', count: 520, color: 'bg-purple-500' }
            ].map(s => (
              <div key={s.name}>
                <div className="flex justify-between font-bold text-slate-700 mb-1">
                  <span>{s.name} ({s.count} workers)</span>
                  <span className="text-emerald-700">{s.val} Active</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
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
