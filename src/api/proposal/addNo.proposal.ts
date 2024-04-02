import { Method, fetcher } from '../../helpers/fetcher';

export const addNo = async (id: string) => {
    const options = {
        path: `/proposal/${id}/no`,
        method: Method.PUT
    };

    const response = fetcher(options);
    return response;
};