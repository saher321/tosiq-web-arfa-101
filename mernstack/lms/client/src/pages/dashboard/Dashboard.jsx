import { motion } from 'framer-motion';
import { GraduationCap, Building2, Presentation, BookOpen, TrendingUp, Bell, Clock } from 'lucide-react';

const stats = [
  { title: 'Total Students', value: '2,845', icon: GraduationCap, color: 'from-blue-500 to-blue-600', trend: '+12.5%', bg: 'bg-blue-50' },
  { title: 'Departments', value: '14', icon: Building2, color: 'from-violet-500 to-violet-600', trend: '0%', bg: 'bg-violet-50' },
  { title: 'Active Teachers', value: '142', icon: Presentation, color: 'from-emerald-500 to-emerald-600', trend: '+2.1%', bg: 'bg-emerald-50' },
  { title: 'Total Courses', value: '356', icon: BookOpen, color: 'from-amber-500 to-amber-600', trend: '+5.4%', bg: 'bg-amber-50' },
];

const notifications = [
  { id: 1, title: 'New registration completed', desc: 'Student ID #7845 enrolled in CS-101', time: '2 hours ago' },
  { id: 2, title: 'Assignment submitted', desc: 'Physics Lab Report by James Brown', time: '4 hours ago' },
  { id: 3, title: 'Department meeting scheduled', desc: 'CS Department – Room 4B at 3PM', time: '5 hours ago' },
  { id: 4, title: 'System update completed', desc: 'LMS upgraded to version 3.2.1', time: '1 day ago' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-sm`}>
                <stat.icon size={20} />
              </div>
              {stat.trend !== '0%' && (
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                  <TrendingUp size={12} />
                  {stat.trend}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 font-medium mb-0.5">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Activity Chart Area */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.35, duration: 0.4 }}
          className="bg-white rounded-2xl border border-gray-100 p-6 lg:col-span-3 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-gray-900">Activity Overview</h3>
            <select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl min-h-[260px] bg-gray-50/50">
            <p className="text-gray-400 text-sm">Chart Visualization</p>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.45, duration: 0.4 }}
          className="bg-white rounded-2xl border border-gray-100 p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold text-gray-900">Recent Notifications</h3>
            <span className="text-xs bg-primary-50 text-primary-600 font-medium px-2 py-1 rounded-md">
              {notifications.length} new
            </span>
          </div>
          <div className="space-y-4">
            {notifications.map((n) => (
              <div key={n.id} className="flex gap-3 items-start pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="w-9 h-9 rounded-full bg-primary-50 flex-shrink-0 flex items-center justify-center text-primary-500">
                  <Bell size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{n.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{n.desc}</p>
                  <span className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                    <Clock size={10} />
                    {n.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
