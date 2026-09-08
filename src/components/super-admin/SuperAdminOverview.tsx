import React from 'react';
import { Building2, Building, Users, UserCheck, TrendingUp, IndianRupee, Activity, AlertCircle, Globe } from 'lucide-react';

export const SuperAdminOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Federations & Cooperatives */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider">Network Size</span>
            <Building2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">12</span>
              <span className="text-sm font-semibold text-slate-500">Federations</span>
            </div>
            <div className="mt-2 text-xs font-bold text-indigo-600 flex items-center gap-1 bg-indigo-50 w-fit px-2 py-1 rounded-md">
              <Building className="w-3.5 h-3.5" />
              <span>148 Active Cooperatives</span>
            </div>
          </div>
        </div>

        {/* Total Verified Workers & Customers */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider">User Base</span>
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">42.5k</span>
              <span className="text-sm font-semibold text-slate-500">Customers</span>
            </div>
            <div className="mt-2 text-xs font-bold text-blue-600 flex items-center gap-1 bg-blue-50 w-fit px-2 py-1 rounded-md">
              <UserCheck className="w-3.5 h-3.5" />
              <span>18,450 Verified Workers</span>
            </div>
          </div>
        </div>

        {/* Platform Revenue & Worker Earnings */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider">Financials (YTD)</span>
            <IndianRupee className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">₹4.2Cr</span>
              <span className="text-sm font-semibold text-slate-500">Platform Rev.</span>
            </div>
            <div className="mt-2 text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-50 w-fit px-2 py-1 rounded-md">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>₹28.5Cr Worker Earnings</span>
            </div>
          </div>
        </div>

        {/* Active Bookings & Emergency Bookings */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider">Live Activity</span>
            <Activity className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">1,204</span>
              <span className="text-sm font-semibold text-slate-500">Active Bookings</span>
            </div>
            <div className="mt-2 text-xs font-bold text-red-600 flex items-center gap-1 bg-red-50 w-fit px-2 py-1 rounded-md">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>14 Emergency Bookings</span>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <Globe className="w-16 h-16 text-emerald-500 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-extrabold text-white">Platform Health is Optimal</h3>
          <p className="text-slate-400 font-medium mt-2 max-w-lg mx-auto">
            All 12 regional federations are reporting normal activity. Server response times are within the 120ms threshold.
          </p>
        </div>
      </div>
    </div>
  );
};
