import { useNavigate } from 'react-router-dom';
import { createProposal } from '../../api/proposal/create.proposal';
import { useAuthStore } from '../../stores/auth/auth.store';
import ProposalCard from '../proposal-card/ProposalCard';
import { useForm } from 'react-hook-form';

const CreateCard = () => {

  const navigate = useNavigate();
  const sender = useAuthStore(state => state.sender);

  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (!data.question) { data.question = '¿Tendrías una cita conmigo?'; }
    await createProposal(data);
    return navigate('/priv/table');
  };


  return (
    <div className="flex flex-col justify-center items-center w-full lg:flex-row">

      <div className="grid w-fit h-fit card bg-base-300 rounded-box place-items-center gap-2 p-8">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-4' >
          <h4 className='text-left w-full'>Formulario:</h4>
          <input
            {...register('name')}
            maxLength={25}
            type="text"
            placeholder="Su nombre (max: 25 caractéres)"
            className="input w-full max-w-xs h-30"
            required
          />
          <textarea
            {...register('message')}
            maxLength={800}
            placeholder="El mensaje (max: 800 caractéres)"
            className="textarea w-full max-w-xs max-h-40"
            required
          />
          <input
            {...register('question')}
            maxLength={90}
            type="text"
            placeholder="¿Tendrías una cita conmigo? (max: 90 caractéres)"
            className="input w-full max-w-xs h-30"
          />
          <button type='submit' className="btn btn-primary btn-wide">Crear tarjeta</button>
        </form>
      </div>

      <div className="divider lg:divider-horizontal"></div>

      <div data-theme='synthwave' className="grid flex-1 card rounded-box place-items-center px-5 pb-5 pt-28 bg-cover bg-center" style={{ backgroundImage: `url(/bg_date.avif)` }}>
        <ProposalCard
          name={watch('name') || 'Su nombre'}
          myName={sender?.name}
          message={watch('message') || 'El mensaje'}
          question={watch('question') || '¿Tendrías una cita conmigo?'}
        />
      </div>

    </div>
  );
};

export default CreateCard;
