import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import {
  SendVerificationEmailRequest,
  VerifyEmailRequest,
  RegisterRequest,
  ApiResponse
} from '@/types/auth';

export const useAuth = () => {
  // 이메일 인증코드 전송
  const useSendVerificationEmail = () => {
    return useMutation<ApiResponse, Error, SendVerificationEmailRequest>({
      mutationFn: async (data) => {
        const response = await axiosInstance.post('/api/users/email/send-verification', null, {
          params: { email: data.email }
        });
        return response.data;
      },
    });
  };

  // 이메일 인증코드 확인
  const useVerifyEmail = () => {
    return useMutation<ApiResponse, Error, VerifyEmailRequest>({
      mutationFn: async (data) => {
        const response = await axiosInstance.post('/api/users/email/verify', data);
        return response.data;
      },
    });
  };

  // 회원가입
  const useRegister = () => {
    return useMutation<ApiResponse, Error, RegisterRequest>({
      mutationFn: async (data) => {
        const response = await axiosInstance.post('/api/users/register', data);
        return response.data;
      },
    });
  };

  return {
    useSendVerificationEmail,
    useVerifyEmail,
    useRegister,
  };
};

export default useAuth; 