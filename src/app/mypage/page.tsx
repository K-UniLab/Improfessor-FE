'use client';

import Header from "@/components/Header";
import { useState } from "react";

export default function MyPage() {
  // 더미 사용자 정보 (추후 API 연동 예정)
  const [email] = useState("pjw8365@naver.com");
  const [nickname, setNickname] = useState("pjw8230");
  const [university, setUniversity] = useState("건국대학교");
  const [department] = useState("컴퓨터공학과");
  const [referralCode] = useState("AB345F");
  const [inputReferral, setInputReferral] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="max-w-xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
        {/* 내 계정 */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">내 계정</h1>

        {/* 사용자 이메일 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">사용자 이메일</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded focus:outline-none cursor-not-allowed"
            />
          </div>

          {/* 닉네임 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">사용자 닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>

          {/* 대학교 + 학과 */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                placeholder="대학교 검색"
                className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              />
              <button
                type="button"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition whitespace-nowrap"
              >
                검색
              </button>
            </div>
            <input
              type="text"
              value={department}
              disabled
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded focus:outline-none cursor-not-allowed"
            />
          </div>

          {/* 수정하기 버튼 */}
          <button
            type="button"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
          >
            수정하기
          </button>
        </div>

        {/* 프로모션 */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">프로모션</h2>
          <p className="text-gray-600 dark:text-gray-400">
            친구를 추천하여 최대 99회의 무료 생성 횟수를 받으세요!<br />
            친구가 내 추천인 코드를 입력할 때마다 친구와 나 모두 3회의 무료 생성 횟수를 받습니다.
          </p>

          {/* 내 추천인 코드 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
            <span className="text-gray-700 dark:text-gray-300">내 추천인 코드 :</span>
            <span className="ml-2 font-mono font-bold text-lg text-blue-700 dark:text-blue-400">{referralCode}</span>
          </div>

          {/* 추천인 코드 입력 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">추천인 코드 입력</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputReferral}
                onChange={(e) => setInputReferral(e.target.value.toUpperCase())}
                placeholder="추천인 코드"
                className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              />
              <button
                type="button"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition whitespace-nowrap"
              >
                입력
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">문제 생성 횟수가 3회 추가됩니다.</p>
          </div>
        </div>

        {/* 계정 탈퇴 */}
        <button
          type="button"
          className="w-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded mt-12 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          계정탈퇴
        </button>
      </main>
    </div>
  );
} 