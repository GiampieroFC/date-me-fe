export class ProposalEntity {

    constructor(
        public answer: Answer,
        public id: string,
        public sender: RecipientAndSender,
        public recipient: RecipientAndSender,
        public isAnswered: boolean,
        public message: string,
        public question: string,
        public createdAt: Date,
        public updatedAt: Date,
    ) { };

}

export interface Answer {
    yes: number;
    no: number;
}

export interface RecipientAndSender {
    _id: string;
    name: string;
}
