import React from 'react';
import AnimatedImg from '../img/AnimatedImg';
import ButtonNo from '../buttons/ButtonNo';
import ButtonYes from '../buttons/ButtonYes';

interface Props {
  name: string;
  myName: string;
  message: string;
  question: string;
  img?: string;
  id?: string;
}


const ProposalCard: React.FC<Props> = ({ name, myName, message, img = '/proposal_pic.webp', question, id = '' }) => {

  return (

    <div data-theme='synthwave' className="card glass max-w-3xl">
      <AnimatedImg img={img} />
      <div className="card-body">
        <h2 className="text-3xl ml-3 line-clamp-1 card-title overflow-hidden text-overflow-ellipsis dancing-script break-words break-all">
          {name && `${name.charAt(0).toLocaleUpperCase()}${name.slice(1)},`}
        </h2>
        <p className='w-full break-words break-all p-1 line-clamp-[8] hover:overflow-auto active:overflow-auto text-2xl caveat text-balance'>
          {message}
        </p>
        <p className='text-2xl italic text-neutral caveat text-right'>
          ~ {myName}
        </p>
        <p className='break-words break-all mt-3 text-xl caveat'>
          {question}
        </p>
        <div className='mt-6 flex gap-4'>
          <ButtonYes id={id} />
          <ButtonNo id={id} />
        </div>
      </div>
    </div>

  );
};

export default ProposalCard;