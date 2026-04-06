import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Download } from 'lucide-react';

const allStudents = [
  { id: 'ST-001', name: 'John Doe', dept: 'Computer Science', year: '3rd Year', gpa: '3.8', status: 'Active' },
  { id: 'ST-002', name: 'Jane Smith', dept: 'Mathematics', year: '2nd Year', gpa: '3.9', status: 'Active' },
  { id: 'ST-003', name: 'James Brown', dept: 'Physics', year: '4th Year', gpa: '3.5', status: 'Active' },
  { id: 'ST-004', name: 'Emily Davis', dept: 'Literature', year: '1st Year', gpa: '4.0', status: 'Active' },
  { id: 'ST-005', name: 'Oliver Wilson', dept: 'History', year: '3rd Year', gpa: '3.2', status: 'Inactive' },
  { id: 'ST-006', name: 'Sophia Miller', dept: 'Computer Science', year: '2nd Year', gpa: '3.7', status: 'Active' },
  { id: 'ST-007', name: 'Liam Johnson', dept: 'Biology', year: '1st Year', gpa: '3.6', status: 'Active' },
  { id: 'ST-008', name: 'Ava Martinez', dept: 'Mathematics', year: '4th Year', gpa: '3.9', status: 'Active' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Students() {
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('');

  const filtered = allStudents.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase());
    const matchesDept = !deptFilter || s.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  const uniqueDepts = [...new Set(allStudents.map((s) => s.dept))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Directory</h1>
          <p className="text-gray-500 text-sm mt-1">Manage enrolled students and academic profiles.</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
            <Download size={16} />
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary-500/20 active:scale-[0.97]">
            <Plus size={18} />
            Add Student
          </button>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row gap-3"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search by ID or name..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-600 sm:w-48"
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
        >
          <option value="">All Departments</option>
          {uniqueDepts.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </motion.div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((student, index) => (
          <motion.div
            key={student.id}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:shadow-primary-100/40 transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold shadow-md shadow-primary-500/20">
                {student.name.charAt(0)}
              </div>
              <div className="text-right">
                <span className="text-[11px] font-semibold px-2 py-1 bg-gray-100 text-gray-500 rounded-md block">
                  {student.id}
                </span>
              </div>
            </div>

            <h3 className="text-base font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              {student.name}
            </h3>

            <div className="mt-4 space-y-2.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Department</span>
                <span className="font-medium text-gray-800">{student.dept}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Year</span>
                <span className="font-medium text-gray-800">{student.year}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Status</span>
                <span className={`font-medium flex items-center gap-1 ${student.status === 'Active' ? 'text-emerald-600' : 'text-gray-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${student.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                  {student.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs pt-2.5 border-t border-gray-50">
                <span className="text-gray-500">GPA</span>
                <span className="font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md text-sm">
                  {student.gpa}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">No students found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
