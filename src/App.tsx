import React, { useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { Check, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }
    alert("Attempting to sign in with email: " + email);
  };

  return (
    <div className="flex min-h-screen font-sans bg-white text-black">
     
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-24 lg:px-32">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2 text-black">Welcome Back</h1>
            <p className="text-gray-500">Sign in to access your dashboard.</p>
          </div>

          <form className="space-y-4 text-left" onSubmit={handleSignIn}>
            <div className="flex flex-col space-y-1">
              <Label.Root className="text-sm font-medium text-gray-700">Email or Username</Label.Root>
              <input 
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black" 
              />
            </div>

            <div className="flex flex-col space-y-1">
              <Label.Root className="text-sm font-medium text-gray-700">Password</Label.Root>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black" 
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox.Root id="remember" className="h-4 w-4 border border-gray-300 rounded flex items-center justify-center data-[state=checked]:bg-indigo-600 outline-none">
                  <Checkbox.Indicator className="text-white"><Check size={12} /></Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor="remember" className="text-gray-600 cursor-pointer">Remember me</label>
              </div>
              <button type="button" onClick={() => navigate('/forgot-password')} className="text-indigo-600 font-medium hover:underline">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all cursor-pointer">
              <LogIn size={18} /> Sign In
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <button onClick={() => navigate('/signup')} className="text-indigo-600 font-bold hover:underline cursor-pointer">
              Sign up
            </button>
          </p>
        </div>
      </div>

      
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-linear-to-br from-indigo-600 via-purple-700 to-indigo-900 text-white p-12 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-lg">
          

 <div className="mb-8 flex justify-center text-5xl font-mono tracking-tighter">
             <span>{"<"}</span>
             <span className="mx-2">
               <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="3">
                 <path d="M2 18 L12 2 L25 15 L38 5" strokeLinecap="round" strokeLinejoin="round" />
                 <circle cx="2" cy="18" r="2" fill="white" />
                 <circle cx="12" cy="2" r="2" fill="white" />
                 <circle cx="25" cy="15" r="2" fill="white" />
                 <circle cx="38" cy="5" r="2" fill="white" />
               </svg>
             </span>
             <span>{">"}</span>
          </div>



          <h2 className="text-4xl font-bold mb-4 leading-tight text-white">Code Your Workflow.<br/>Automate Your World.</h2>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Write, schedule, and manage powerful JavaScript processes. From simple CRON jobs to complex data integrations,build the exact automations you need in a first-class editor environment
          </p>
        </div>
      </div>
    </div>
  );
}


