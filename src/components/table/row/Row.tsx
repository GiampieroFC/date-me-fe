import { FC } from 'react';
import { Link } from 'react-router-dom';
import { deleteProposalById } from '../../../api/proposal/deleteById.proposal';
import { RiDeleteBin2Fill } from "@remixicon/react";
import { useRefresh } from '../../../stores/refresh/refresh.store';

interface Answer {
    yes: number;
    no: number;
}

interface RowProps {
    id: string,
    name: string;
    question: string;
    isAnswered: boolean;
    answer: Answer;
}

const Row: FC<RowProps> = ({ id: link, answer, isAnswered, name, question }) => {

    const refresh = useRefresh(state => state.refresh);

    const deleteProposal = async () => {
        const deleted = await deleteProposalById(link);
        console.log(deleted);
        refresh();
    };

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td className='break-words text-wrap'>
                {question}
            </td>
            <td >
                {isAnswered ? 'Sí, ya.' : 'Aún no.'}
            </td>
            <td>
                <div className='flex flex-col text-nowrap justify-center items-center gap-1'>
                    <span className="badge badge-secondary badge-lg w-full">
                        Sí: {answer.yes}
                    </span>
                    <span className="badge badge-primary badge-lg w-full">
                        No: {answer.no}
                    </span>
                </div>
            </td>
            <td className='text-center'>
                <Link
                    className='link link-accent block'
                    to={`/recipient/${link}`}
                    target="_blank" rel="noopener noreferrer"
                >
                    Share this link
                </Link>
                <button
                    className='btn btn-error btn-sm flex-nowrap mt-2'
                    onClick={deleteProposal}
                >
                    Eliminar
                    <RiDeleteBin2Fill size='16px' />
                </button>
            </td>
        </tr>
    );
};

export default Row;