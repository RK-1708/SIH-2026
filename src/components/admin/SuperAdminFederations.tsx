import React, { useState } from 'react';
import { Network, Plus, Eye, Ban, ShieldCheck, AlertCircle } from 'lucide-react';

export const SuperAdminFederations: React.FC = () => {
  const [federations, setFederations] = useState([
    { id: 'FED-TL', name: 'Telangana Labour Federation', regId: 'REG-FED-TL', region: 'Telangana', location: 'Hyderabad', contactPerson: 'Arun Reddy', contactNumber: '+91 90000 11111', email: 'tlfed@sahakaar.in', coops: 12, workers: 8450, status: 'active' },
    { id: 'FED-MH', name: 'Maharashtra Gig Co-op Union', regId: 'REG-FED-MH', region: 'Maharashtra', location: 'Mumbai', contactPerson: 'Vikram Singh', contactNumber: '+91 90000 22222', email: 'mhfed@sahakaar.in', coops: 18, workers: 12200, status: 'active' },
    { id: 'FED-KA', name: 'Karnataka Service Co-ops', regId: 'REG-FED-KA', region: 'Karnataka', location: 'Bengaluru', contactPerson: 'Pooja Hegde', contactNumber: '+91 90000 33333', email: 'kafed@sahakaar.in', coops: 8, workers: 5100, status: 'suspended' },
    { id: 'FED-AP', name: 'Andhra United Workers', regId: 'REG-FED-AP', region: 'Andhra Pradesh', location: 'Vijayawada', contactPerson: 'Ramesh Babu', contactNumber: '+91 90000 44444', email: 'apfed@sahakaar.in', coops: 4, workers: 2100, status: 'active' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '', regId: '', region: '', location: '', contactPerson: '', contactNumber: '', email: '', status: 'active'
  });

  const handleSuspend = (id: string) => {
    setFederations(prev => prev.map(f => f.id === id ? { ...f, status: f.status === 'active' ? 'suspended' : 'active' } : f));
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowAddModal(false);
      setFederations([{
        id: `FED-NEW-${federations.length + 1}`,
        name: formData.name,
        regId: formData.regId,
        region: formData.region,
        location: formData.location,
        contactPerson: formData.contactPerson,
        contactNumber: formData.contactNumber,
        email: formData.email,
        coops: 0,
        workers: 0,
        status: formData.status
      }, ...federations]);
      setFormData({ name: '', regId: '', region: '', location: '', contactPerson: '', contactNumber: '', email: '', status: 'active' });
    }, 800);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h3 className="font-extrabold text-lg text-slate-900">Federation Management</h3>
          <p className="text-xs text-slate-500 font-medium">Manage top-level regional federations and networks.</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm">
          <Plus className="w-4 h-4" />
          <span>Add Federation</span>
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                <th className="p-4 pl-6">Federation Name</th>
                <th className="p-4">Region</th>
                <th className="p-4">Cooperatives</th>
                <th className="p-4">Total Workers</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {federations.map((fed) => (
                <tr key={fed.id} className="hover:bg-slate-50/50 transition">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                        <Network className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{fed.name}</div>
                        <div className="text-[10px] text-slate-500 font-medium">ID: {fed.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">{fed.region}</td>
                  <td className="p-4 text-slate-900 font-bold">{fed.coops}</td>
                  <td className="p-4 text-slate-900 font-bold">{fed.workers.toLocaleString()}</td>
                  <td className="p-4">
                    {fed.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                        <ShieldCheck className="w-3 h-3" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 text-[10px] font-extrabold uppercase">
                        <Ban className="w-3 h-3" /> Suspended
                      </span>
                    )}
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-3 py-1.5 text-[10px] font-bold rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition flex items-center gap-1">
                        <Eye className="w-3 h-3" /> View
                      </button>
                      <button 
                        onClick={() => handleSuspend(fed.id)}
                        className={`px-3 py-1.5 text-[10px] font-bold rounded-lg border transition ${
                          fed.status === 'active' 
                          ? 'border-rose-200 text-rose-700 hover:bg-rose-50' 
                          : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                        }`}
                      >
                        {fed.status === 'active' ? 'Suspend' : 'Unsuspend'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-6 shadow-xl border border-slate-200 my-8">
            <h3 className="font-extrabold text-lg text-slate-900 mb-6">Add New Federation</h3>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Federation Name *</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} type="text" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. Kerala Co-op Union" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Registration ID *</label>
                  <input required value={formData.regId} onChange={e => setFormData({...formData, regId: e.target.value})} type="text" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. REG-FED-KL" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Region/State *</label>
                  <input required value={formData.region} onChange={e => setFormData({...formData, region: e.target.value})} type="text" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. Kerala" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Headquarters Location *</label>
                  <input required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} type="text" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="e.g. Kochi" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person *</label>
                  <input required value={formData.contactPerson} onChange={e => setFormData({...formData, contactPerson: e.target.value})} type="text" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Contact Number *</label>
                  <input required value={formData.contactNumber} onChange={e => setFormData({...formData, contactNumber: e.target.value})} type="tel" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                  <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} type="email" className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option value="active">Active</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-slate-100">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition">Cancel</button>
                <button type="submit" disabled={isLoading} className="px-6 py-2.5 text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition shadow-sm disabled:opacity-70">
                  {isLoading ? 'Adding...' : 'Add Federation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
