import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <main className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6">
            나는 교수다
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
            PDF 파일을 업로드하면 AI가 자동으로 학습문제를 생성해주는 스마트한 교육 플랫폼
          </p>
          
          <div className="flex gap-6">
            <Link 
              href="/login"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              회원가입
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
