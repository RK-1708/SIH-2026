import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Users, ShieldCheck, Activity, TrendingUp, Heart, DollarSign, Filter, ChevronDown, Download, CheckCircle2 } from 'lucide-react';

export const AdminOverview: React.FC = () => {
  const [dateRange, setDateRange] = useState('This Week');
  const [societyFilter, setSocietyFilter] = useState('All Societies');
  const [serviceFilter, setServiceFilter] = useState('All Services');

  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showSocietyDropdown, setShowSocietyDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  return (
    <div className="space-y-6">
      
      {/* Top Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <span className="text-xs font-bold uppercase tracking-wider">Jobs Today</span>
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">684</span>
          <span className="text-[10px] text-slate-500 font-semibold block mt-1">12,482 Lifetime Jobs</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Worker Earnings</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-emerald-700">₹48.6L</span>
          <span className="text-[10px] text-emerald-600 font-semibold block mt-1">Direct 85% Fair Wage</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Welfare Fund</span>
            <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <span className="text-2xl font-extrabold text-amber-600">₹3.2L</span>
          <span className="text-[10px] text-amber-700 font-semibold block mt-1">Healthcare & Pensions</span>
        </div>
      </div>

      {/* Advanced Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap md:flex-nowrap items-center gap-4">
        <div className="flex items-center gap-2 text-slate-500 mr-2">
          <Filter className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Filters:</span>
        </div>
        
        {/* Date Range Filter */}
        <div className="relative">
          <button 
            onClick={() => { setShowDateDropdown(!showDateDropdown); setShowSocietyDropdown(false); setShowServiceDropdown(false); }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition"
          >
            <span>{dateRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
          {showDateDropdown && (
            <div className="absolute left-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-10">
              {['Today', 'This Week', 'This Month', 'This Year'].map(opt => (
                <button key={opt} onClick={() => { setDateRange(opt); setShowDateDropdown(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 text-slate-700 flex justify-between items-center">
                  {opt} {dateRange === opt && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Society Filter */}
        <div className="relative">
          <button 
            onClick={() => { setShowSocietyDropdown(!showSocietyDropdown); setShowDateDropdown(false); setShowServiceDropdown(false); }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition"
          >
            <span>{societyFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
          {showSocietyDropdown && (
            <div className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-10">
              {['All Societies', 'Hyderabad Central', 'Secunderabad Union', 'Warangal Co-op'].map(opt => (
                <button key={opt} onClick={() => { setSocietyFilter(opt); setShowSocietyDropdown(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 text-slate-700 flex justify-between items-center">
                  {opt} {societyFilter === opt && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Service Category Filter */}
        <div className="relative">
          <button 
            onClick={() => { setShowServiceDropdown(!showServiceDropdown); setShowDateDropdown(false); setShowSocietyDropdown(false); }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition"
          >
            <span>{serviceFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
          {showServiceDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-10">
              {['All Services', 'Electrical', 'Plumbing', 'Cleaning & Painting', 'Construction'].map(opt => (
                <button key={opt} onClick={() => { setServiceFilter(opt); setShowServiceDropdown(false); }} className="w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 text-slate-700 flex justify-between items-center">
                  {opt} {serviceFilter === opt && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Analytics Chart Mockups */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Job Volume */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Weekly Job Volume Growth</h4>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">+18.4% this week</span>
          </div>

          <div className="h-48 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { day: 'Mon', count: 520, height: '55%' },
              { day: 'Tue', count: 580, height: '62%' },
              { day: 'Wed', count: 640, height: '70%' },
              { day: 'Thu', count: 610, height: '66%' },
              { day: 'Fri', count: 720, height: '80%' },
              { day: 'Sat', count: 890, height: '95%' },
              { day: 'Sun', count: 684, height: '75%' },
            ].map(d => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition">{d.count}</span>
                <div style={{ height: d.height }} className="w-full bg-emerald-500 hover:bg-emerald-400 rounded-t-xl transition-all shadow" />
                <span className="text-[11px] font-bold text-slate-600">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Worker Trade Utilization */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Worker Utilization</h4>
            <span className="text-xs font-bold text-slate-500">89% Avg Active</span>
          </div>

          <div className="space-y-4 pt-2 text-xs">
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Electricians (412)</span>
                <span className="text-emerald-700">94%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[94%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>AC Techs (280)</span>
                <span className="text-emerald-700">98%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 w-[98%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Plumbers (350)</span>
                <span className="text-emerald-700">88%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[88%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Painters (520)</span>
                <span className="text-emerald-700">82%</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[82%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Society Comparison Chart / Table */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-extrabold text-sm text-slate-900">Cooperative Society Performance Comparison</h4>
          <span className="text-xs font-bold text-slate-500">Current Month</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3">Society Name</th>
                <th className="pb-3">Jobs Completed</th>
                <th className="pb-3">Revenue Generation</th>
                <th className="pb-3">Customer Rating</th>
                <th className="pb-3">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {[
                { name: 'Hyderabad Central Co-op', jobs: '4,520', rev: '₹8.4L', rating: '4.8', progress: '92%', color: 'bg-emerald-500' },
                { name: 'Secunderabad Labour Union', jobs: '3,100', rev: '₹5.2L', rating: '4.6', progress: '78%', color: 'bg-blue-500' },
                { name: 'Warangal Workers Co-op', jobs: '1,240', rev: '₹2.1L', rating: '4.7', progress: '65%', color: 'bg-sky-500' },
                { name: 'Vijayawada Trade Society', jobs: '890', rev: '₹1.5L', rating: '4.5', progress: '52%', color: 'bg-amber-500' },
              ].map(soc => (
                <tr key={soc.name} className="hover:bg-slate-50/50">
                  <td className="py-3 font-bold text-slate-800">{soc.name}</td>
                  <td className="py-3 font-semibold text-slate-600">{soc.jobs}</td>
                  <td className="py-3 font-bold text-emerald-700">{soc.rev}</td>
                  <td className="py-3 font-bold text-amber-600 flex items-center gap-1">★ {soc.rating}</td>
                  <td className="py-3 w-48">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${soc.color}`} style={{ width: soc.progress }} />
                      </div>
                      <span className="text-xs font-bold text-slate-500">{soc.progress}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
