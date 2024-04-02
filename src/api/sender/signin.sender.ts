import { Method, fetcher } from '../../helpers/fetcher';

export interface SigninSenderProps {
  name: string;
  email: string;
  password: string;
}

export const signinSender = async (data: SigninSenderProps) => {
  const options = {
    path: '/sender/auth/register',
    method: Method.POST,
    data
  };
  const response = await fetcher(options);
  return response;
};
