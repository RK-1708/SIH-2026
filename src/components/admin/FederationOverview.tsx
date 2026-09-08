import React, { useState } from 'react';
import { Filter, Calendar, Building2, Wrench, Activity, CheckCircle2, AlertTriangle, TrendingUp, DollarSign, Heart } from 'lucide-react';

export const FederationOverview: React.FC = () => {
  const [filters, setFilters] = useState({
    dateRange: 'Last 30 Days',
    society: 'All Societies',
    service: 'All Services',
    status: 'All Status',
    emergency: 'All Bookings'
  });

  const getFilteredData = () => {
    // Mock data update based on filter
    let baseMultiplier = 1;
    if (filters.society !== 'All Societies') baseMultiplier = 0.3;
    if (filters.service !== 'All Services') baseMultiplier *= 0.4;
    if (filters.emergency === 'Emergency Only') baseMultiplier *= 0.1;

    const totalBookings = Math.floor(12482 * baseMultiplier);
    const revenue = Math.floor(4860000 * baseMultiplier);
    
    return {
      totalBookings,
      completedBookings: Math.floor(totalBookings * 0.8),
      activeBookings: Math.floor(totalBookings * 0.15),
      emergencyBookings: Math.floor(totalBookings * 0.05),
      revenue,
      workerEarnings: Math.floor(revenue * 0.85),
      coopContribution: Math.floor(revenue * 0.10),
      welfareContribution: Math.floor(revenue * 0.05),
    };
  };

  const data = getFilteredData();

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Advanced Analytics Filters */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-3">
          <Filter className="w-5 h-5 text-emerald-600" />
          <span className="font-extrabold">Federation Overview Filters</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Date Range</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
              <select value={filters.dateRange} onChange={e => setFilters({...filters, dateRange: e.target.value})} className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none">
                <option>Today</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Society</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="w-4 h-4 text-slate-400" />
              </div>
              <select value={filters.society} onChange={e => setFilters({...filters, society: e.target.value})} className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none">
                <option>All Societies</option>
                <option>Hyderabad Co-op</option>
                <option>Secunderabad United</option>
                <option>Warangal Federation</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Service Category</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Wrench className="w-4 h-4 text-slate-400" />
              </div>
              <select value={filters.service} onChange={e => setFilters({...filters, service: e.target.value})} className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none">
                <option>All Services</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>AC Technician</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Booking Status</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Activity className="w-4 h-4 text-slate-400" />
              </div>
              <select value={filters.status} onChange={e => setFilters({...filters, status: e.target.value})} className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none">
                <option>All Status</option>
                <option>Completed</option>
                <option>Active</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Emergency Filter</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AlertTriangle className="w-4 h-4 text-slate-400" />
              </div>
              <select value={filters.emergency} onChange={e => setFilters({...filters, emergency: e.target.value})} className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none">
                <option>All Bookings</option>
                <option>Emergency Only</option>
                <option>Normal Only</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Row 1 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Bookings</span>
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">{data.totalBookings.toLocaleString()}</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Completed Bookings</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">{data.completedBookings.toLocaleString()}</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Bookings</span>
            <Activity className="w-4 h-4 text-amber-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">{data.activeBookings.toLocaleString()}</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm bg-rose-50/50">
          <div className="flex items-center justify-between text-rose-500 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Emergency Bookings</span>
            <AlertTriangle className="w-4 h-4" />
          </div>
          <span className="text-2xl font-extrabold text-rose-700">{data.emergencyBookings.toLocaleString()}</span>
        </div>

        {/* Row 2 */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Revenue</span>
            <DollarSign className="w-4 h-4 text-slate-600" />
          </div>
          <span className="text-2xl font-extrabold text-slate-900">₹{(data.revenue / 100000).toFixed(2)}L</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Worker Earnings</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-extrabold text-emerald-700">₹{(data.workerEarnings / 100000).toFixed(2)}L</span>
          <span className="text-[10px] text-emerald-600 font-bold block mt-1">85% Share</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Co-op Contribution</span>
            <Building2 className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-2xl font-extrabold text-blue-700">₹{(data.coopContribution / 1000).toFixed(1)}k</span>
          <span className="text-[10px] text-blue-600 font-bold block mt-1">10% Share</span>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Welfare Contribution</span>
            <Heart className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-extrabold text-amber-600">₹{(data.welfareContribution / 1000).toFixed(1)}k</span>
          <span className="text-[10px] text-amber-600 font-bold block mt-1">5% Share</span>
        </div>
      </div>
    </div>
  );
};
