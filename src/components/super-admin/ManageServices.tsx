import React, { useState } from 'react';
import { Wrench, Plus, Edit, Trash2, ShieldAlert, Zap, Droplets, PaintRoller, Hammer, CheckCircle2 } from 'lucide-react';

export const ManageServices: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState('');

  const services = [
    { id: 'S01', name: 'Electrical Works', basePrice: '₹450/hr', emergency: true, icon: Zap, color: 'text-amber-500', bg: 'bg-amber-100' },
    { id: 'S02', name: 'Plumbing Service', basePrice: '₹400/hr', emergency: true, icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-100' },
    { id: 'S03', name: 'Painting', basePrice: '₹350/hr', emergency: false, icon: PaintRoller, color: 'text-purple-500', bg: 'bg-purple-100' },
    { id: 'S04', name: 'Carpentry', basePrice: '₹500/hr', emergency: false, icon: Hammer, color: 'text-orange-500', bg: 'bg-orange-100' },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setToast('New service category added successfully!');
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="relative">
      
      {toast && (
        <div className="absolute top-0 right-0 z-50 animate-in slide-in-from-top-4 fade-in bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-700">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-bold">{toast}</span>
        </div>
      )}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Global Service Categories</h3>
            <p className="text-xs text-slate-500 font-medium mt-1">Configure platform-wide services, baseline pricing, and emergency features.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Category</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 bg-slate-50">
          {services.map(service => (
            <div key={service.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition group relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"><Edit className="w-3.5 h-3.5" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              
              <h4 className="font-extrabold text-slate-900">{service.name}</h4>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs font-bold text-slate-500">Base: <span className="text-emerald-600">{service.basePrice}</span></div>
                {service.emergency && (
                  <span className="bg-red-50 text-red-600 text-[9px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider border border-red-100">
                    <ShieldAlert className="w-3 h-3" /> Emergency
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h3 className="font-extrabold text-slate-900">Add Service Category</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category Name</label>
                <input required type="text" placeholder="e.g. Masonry" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Recommended Base Price</label>
                <input required type="text" placeholder="e.g. ₹550/hr" className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Icon Upload</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50 transition cursor-pointer">
                  <Wrench className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <span className="text-xs font-semibold text-slate-500">Click to upload SVG or PNG icon</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <input type="checkbox" id="emergency" className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
                <label htmlFor="emergency" className="text-xs font-bold text-slate-700 cursor-pointer">Enable Emergency Bookings for this service</label>
              </div>
              
              <div className="pt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition">Create Category</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
