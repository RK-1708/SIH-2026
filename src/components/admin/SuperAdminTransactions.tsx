import React, { useState } from 'react';
import { Banknote, Filter, Search, ShieldCheck, Heart, Building2, TrendingUp } from 'lucide-react';

export const SuperAdminTransactions: React.FC = () => {
  const [filter, setFilter] = useState({ date: 'All Time', status: 'All Status', service: 'All Services' });
  const [searchQuery, setSearchQuery] = useState('');

  const transactions = [
    { id: 'TXN-9081', bookingId: 'BK-2026-8812', customer: 'Ramesh K.', worker: 'Suresh V.', service: 'Electrician', amount: 850, status: 'Completed', date: '2026-09-08' },
    { id: 'TXN-9082', bookingId: 'BK-2026-8813', customer: 'Priya S.', worker: 'Ravi Kumar', service: 'Plumber', amount: 1200, status: 'Completed', date: '2026-09-08' },
    { id: 'TXN-9083', bookingId: 'BK-2026-8814', customer: 'Vikram M.', worker: 'Kiran T.', service: 'AC Technician', amount: 2500, status: 'Pending', date: '2026-09-08' },
    { id: 'TXN-9084', bookingId: 'BK-2026-8815', customer: 'Anita P.', worker: 'Lakshmi N.', service: 'Cleaner', amount: 600, status: 'Completed', date: '2026-09-07' },
    { id: 'TXN-9085', bookingId: 'BK-2026-8816', customer: 'Karthik R.', worker: 'Srinivas G.', service: 'Electrician', amount: 450, status: 'Failed', date: '2026-09-07' },
  ];

  const calculateSplit = (amount: number) => ({
    worker: amount * 0.85,
    coop: amount * 0.10,
    welfare: amount * 0.05
  });

  const filteredTxns = transactions.filter(t => 
    (filter.status === 'All Status' || t.status === filter.status) &&
    (t.id.toLowerCase().includes(searchQuery.toLowerCase()) || t.bookingId.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const summary = filteredTxns.reduce((acc, t) => {
    if (t.status === 'Completed') {
      const split = calculateSplit(t.amount);
      acc.gross += t.amount;
      acc.worker += split.worker;
      acc.coop += split.coop;
      acc.welfare += split.welfare;
    }
    return acc;
  }, { gross: 0, worker: 0, coop: 0, welfare: 0 });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h3 className="font-extrabold text-lg text-slate-900">Platform Transactions</h3>
          <p className="text-xs text-slate-500 font-medium">Monitor all payments and the 85/10/5 fair wage distribution.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Gross Value</span>
            <Banknote className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">₹{summary.gross.toLocaleString()}</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Worker Earnings</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-emerald-700">₹{summary.worker.toLocaleString()}</span>
          <span className="text-[10px] text-emerald-600 font-bold block mt-1">85% Share</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Co-op Earnings</span>
            <Building2 className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-2xl font-extrabold text-blue-700">₹{summary.coop.toLocaleString()}</span>
          <span className="text-[10px] text-blue-600 font-bold block mt-1">10% Share</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Welfare Fund</span>
            <Heart className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-extrabold text-amber-600">₹{summary.welfare.toLocaleString()}</span>
          <span className="text-[10px] text-amber-600 font-bold block mt-1">5% Share</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="flex-1 relative min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input 
            type="text" 
            placeholder="Search TXN ID or Booking ID..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className="relative min-w-[150px]">
          <Filter className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <select 
            value={filter.status}
            onChange={e => setFilter({...filter, status: e.target.value})}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none bg-white"
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                <th className="p-4 pl-6">Transaction / Booking</th>
                <th className="p-4">Customer / Worker</th>
                <th className="p-4">Service</th>
                <th className="p-4 text-right">Gross Amount</th>
                <th className="p-4 text-right">Worker (85%)</th>
                <th className="p-4 text-right">Co-op (10%)</th>
                <th className="p-4 text-right">Welfare (5%)</th>
                <th className="p-4">Status & Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredTxns.map(t => {
                const split = calculateSplit(t.amount);
                return (
                  <tr key={t.id} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 pl-6">
                      <div className="font-bold text-slate-900">{t.id}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{t.bookingId}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-xs font-bold text-slate-700">C: {t.customer}</div>
                      <div className="text-xs text-slate-500">W: {t.worker}</div>
                    </td>
                    <td className="p-4 text-xs font-medium text-slate-600">{t.service}</td>
                    <td className="p-4 text-right font-extrabold text-slate-900">₹{t.amount}</td>
                    <td className="p-4 text-right font-bold text-emerald-600">₹{split.worker}</td>
                    <td className="p-4 text-right font-bold text-blue-600">₹{split.coop}</td>
                    <td className="p-4 text-right font-bold text-amber-600">₹{split.welfare}</td>
                    <td className="p-4">
                      <div className="flex flex-col items-start gap-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          t.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                          t.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {t.status}
                        </span>
                        <span className="text-[10px] text-slate-400">{t.date}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filteredTxns.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-slate-500 font-bold">No transactions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
