'use client';

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D9EAFD] to-[#F8FAFC] relative">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/background.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.3',
        }}
      />
      <Link 
        href="/"
        className="absolute top-6 left-6 text-black hover:text-[#BCCCDC] transition-colors z-10"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>
      
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-white p-8 shadow-lg w-full max-w-md rounded-lg">
          <h1 className="text-4xl font-bold text-center text-black mb-8">로그인</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-black/50"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-black/50"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D9EAFD] text-black py-3 rounded-lg hover:bg-[#BCCCDC] transition"
            >
              로그인
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black">
              계정이 없으신가요?{" "}
              <Link href="/signup" className="text-black hover:text-[#BCCCDC] transition">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 