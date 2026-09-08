import React from 'react';
import { GitCompare } from 'lucide-react';

export const SocietyComparison: React.FC = () => {
  const societiesData = [
    { name: 'Hyderabad Co-op', workers: 845, verified: 810, bookings: 3420, completed: 3100, emergency: 120, revenue: 1450000, workerEarnings: 1232500, welfare: 72500, rating: 4.8 },
    { name: 'Secunderabad Utd', workers: 620, verified: 590, bookings: 2810, completed: 2650, emergency: 85, revenue: 1120000, workerEarnings: 952000, welfare: 56000, rating: 4.7 },
    { name: 'Guntur Electricians', workers: 420, verified: 390, bookings: 1940, completed: 1800, emergency: 45, revenue: 680000, workerEarnings: 578000, welfare: 34000, rating: 4.5 },
    { name: 'Warangal Plumbers', workers: 310, verified: 280, bookings: 1105, completed: 1050, emergency: 30, revenue: 450000, workerEarnings: 382500, welfare: 22500, rating: 4.6 }
  ];

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <GitCompare className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">Society Performance Comparison</h4>
            <p className="text-xs text-slate-500">Side-by-side comparison of top cooperative societies.</p>
          </div>
        </div>

        <div className="overflow-x-auto pt-4">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-200 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                <th className="p-4 border-r border-slate-200">Metrics</th>
                {societiesData.map(s => (
                  <th key={s.name} className="p-4 border-r border-slate-200 text-slate-900">{s.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium">
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Total Workers</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center">{s.workers}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Verified Workers</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center text-emerald-600">{s.verified}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Total Bookings</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center">{s.bookings}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Completed Bookings</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center">{s.completed}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Emergency Bookings</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center text-rose-600">{s.emergency}</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Total Revenue</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center font-bold text-slate-900">₹{(s.revenue / 100000).toFixed(2)}L</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Worker Earnings (85%)</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center text-emerald-700 font-bold">₹{(s.workerEarnings / 100000).toFixed(2)}L</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Welfare Fund (5%)</td>
                {societiesData.map(s => <td key={s.name} className="p-4 border-r border-slate-200 text-center text-amber-600 font-bold">₹{(s.welfare / 1000).toFixed(1)}k</td>)}
              </tr>
              <tr>
                <td className="p-4 border-r border-slate-200 bg-slate-50/50 text-slate-600 font-bold">Avg. Customer Rating</td>
                {societiesData.map(s => (
                  <td key={s.name} className="p-4 border-r border-slate-200 text-center">
                    <span className="inline-flex items-center gap-1 text-amber-500 font-bold">
                      ★ {s.rating}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
