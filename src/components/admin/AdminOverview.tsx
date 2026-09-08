import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Users, ShieldCheck, Activity, TrendingUp, Heart, DollarSign, Filter, Calendar, Building2, Wrench, Download, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export const AdminOverview: React.FC = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportType, setReportType] = useState('performance');
  const [reportGenerating, setReportGenerating] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportGenerating(true);
    setTimeout(() => {
      setReportGenerating(false);
      setReportSuccess(true);
      setTimeout(() => {
        setReportSuccess(false);
        setShowReportModal(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h3 className="font-extrabold text-lg text-slate-900">Federation Performance</h3>
          <p className="text-xs text-slate-500 font-medium">Real-time metrics across all cooperative societies.</p>
        </div>
        <button 
          onClick={() => setShowReportModal(true)}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
        >
          <FileText className="w-4 h-4" />
          <span>Generate Reports</span>
        </button>
      </div>

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

      {/* Advanced Analytics Filters */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-slate-500 mr-2">
          <Filter className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Filters:</span>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="w-4 h-4 text-slate-400" />
          </div>
          <select className="pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-emerald-500 appearance-none shadow-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building2 className="w-4 h-4 text-slate-400" />
          </div>
          <select className="pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-emerald-500 appearance-none shadow-sm">
            <option>All Societies</option>
            <option>Hyderabad Co-op</option>
            <option>Secunderabad United</option>
            <option>Warangal Federation</option>
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Wrench className="w-4 h-4 text-slate-400" />
          </div>
          <select className="pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-emerald-500 appearance-none shadow-sm">
            <option>All Services</option>
            <option>Electrician</option>
            <option>Plumber</option>
            <option>AC Technician</option>
          </select>
        </div>
      </div>

      {/* Analytics Chart Mockups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Weekly Job Volume Growth</h4>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">+18.4% this week</span>
          </div>

          {/* Bar Chart Visualization */}
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

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-sm text-slate-900">Worker Trade Utilization</h4>
            <span className="text-xs font-bold text-slate-500">89% Avg Active</span>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Electricians (412 workers)</span>
                <span className="text-emerald-700">94% Active</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[94%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>AC Technicians (280 workers)</span>
                <span className="text-emerald-700">98% Active</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 w-[98%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Plumbers (350 workers)</span>
                <span className="text-emerald-700">88% Active</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[88%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Painters & Cleaners (520 workers)</span>
                <span className="text-emerald-700">82% Active</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[82%]" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Society Comparison Chart */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-extrabold text-sm text-slate-900">Society Comparison</h4>
            <p className="text-xs text-slate-500">Revenue & Job Volume across Top 4 Cooperatives</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[
            { name: 'Hyderabad Co-op', rev: '₹14.5L', jobs: 3420, progress: 'w-[90%]', color: 'bg-emerald-500' },
            { name: 'Secunderabad Utd', rev: '₹11.2L', jobs: 2810, progress: 'w-[75%]', color: 'bg-blue-500' },
            { name: 'Guntur Electricians', rev: '₹6.8L', jobs: 1940, progress: 'w-[50%]', color: 'bg-indigo-500' },
            { name: 'Warangal Plumbers', rev: '₹4.5L', jobs: 1105, progress: 'w-[35%]', color: 'bg-sky-500' },
          ].map(soc => (
            <div key={soc.name} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <h5 className="font-bold text-xs text-slate-800">{soc.name}</h5>
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Revenue</span>
                  <span className="text-lg font-extrabold text-emerald-700">{soc.rev}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Jobs</span>
                  <span className="text-sm font-bold text-slate-700">{soc.jobs}</span>
                </div>
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mt-2">
                <div className={`h-full ${soc.color} ${soc.progress}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Generation Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-xl border border-slate-200">
            <h3 className="font-extrabold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" /> Generate Report
            </h3>
            
            {reportSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Report Generated!</h4>
                <p className="text-sm text-slate-500">Your PDF download will begin shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleGenerateReport} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Select Report Type</label>
                  <select 
                    value={reportType} 
                    onChange={e => setReportType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none bg-slate-50"
                  >
                    <option value="performance">Cooperative Performance</option>
                    <option value="statistics">Worker Statistics</option>
                    <option value="welfare">Welfare Report</option>
                    <option value="revenue">Revenue Report</option>
                  </select>
                </div>
                
                <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-slate-100">
                  <button type="button" onClick={() => setShowReportModal(false)} className="px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition">
                    Cancel
                  </button>
                  <button disabled={reportGenerating} type="submit" className="px-6 py-2.5 text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait">
                    {reportGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" /> Download PDF
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
