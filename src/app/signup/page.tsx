import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D9EAFD] to-[#F8FAFC]">
      <Link 
        href="/"
        className="absolute top-6 left-6 text-black hover:text-[#BCCCDC] transition-colors"
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

      <div className="flex items-center justify-center min-h-screen py-12">
        <div className="bg-white p-8 shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-black mb-8">회원가입</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                이메일 <span className="text-[#BCCCDC]">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                  placeholder="your@email.com"
                  required
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-[#D9EAFD] text-black rounded-lg hover:bg-[#BCCCDC] transition whitespace-nowrap"
                >
                  인증번호 전송
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium text-black mb-2">
                인증번호 <span className="text-[#BCCCDC]">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="verificationCode"
                  className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                  placeholder="인증번호 6자리"
                  required
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-[#D9EAFD] text-black rounded-lg hover:bg-[#BCCCDC] transition whitespace-nowrap"
                >
                  확인
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-black mb-2">
                닉네임 <span className="text-[#BCCCDC]">*</span>
              </label>
              <input
                type="text"
                id="nickname"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                placeholder="닉네임을 입력해주세요"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                비밀번호 <span className="text-[#BCCCDC]">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-2">
                비밀번호 확인 <span className="text-[#BCCCDC]">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                placeholder="비밀번호를 다시 입력해주세요"
                required
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-black mb-2">
                대학교 <span className="text-[#BCCCDC]">(선택)</span>
              </label>
              <input
                type="text"
                id="university"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                placeholder="대학교를 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-black mb-2">
                학과 <span className="text-[#BCCCDC]">(선택)</span>
              </label>
              <input
                type="text"
                id="department"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                placeholder="학과를 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-black mb-2">
                추천인 코드 <span className="text-[#BCCCDC]">(선택)</span>
              </label>
              <input
                type="text"
                id="referralCode"
                className="w-full px-4 py-2 bg-white border border-[#BCCCDC] rounded-lg focus:ring-2 focus:ring-[#D9EAFD] focus:border-transparent text-black placeholder-[#BCCCDC]"
                placeholder="추천인 코드를 입력해주세요"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#D9EAFD] text-black py-3 rounded-lg hover:bg-[#BCCCDC] transition mt-8"
            >
              회원가입
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-black">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="text-[#BCCCDC] hover:text-black">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 