'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";

interface Notice {
  id: number;
  author: string;
  title: string;
  date: string;
  content: string;
  isNew: boolean;
}

export default function AdminNoticePage() {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

  const itemsPerPage = 10;
  const totalPages = Math.ceil(allNotices.length / itemsPerPage);

  // 현재 페이지에 해당하는 공지사항만 필터링
  const notices = allNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCreateClick = () => {
    setSelectedNotice(null);
    setModalMode('create');
    setIsModalOpen(true);
  };

  const handleEditClick = (notice: Notice) => {
    setSelectedNotice(notice);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleDeleteClick = (noticeId: number) => {
    if (window.confirm('정말로 이 공지사항을 삭제하시겠습니까?')) {
      // TODO: API 호출하여 공지사항 삭제
      console.log('공지사항 삭제:', noticeId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-6 py-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                공지사항 관리
              </h1>
              <button
                onClick={handleCreateClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                공지사항 작성
              </button>
            </div>

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
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-32">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {notices.map((notice) => (
                    <tr key={notice.id}>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditClick(notice)}
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            수정
                          </button>
                          <button
                            onClick={() => handleDeleteClick(notice.id)}
                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                          >
                            삭제
                          </button>
                        </div>
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

      {isModalOpen && (
        <NoticeModal
          mode={modalMode}
          notice={selectedNotice}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            // TODO: API 호출하여 공지사항 생성/수정
            console.log('공지사항 저장:', data);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

interface NoticeFormData {
  title: string;
  content: string;
}

interface NoticeModalProps {
  mode: 'create' | 'edit';
  notice: Notice | null;
  onClose: () => void;
  onSubmit: (data: NoticeFormData) => void;
}

function NoticeModal({ mode, notice, onClose, onSubmit }: NoticeModalProps) {
  const [title, setTitle] = useState(notice?.title || '');
  const [content, setContent] = useState(notice?.content || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {mode === 'create' ? '공지사항 작성' : '공지사항 수정'}
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              제목
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              내용
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {mode === 'create' ? '작성' : '수정'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 