import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FORGOT_PASS_URL } from '../../utils/api.js';
import toast from 'react-hot-toast';

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (data) => {
    try {
      const response = await axios.post(FORGOT_PASS_URL, data);
      if (response.data.status == true) {
        localStorage.setItem('resetEmail', data.email);
        toast.success(response.data.message);
        navigate('/reset-password');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error. Please try again later.");      
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/login" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-600 mb-8 transition-colors gap-1">
        <ArrowLeft size={16} />
        Back to Login
      </Link>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
        <p className="text-gray-500">No worries, we&apos;ll send you reset instructions.</p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit(handleForgotPassword)} className="space-y-5">
          <div>
            <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                { ...register('email') }
                id="forgot-email"
                type="email"
                required
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Enter your registered email"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary-500/25 transition-all hover:shadow-primary-500/40 active:scale-[0.98]"
          >
            <Send size={16} />
            Send Reset Link
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-100 text-center"
        >
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={24} className="text-green-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Check your email</h3>
          <p className="text-sm text-green-700 leading-relaxed">
            We sent a password reset link to <span className="font-semibold">{email}</span>
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-medium text-green-700 hover:text-green-800 underline underline-offset-2"
          >
            Try another email
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
