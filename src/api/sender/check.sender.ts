import { fetcher } from '../../helpers/fetcher';

export const checkSender = async () => {
    const options = {
        path: '/sender'
    };
    const response = await fetcher(options);
    return response;
};
