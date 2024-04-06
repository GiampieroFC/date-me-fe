
import { motion } from 'framer-motion';
import ProposalCard from '../components/proposal-card/ProposalCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProposalById } from '../api/proposal/getById.proposal';
import { ProposalEntity } from '../entities/proposal.entities';
import bgDate from "/bg_date.avif";
import { useRefresh } from '../stores/refresh/refresh.store';
// import { useAnimatedImage } from '../stores/animated-image/animatedImage.store';

const RecipientPage = () => {

  const { id } = useParams();

  const [proposal, setProposal] = useState<ProposalEntity>();
  // const animate = useAnimatedImage(state => state.animate);
  const changed = useRefresh(state => state.changed);


  useEffect(() => {
    (async () => {
      const response = await getProposalById(id!);
      setProposal(response);
      console.log(response);
    })();
  }, [changed]);

  if (proposal?.isAnswered) {
    return (
      <div
        className="bg-cover bg-center min-h-screen w-screen overflow-x-hidden"
        style={{ backgroundImage: `url(${bgDate})` }}
      >
        <div className='flex justify-center items-center min-h-screen px-8 py-24 sm:px-32'>
          <div data-theme='synthwave' className='flex justify-center items-end px-8 py-24 sm:px-32 bg-transparent'>
            <h2 className="text-3xl ml-3 card-title overflow-y-hidden text-overflow-ellipsis dancing-script break-words p-1">
              Ya contestaste a esta propuesta:
            </h2>
            <span className="badge badge-secondary badge-lg m-2 text-nowrap">
              Sí: {proposal?.answer?.yes}
            </span>
            <span className="badge badge-primary badge-lg m-2 text-nowrap">
              No: {proposal?.answer?.no}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-cover bg-center min-h-screen w-screen overflow-x-hidden"
      style={{ backgroundImage: `url(${bgDate})` }}
    >

      <motion.div
        className='flex justify-center items-center min-h-screen px-8 py-24 sm:px-32'

        animate={{
          y: [400, 0],
          opacity: [0, 1],
          scale: [0, 1]
        }}

        transition={{
          delay: .5,
          duration: .9,
          type: 'spring'
        }}
      >
        <ProposalCard
          message={proposal?.message || ''}
          myName={proposal?.sender.name || ''}
          name={proposal?.recipient.name || ''}
          question={proposal?.question || ''}
          id={id!}
        />

      </motion.div>

    </div>
  );
};

export default RecipientPage;
