import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Building2, Users, BookOpen, X, Trash2 } from 'lucide-react';
import axios from 'axios';
import { DEPT_ADD_URL, DEPT_DEL_URL, DEPT_URL } from '../../utils/api.js';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import VDivider from '../../components/VDivider.jsx';
import { NavLink } from 'react-router-dom';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const { register, handleSubmit, reset, setValue } = useForm()
  // const [currentDeptId, setCurrentDeptId] = useState(null);

  const openAddModal = () => {
    setModalMode('add');
    reset();
    setIsModalOpen(true);
  };

  const openEditModal = (dept) => {
    setModalMode('edit');
    // setCurrentDeptId(dept.id || dept._id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

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

  const saveDepartment = async (data) => {
    try {
      const response = await axios.post(DEPT_ADD_URL, data)
      if (response.data.status == true) {
        closeModal();
        toast.success(response.data.message)
        await fetchDepartments()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this?")) return;
    try {
      const response = await axios.delete(DEPT_DEL_URL + "/" + id)
      if (response.data.status == true) {
        toast.success(response.data.message)
        await fetchDepartments()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
          <p className="text-gray-500 text-sm mt-1">Manage academic departments and programs.</p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary-500/20 active:scale-[0.97]"
        >
          <Plus size={18} />
          Add Department
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.id || dept._id || index}
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
              <div className='flex items-center gap-3'>
                <span className="text-[11px] font-bold px-2 py-1 bg-gray-100 text-gray-500 rounded-md tracking-wider uppercase">
                  {dept.code}
                </span>
                <VDivider />
                <div>
                  <NavLink onClick={(e) => handleDelete(dept._id)}>
                    <Trash2 size={18} className="text-red-400" />
                  </NavLink>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {dept.name}
            </h3>
            <p className="text-xs text-gray-500 mb-5">Head: {dept.hodName}</p>

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

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm transition-opacity">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col"
            >
              <form onSubmit={handleSubmit(saveDepartment)}>
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-gray-900">
                    {modalMode === 'add' ? 'Add Department' : 'Edit Department'}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:bg-gray-100 hover:text-gray-600 p-1.5 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department Name</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-gray-900"
                      placeholder="e.g. Computer Science"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department Code</label>
                    <input
                      type="text"
                      {...register('code')}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-gray-900"
                      placeholder="e.g. CS"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Head of Department</label>
                    <input
                      type="text"
                      {...register('hodName')}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium text-gray-900"
                      placeholder="e.g. Dr. Alan Turing"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-900 focus:outline-none shadow-sm transition-all"
                  >
                    Cancel
                  </button>
                  <button type='submit'
                    className="px-4 py-2 text-sm font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 shadow-lg shadow-primary-500/30 transition-all active:scale-[0.97]"
                  >
                    {modalMode === 'add' ? 'Add Department' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
