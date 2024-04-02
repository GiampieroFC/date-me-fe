import { ProposalEntity } from '../../entities/proposal.entities';
import { fetcher } from '../../helpers/fetcher';
import { ProposalMapper } from '../../mappers/proposal.mapper';

export const getProposalById = async (id: string): Promise<ProposalEntity> => {
    const options = {
        path: `/proposal/${id}`,
    };

    const response: Record<string, any> = await fetcher(options);

    return ProposalMapper.fromJson(response?.proposal);
};