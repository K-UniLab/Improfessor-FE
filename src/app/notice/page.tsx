'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";

export default function NoticePage() {
  // 더미 데이터 생성 (12개)
  const allNotices = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    author: i % 2 === 0 ? "관리자" : "시스템",
    title: `공지사항 ${i + 1}번째 글입니다.`,
    date: `2024.03.${20 - i < 10 ? '0' + (20 - i) : 20 - i}`,
    content: `공지사항 ${i + 1}번째 내용입니다.`,
    isNew: i < 2,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allNotices.length / itemsPerPage);

  // 현재 페이지에 해당하는 공지사항만 필터링
  const notices = allNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              공지사항
            </h1>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-20">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32">
                      작성자
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      제목
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32">
                      작성일
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {notices.map((notice) => (
                    <tr 
                      key={notice.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                      onClick={() => {
                        // TODO: 공지사항 상세보기 구현
                        console.log('공지사항 상세보기:', notice.id);
                      }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {notice.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {notice.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          {notice.title}
                          {notice.isNew && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {notice.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>
    </div>
  );
} 