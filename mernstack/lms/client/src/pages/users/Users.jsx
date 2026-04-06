import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const initialUsers = [
  { id: 1, name: 'Alice Freeman', email: 'alice.f@school.edu', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob.s@school.edu', role: 'Teacher', status: 'Active' },
  { id: 3, name: 'Charlie Davis', email: 'charlie.d@school.edu', role: 'Teacher', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana.p@school.edu', role: 'Staff', status: 'Active' },
  { id: 5, name: 'Edward Elric', email: 'edward.e@school.edu', role: 'Admin', status: 'Active' },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona.g@school.edu', role: 'Teacher', status: 'Active' },
];

const roleBadge = {
  Admin: 'bg-primary-50 text-primary-700 ring-primary-200',
  Teacher: 'bg-blue-50 text-blue-700 ring-blue-200',
  Staff: 'bg-amber-50 text-amber-700 ring-amber-200',
};

export default function Users() {
  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState(null);

  const filtered = initialUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage admin, staff and teacher accounts.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary-500/20 active:scale-[0.97]">
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Table Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
      >
        {/* Search Bar */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-5">Role</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${roleBadge[user.role] || 'bg-gray-50 text-gray-700 ring-gray-200'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-5">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                      user.status === 'Active' ? 'text-emerald-700' : 'text-gray-500'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === user.id ? null : user.id)}
                      className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <MoreVertical size={16} />
                    </button>
                    {openMenu === user.id && (
                      <div className="absolute right-5 top-full mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-lg z-10 py-1">
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          <Edit2 size={14} /> Edit
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-sm text-gray-400">
                    No users found matching &quot;{search}&quot;.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
          <span>Showing {filtered.length} of {initialUsers.length} users</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
