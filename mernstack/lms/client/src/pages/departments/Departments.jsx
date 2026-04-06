import { motion } from 'framer-motion';
import { Plus, Building2, Users, BookOpen } from 'lucide-react';
import axios from 'axios';
import { DEPT_URL } from '../../utils/api.js';
import { useEffect, useState } from 'react';
// const departments = [
//   { id: 1, name: 'Computer Science', code: 'CS', head: 'Dr. Alan Turing', students: 450, courses: 24, accent: 'bg-blue-500' },
//   { id: 2, name: 'Mathematics', code: 'MATH', head: 'Dr. Katherine Johnson', students: 320, courses: 18, accent: 'bg-violet-500' },
//   { id: 3, name: 'Physics', code: 'PHY', head: 'Dr. Richard Feynman', students: 280, courses: 15, accent: 'bg-emerald-500' },
//   { id: 4, name: 'Literature', code: 'LIT', head: 'Dr. Toni Morrison', students: 510, courses: 32, accent: 'bg-amber-500' },
//   { id: 5, name: 'History', code: 'HIS', head: 'Dr. Howard Zinn', students: 380, courses: 20, accent: 'bg-rose-500' },
//   { id: 6, name: 'Biology', code: 'BIO', head: 'Dr. Jane Goodall', students: 290, courses: 16, accent: 'bg-teal-500' },
// ];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(DEPT_URL);
      console.log(response.data);
      setDepartments(response.data.departments);
    } catch (error) {
      console.error('Error fetching departments:', error);
      setError('Failed to fetch departments');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    
    fetchDepartments();
  }, []);
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
          <p className="text-gray-500 text-sm mt-1">Manage academic departments and programs.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary-500/20 active:scale-[0.97]">
          <Plus size={18} />
          Add Department
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.07, duration: 0.35 }}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden"
          >
            {/* Accent line */}
            <div className={`absolute top-0 left-0 w-full h-1 ${dept.accent}`}></div>

            <div className="flex justify-between items-start mb-4 mt-1">
              <div className={`w-11 h-11 rounded-xl ${dept.accent} bg-opacity-10 flex items-center justify-center`}>
                <Building2 size={28} className='rounded shadow p-1 bg-gray-200' />
              </div>
              <span className="text-[11px] font-bold px-2 py-1 bg-gray-100 text-gray-500 rounded-md tracking-wider uppercase">
                {dept.code}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {dept.name}
            </h3>
            <p className="text-xs text-gray-500 mb-5">Head: {dept.head}</p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-50">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-gray-400" />
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Students</p>
                  <p className="text-sm font-semibold text-gray-900">{dept.students}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-gray-400" />
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Courses</p>
                  <p className="text-sm font-semibold text-gray-900">{dept.courses}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
