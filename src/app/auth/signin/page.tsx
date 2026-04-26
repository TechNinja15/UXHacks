"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

function SigninForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const errorMsg = searchParams.get('error');
    const successMsg = searchParams.get('success');
    if (errorMsg) setError('Invalid email or password');
    if (successMsg) setSuccess(successMsg);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    const result = await signIn('credentials', {
      ...formData,
      redirect: false
    });

    if (result?.error) {
      setError('Invalid email or password');
      setIsLoading(false);
    } else {
      router.push('/showcase');
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-md bg-white/3 border border-white/10 rounded-[40px] p-10 md:p-12 backdrop-blur-2xl shadow-2xl space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-white">Welcome <span className="text-[#00e5ff]">Back</span></h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Access the Eldorado Repository</p>
      </div>

      {success && (
        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex items-center gap-3 text-green-400 text-[10px] font-black uppercase tracking-widest">
          <CheckCircle2 size={16} />
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="name@company.com" 
            className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white outline-none focus:border-[#00e5ff] transition-all"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Password</label>
            <Link href="#" className="text-[8px] font-black text-[#00e5ff] uppercase tracking-widest">Forgot?</Link>
          </div>
          <input 
            type="password" 
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            placeholder="••••••••" 
            className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl text-white outline-none focus:border-[#00e5ff] transition-all"
          />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-center gap-3 text-red-400 text-[10px] font-black uppercase tracking-widest">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full py-5 bg-[#00e5ff] text-black font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isLoading && <Loader2 className="animate-spin" size={18} />}
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <div className="space-y-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white/5"></div>
          <span className="relative px-4 bg-[#0a0a14] text-[8px] font-black text-gray-600 uppercase tracking-widest">Or continue with</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
            <span className="text-xs font-black text-white uppercase tracking-widest">Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
            <span className="text-xs font-black text-white uppercase tracking-widest">LinkedIn</span>
          </button>
        </div>
      </div>

      <div className="text-center pt-4">
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
          New to UXHacks? <Link href="/auth/signup" className="text-[#4c5fd5] hover:underline">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default function Signin() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1)_0%,transparent_60%)]"></div>
      <Suspense fallback={
        <div className="w-full max-w-md bg-white/3 border border-white/10 rounded-[40px] p-10 md:p-12 backdrop-blur-2xl shadow-2xl flex items-center justify-center">
          <Loader2 className="animate-spin text-[#00e5ff]" size={32} />
        </div>
      }>
        <SigninForm />
      </Suspense>
    </main>
  );
}
