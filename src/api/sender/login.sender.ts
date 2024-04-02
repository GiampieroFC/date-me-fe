import { Method, fetcher } from '../../helpers/fetcher';

export interface LoginSenderProps {
  email: string;
  password: string;
}

export const loginSender = async (data: LoginSenderProps) => {
  const options = {
    path: '/sender/auth/login',
    method: Method.POST,
    data
  };
  const response = await fetcher(options);
  return response;
};
