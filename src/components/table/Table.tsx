import { useEffect, useState } from 'react';
import Row from './row/Row';
import { getAllProposal } from '../../api/proposal/getAll.proposal';
import { ProposalEntity } from '../../entities/proposal.entities';
import { useRefresh } from '../../stores/refresh/refresh.store';

const Table = () => {

  const [proposals, setProposals] = useState<ProposalEntity[]>([]);
  const state = useRefresh(state => state.changed);

  useEffect(() => {
    (async () => {
      const response = await getAllProposal();
      setProposals(response);
    })();
  }, [state]);



  return (

    <div className="w-screen max-w-4xl overflow-x-auto py-4">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Pregunta</th>
            <th>¿Contestó?</th>
            <th>Respuestas</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>

          {
            proposals?.map(p => (
              <Row
                key={p?.id}
                answer={{ yes: p?.answer.yes, no: p?.answer.no }}
                isAnswered={p?.isAnswered}
                name={p?.recipient.name}
                question={p?.question}
                id={p?.id}
              />
            ))
          }

        </tbody>
        <tfoot>
          <tr>
            <th>Nombre</th>
            <th>Pregunta</th>
            <th>¿Contestó?</th>
            <th>Respuestas</th>
            {/* <th></th> */}
          </tr>
        </tfoot>

      </table>
    </div>

  );
};

export default Table;
