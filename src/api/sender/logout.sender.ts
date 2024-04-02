import { fetcher } from '../../helpers/fetcher';

export const logoutSender = async () => {
  const options = {
    path: '/sender/auth/logout'
  };
  const response = await fetcher(options);
  return response;
};
