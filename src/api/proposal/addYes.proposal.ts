import { Method, fetcher } from '../../helpers/fetcher';

export const addYes = async (id: string) => {
    const options = {
        path: `/proposal/${id}/yes`,
        method: Method.PUT
    };

    const response = fetcher(options);
    return response;
};