import React, { useState } from 'react';
import { AdminOverview } from './AdminOverview';
import { WorkerVerificationTable } from './WorkerVerificationTable';
import { AIDemandForecast } from './AIDemandForecast';
import { WageRulesConfigurator } from './WageRulesConfigurator';
import { ManageSocietiesTab } from './ManageSocietiesTab';
import {
  LayoutDashboard,
  UserCheck,
  Sparkles,
  Sliders,
  ShieldCheck,
  Building2,
  Building,
  Download,
  FileText,
  CheckCircle2
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'societies' | 'verification' | 'forecast' | 'wagerules'>('overview');
  const [showReportMenu, setShowReportMenu] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const generateReport = (type: string) => {
    setShowReportMenu(false);
    setToastMessage(`Generating ${type}...`);
    setTimeout(() => {
      setToastMessage(`${type} downloaded successfully!`);
      setTimeout(() => setToastMessage(''), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shadow-lg">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-white">
                Hyderabad Labour Cooperative Federation
              </h2>
              <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Admin Console
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              Cooperative Governance, Verification & AI Demand Intelligence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-emerald-400 bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>2,613 Active Verified Members</span>
          </div>

          {/* Reporting Module Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowReportMenu(!showReportMenu)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-2xl text-xs font-bold transition shadow-lg border border-emerald-500/50"
            >
              <Download className="w-4 h-4" />
              <span>Generate Reports</span>
            </button>
            {showReportMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Select Report Type
                </div>
                {[
                  'Cooperative Performance',
                  'Worker Statistics',
                  'Welfare Report',
                  'Revenue Report'
                ].map(report => (
                  <button
                    key={report}
                    onClick={() => generateReport(report)}
                    className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 flex items-center gap-2 transition"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{report}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Federation Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('societies')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
            activeTab === 'societies'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Manage Societies</span>
        </button>

        <button
          onClick={() => setActiveTab('verification')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
            activeTab === 'verification'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Worker Verification</span>
        </button>

        <button
          onClick={() => setActiveTab('forecast')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
            activeTab === 'forecast'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Demand Forecast</span>
        </button>

        <button
          onClick={() => setActiveTab('wagerules')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${
            activeTab === 'wagerules'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Wage & Welfare Policy</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <AdminOverview />}
      {activeTab === 'societies' && <ManageSocietiesTab />}
      {activeTab === 'verification' && <WorkerVerificationTable />}
      {activeTab === 'forecast' && <AIDemandForecast />}
      {activeTab === 'wagerules' && <WageRulesConfigurator />}

    </div>
  );
};
