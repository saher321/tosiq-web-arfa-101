import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-primary-50">
      {/* Left branding panel - hidden on mobile */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 text-white flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="font-bold text-primary-600 text-lg">L</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">EduPanel</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Manage your institution seamlessly.
          </h1>
          <p className="text-primary-200 text-lg max-w-md leading-relaxed">
            The complete management system for students, departments, and educational resources.
          </p>
        </motion.div>

        <div className="relative z-10">
          <p className="text-primary-300 text-sm">&copy; 2026 EduPanel LMS. All rights reserved.</p>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-80 h-80 bg-primary-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[-120px] left-[-60px] w-96 h-96 bg-primary-700 rounded-full opacity-40 blur-3xl"></div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10 justify-center">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
              <span className="font-bold text-white text-lg">L</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">EduPanel</span>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
