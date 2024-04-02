import { Method, fetcher } from '../../helpers/fetcher';

interface createProposalProps {
    name: string,
    message: string,
    question: string;
}

export const createProposal = async (data: createProposalProps) => {
    const options = {
        path: '/proposal/create',
        method: Method.POST,
        data
    };

    const response = fetcher(options);
    return response;
};