import { Method, fetcher } from '../../helpers/fetcher';

export const deleteProposalById = async (id: string) => {
    const options = {
        path: `/proposal/delete/${id}`,
        method: Method.DELETE
    };

    const response = fetcher(options);
    return response;
};