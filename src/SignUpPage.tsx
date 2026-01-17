import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, ArrowLeft } from 'lucide-react';

export default function SignUpPage() {
  const navigate = useNavigate();
  
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    if (!fullName || !email || !password) {
      alert("Please fii in all fields!");
      return;
    }

    alert("Congratulations " + fullName + "! Your account has been created.");
    console.log("Captured Details:", { fullName, email, password });
  };

  return (
    <div className="flex min-h-screen font-sans bg-white text-black">
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-24 lg:px-32 text-left">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-black mb-2">Create Account</h1>
            <p className="text-gray-500">Join us today to start automating.</p>
          </div>

       
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input 
                required
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black" 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input 
                required
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input 
                required
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all cursor-pointer mt-4"
            >
              <UserPlus size={18} /> Create Account
            </button>
          </form>

          <button 
            type="button"
            onClick={() => navigate('/')} 
            className="flex items-center justify-center w-full mt-6 text-sm text-indigo-600 font-bold hover:underline gap-2 cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Login
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-linear-to-br from-indigo-600 via-purple-700 to-indigo-900 text-white p-12">
        <div className="text-center max-w-lg">
          <div className="mb-8 text-5xl font-mono text-white">{"< •--• >"}</div>
          <h2 className="text-4xl font-bold mb-4 text-white">Start Your Journey.</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">Build and manage your workflows in one place.</p>
        </div>
      </div>
    </div>
  );
}