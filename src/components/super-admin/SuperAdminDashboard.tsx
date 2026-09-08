import React, { useState } from 'react';
import { SuperAdminOverview } from './SuperAdminOverview';
import { ManageFederations } from './ManageFederations';
import { ManageServices } from './ManageServices';
import {
  LayoutDashboard,
  Users,
  Building2,
  Wrench,
  CreditCard,
  Settings,
  ShieldAlert,
  Globe
} from 'lucide-react';

export const SuperAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'federations' | 'services' | 'transactions' | 'settings'>('overview');

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Super Admin Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg backdrop-blur-sm">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-white">
                Platform Super Admin Portal
              </h2>
              <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Root Access
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              Global Platform Oversight, Federation Management & Service Configurations
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-black/40 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>System Status: Optimal</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto whitespace-nowrap">
        {[
          { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
          { id: 'users', label: 'Manage Users', icon: Users },
          { id: 'federations', label: 'Manage Federations', icon: Building2 },
          { id: 'services', label: 'Manage Services', icon: Wrench },
          { id: 'transactions', label: 'Transactions', icon: CreditCard },
          { id: 'settings', label: 'Platform Settings', icon: Settings },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-transparent hover:border-slate-200'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
        {activeTab === 'overview' && <SuperAdminOverview />}
        {activeTab === 'federations' && <ManageFederations />}
        {activeTab === 'services' && <ManageServices />}
        {/* Placeholders for unrequested tabs */}
        {(activeTab === 'users' || activeTab === 'transactions' || activeTab === 'settings') && (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
            <Settings className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-extrabold text-slate-900">Module Under Construction</h3>
            <p className="text-sm font-medium text-slate-500 mt-2">This feature is currently being built by the engineering team.</p>
          </div>
        )}
      </div>

    </div>
  );
};
