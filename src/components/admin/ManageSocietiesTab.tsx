import React, { useState, useEffect } from 'react';
import { Building, MapPin, Users, DollarSign, Activity, Edit, Plus, ShieldAlert } from 'lucide-react';

interface Society {
  id: string;
  name: string;
  location: string;
  totalWorkers: number;
  revenue: string;
  status: 'Active' | 'Inactive';
}

const mockSocieties: Society[] = [
  { id: '1', name: 'Hyderabad Central Co-op', location: 'Hyderabad (Banjara Hills)', totalWorkers: 1250, revenue: '₹18.5L', status: 'Active' },
  { id: '2', name: 'Secunderabad Labour Union', location: 'Hyderabad (Secunderabad)', totalWorkers: 840, revenue: '₹12.2L', status: 'Active' },
  { id: '3', name: 'Warangal Workers Co-op', location: 'Warangal Central', totalWorkers: 420, revenue: '₹5.4L', status: 'Inactive' },
  { id: '4', name: 'Vijayawada Trade Society', location: 'Vijayawada City', totalWorkers: 336, revenue: '₹4.1L', status: 'Active' },
];

export const ManageSocietiesTab: React.FC = () => {
  const [societies, setSocieties] = useState<Society[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingSociety, setEditingSociety] = useState<Society | null>(null);

  useEffect(() => {
    const fetchSocieties = setTimeout(() => {
      setSocieties(mockSocieties);
      setLoading(false);
    }, 800);
    return () => clearTimeout(fetchSocieties);
  }, []);

  const handleAddEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSociety) {
      if (editingSociety.id) {
        setSocieties(societies.map(s => s.id === editingSociety.id ? editingSociety : s));
      } else {
        setSocieties([...societies, { ...editingSociety, id: Math.random().toString(36).substr(2, 9) }]);
      }
    }
    setShowModal(false);
    setEditingSociety(null);
  };

  const toggleStatus = (id: string) => {
    setSocieties(societies.map(s => s.id === id ? { ...s, status: s.status === 'Active' ? 'Inactive' : 'Active' } : s));
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600 mb-4"></div>
        <p className="text-sm font-bold text-slate-500">Loading societies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-red-200">
        <ShieldAlert className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-sm font-bold text-slate-800">Failed to load societies data.</p>
        <button onClick={() => setError(false)} className="mt-4 px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-200">Retry</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">Cooperative Societies</h3>
          <p className="text-xs text-slate-500 font-medium mt-1">Manage federated societies and member unions</p>
        </div>
        <button 
          onClick={() => {
            setEditingSociety({ id: '', name: '', location: '', totalWorkers: 0, revenue: '', status: 'Active' });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition"
        >
          <Plus className="w-4 h-4" />
          <span>Add Society</span>
        </button>
      </div>

      {societies.length === 0 ? (
        <div className="py-20 text-center">
          <Building className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-sm font-bold text-slate-500">No cooperative societies found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4">Society Name</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Total Workers</th>
                <th className="px-6 py-4">Revenue</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {societies.map(society => (
                <tr key={society.id} className="hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Building className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-slate-900">{society.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {society.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                      <Users className="w-3.5 h-3.5 text-blue-500" />
                      {society.totalWorkers}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                      {society.revenue}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${
                      society.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {society.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => toggleStatus(society.id)}
                        className={`p-1.5 rounded-lg border ${
                          society.status === 'Active' ? 'text-amber-600 hover:bg-amber-50 border-amber-200' : 'text-emerald-600 hover:bg-emerald-50 border-emerald-200'
                        }`}
                        title={society.status === 'Active' ? 'Deactivate' : 'Activate'}
                      >
                        <Activity className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setEditingSociety(society);
                          setShowModal(true);
                        }}
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                        title="Edit Society"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && editingSociety && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h3 className="font-extrabold text-slate-900">
                {editingSociety.id ? 'Edit Society' : 'Add New Society'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <form onSubmit={handleAddEdit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Society Name</label>
                <input 
                  required
                  type="text" 
                  value={editingSociety.name}
                  onChange={(e) => setEditingSociety({ ...editingSociety, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                <input 
                  required
                  type="text" 
                  value={editingSociety.location}
                  onChange={(e) => setEditingSociety({ ...editingSociety, location: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Total Workers</label>
                  <input 
                    required
                    type="number" 
                    value={editingSociety.totalWorkers || ''}
                    onChange={(e) => setEditingSociety({ ...editingSociety, totalWorkers: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Revenue</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. ₹10.5L"
                    value={editingSociety.revenue}
                    onChange={(e) => setEditingSociety({ ...editingSociety, revenue: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
                >
                  Save Society
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
