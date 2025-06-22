import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Link 
        href="/"
        className="absolute top-6 left-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
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
        <div className="bg-white dark:bg-gray-800 p-8 shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-8">회원가입</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                >
                  인증번호 전송
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                인증번호 <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="verificationCode"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="인증번호 6자리"
                  required
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                >
                  확인
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                닉네임 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nickname"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="닉네임을 입력해주세요"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="비밀번호를 다시 입력해주세요"
                required
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                대학교 <span className="text-gray-500 dark:text-gray-400">(선택)</span>
              </label>
              <input
                type="text"
                id="university"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="대학교를 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                학과 <span className="text-gray-500 dark:text-gray-400">(선택)</span>
              </label>
              <input
                type="text"
                id="department"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="학과를 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                추천인 코드 <span className="text-gray-500 dark:text-gray-400">(선택)</span>
              </label>
              <input
                type="text"
                id="referralCode"
                className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="추천인 코드를 입력해주세요"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-8"
            >
              회원가입
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              이미 계정이 있으신가요?{" "}
              <Link href="/login" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 