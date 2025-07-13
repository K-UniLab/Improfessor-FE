'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import useNotice from "@/hooks/useNotice";

export default function NoticePage() {
  const { useNoticeList, useNoticeDetail } = useNotice();
  const { data: noticeResponse, isLoading } = useNoticeList();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedNoticeId, setSelectedNoticeId] = useState<number | null>(null);

  // 항상 훅을 호출하되, id가 null이면 0을 넘김 (0은 실제로 존재하지 않는 id라고 가정)
  const { data: detailResponse, isLoading: detailLoading } = useNoticeDetail(selectedNoticeId ?? 0);

  const notices = noticeResponse?.data || [];
  const totalPages = Math.ceil(notices.length / itemsPerPage);

  const currentNotices = notices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold text-black mb-8">
              공지사항
            </h1>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-[#BCCCDC]">
                <thead className="bg-[#F8FAFC]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-20">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      제목
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider w-32">
                      작성일
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#BCCCDC]">
                  {currentNotices.map((notice) => (
                    <tr
                      key={notice.noticeId}
                      className="hover:bg-[#D9EAFD] cursor-pointer transition-colors"
                      onClick={() => setSelectedNoticeId(notice.noticeId)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {notice.noticeId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        <div className="flex items-center gap-2">
                          {notice.title}
                          {/* 최근 3일 이내의 공지사항에 NEW 표시 */}
                          {new Date().getTime() - new Date(notice.createdAt).getTime() < 3 * 24 * 60 * 60 * 1000 && (
                            <span className="bg-[#D9EAFD] text-black text-xs px-2 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                        {new Date(notice.createdAt).toLocaleDateString()}
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

      {/* 상세 모달 */}
      {selectedNoticeId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedNoticeId(null)}
            >
              ✕
            </button>
            {detailLoading ? (
              <div>로딩 중...</div>
            ) : detailResponse && detailResponse.data ? (
              <>
                <h2 className="text-xl font-bold mb-2">{detailResponse.data.title}</h2>
                <div className="text-sm text-gray-600 mb-4">
                  작성일: {new Date(detailResponse.data.createdAt).toLocaleDateString()}<br />
                  수정일: {new Date(detailResponse.data.updatedAt).toLocaleDateString()}
                </div>
                <div className="whitespace-pre-wrap">{detailResponse.data.content}</div>
              </>
            ) : (
              <div>공지사항을 불러오는데 실패했습니다.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 