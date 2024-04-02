import { ProposalEntity } from '../../entities/proposal.entities';
import { fetcher } from '../../helpers/fetcher';
import { ProposalMapper } from '../../mappers/proposal.mapper';

export const getAllProposal = async (): Promise<ProposalEntity[]> => {
    const options = {
        path: '/proposal',
    };
    const response = await fetcher(options);
    return response.proposals.map((p: Record<string, any>) => ProposalMapper.fromJson(p));
};