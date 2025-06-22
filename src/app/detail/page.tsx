'use client';

import Header from "@/components/Header";
import Image from "next/image";

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 페이지 제목과 설명 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">
            내가교수다
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            자료 업로드 후 문제 생성하기 버튼을 눌러주세요
          </p>
        </div>

        <div className="space-y-8">
          {/* 수업 자료 업로드 섹션 */}
          <div className="bg-white dark:bg-gray-800 shadow">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                수업 자료 업로드
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                문제를 만들어 드릴까요? 개념 학습 자료를 업로드 해주세요
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 text-center">
                <input
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  className="hidden"
                  id="concept-upload"
                />
                <label
                  htmlFor="concept-upload"
                  className="inline-flex flex-col items-center cursor-pointer"
                >
                  <Image
                    src="/upload-icon.svg"
                    alt="Upload"
                    width={48}
                    height={48}
                    className="dark:invert mb-4"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    파일 선택하기
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    (pdf, ppt 파일만 가능)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* 족보 올리기 섹션 */}
          <div className="bg-white dark:bg-gray-800 shadow">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                족보 올리기
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                유사한 스타일로 만들어 드릴까요? 원하는 문제 유형 자료를 업로드 해주세요
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 text-center">
                <input
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  className="hidden"
                  id="reference-upload"
                />
                <label
                  htmlFor="reference-upload"
                  className="inline-flex flex-col items-center cursor-pointer"
                >
                  <Image
                    src="/upload-icon.svg"
                    alt="Upload"
                    width={48}
                    height={48}
                    className="dark:invert mb-4"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    파일 선택하기
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    (pdf, ppt 파일만 가능)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* 문제 생성하기 버튼 */}
          <button
            type="button"
            className="w-full bg-black text-white py-4 text-lg font-medium hover:bg-gray-900 transition"
          >
            문제 생성하기
          </button>
        </div>
      </main>
    </div>
  );
} 