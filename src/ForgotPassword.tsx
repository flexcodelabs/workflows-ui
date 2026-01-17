import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    alert("If this email is registered, you will receive a password reset link.");
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50 items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
            <Mail size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
          <p className="text-gray-500 mt-2">Enter your email address to receive a link to reset your password.</p>
        </div>

        <form className="space-y-6" onSubmit={handleReset}>
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input 
              required
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 text-black transition-all" 
              type="email" 
              placeholder="example@gmail.com"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md">
          Send instrusctions
          </button>
        </form>

        <button 
          onClick={() => navigate('/')}
          className="mt-8 flex items-center justify-center w-full text-indigo-600 font-medium hover:text-indigo-800 transition-colors gap-2"
        >
          <ArrowLeft size={18} /> Back to Login
        </button>
      </div>
    </div>
  );
}