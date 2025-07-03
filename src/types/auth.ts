// 이메일 인증 요청 타입
export interface SendVerificationEmailRequest {
  email: string;
}

// 이메일 인증 확인 요청 타입
export interface VerifyEmailRequest {
  email: string;
  code: string;
}

// 회원가입 요청 타입
export interface RegisterRequest {
  nickname: string;
  email: string;
  password: string;
  university: string;
  major: string;
  freeCount: number;
  recommendCount: number;
}

// API 응답 타입
export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
} 