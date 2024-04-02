import { ProposalEntity } from '../entities/proposal.entities';

export class ProposalMapper {

    static fromJson = (json: Record<string, any>): ProposalEntity => {

        const { answer, _id, sender, recipient, isAnswered, message, question, createdAt, updatedAt } = json;

        if (!answer) throw Error('Missing answer');
        if (!_id) throw Error('Missing _id');
        if (!sender) throw Error('Missing sender');
        if (!recipient) throw Error('Missing recipient');
        if (isAnswered instanceof Boolean) throw Error('Missing isAnswered');
        if (!message) throw Error('Missing message');
        if (!question) throw Error('Missing question');
        if (!createdAt) throw Error('Missing createdAt');
        if (!updatedAt) throw Error('Missing updatedAt');

        return new ProposalEntity(
            answer,
            _id,
            sender,
            recipient,
            isAnswered,
            message,
            question,
            createdAt,
            updatedAt,
        );

    };

}