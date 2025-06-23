'use client';

import Header from "@/components/Header";
import { useState } from "react";

export default function ResultPage() {
  const [problems] = useState([
    {
      id: 1,
      question: "문제 1에 들어갈 문제 내용입니다 문제 1에 들어갈 문제 내용입니다 문제 1에 들어갈 문제 내용입니다 문제 1",
      options: [
        { id: 'A', text: '답안 후보' },
        { id: 'B', text: '답안 후보' },
        { id: 'C', text: '답안 후보' },
        { id: 'D', text: '답안 후보' },
      ],
      answer: 'A',
      explanation: '풀이 과정: 50자 이내로 설명합니다. 50자 이내입니다. 50자 이내'
    },
    {
      id: 2,
      question: "문제 2에 들어갈 문제 내용입니다 문제 2에 들어갈 문제 내용입니다 문제 2에 들어갈 문제 내용입니다 문제 2",
      options: [
        { id: 'A', text: '답안 후보' },
        { id: 'B', text: '답안 후보' },
        { id: 'C', text: '답안 후보' },
        { id: 'D', text: '답안 후보' },
      ],
      answer: 'A',
      explanation: '풀이 과정: 50자 이내로 설명합니다. 50자 이내입니다. 50자 이내'
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-6 py-8">
            {/* 상단 제목 */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                스피치커뮤니케이션학 문제 생성
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                제공해주신 개념 자료와 유형 자료를 결합하여 스피치커뮤니케이션학 문제를 생성했습니다.
              </p>
            </div>

            {/* 문제 목록 */}
            <div className="space-y-8">
              {problems.map((problem) => (
                <div key={problem.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    문제 {problem.id}
                  </h2>
                  <p className="text-gray-800 dark:text-gray-200 mb-4">
                    {problem.question}
                  </p>
                  
                  {/* 보기 */}
                  <div className="space-y-2 mb-4">
                    {problem.options.map((option) => (
                      <div key={option.id} className="flex items-start">
                        <span className="text-gray-700 dark:text-gray-300 mr-2">
                          {option.id}.
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {option.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 정답과 해설 */}
                  <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      정답: {problem.answer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {problem.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 버튼 */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
              >
                PDF로 저장하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 