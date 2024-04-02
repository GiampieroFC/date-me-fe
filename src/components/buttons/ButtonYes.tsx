import { RiHeartsLine } from "@remixicon/react";
import { FC } from 'react';
import { addYes } from '../../api/proposal/addYes.proposal';
import { useRefresh } from '../../stores/refresh/refresh.store';
import { sleep } from '../../helpers/sleep';
import { useAnimatedImage } from '../../stores/animated-image/animatedImage.store';

interface ButtonYesProps {
  id: string;
}

const ButtonYes: FC<ButtonYesProps> = ({ id }) => {

  const refresh = useRefresh(state => state.refresh);
  const setAnimate = useAnimatedImage(state => state.setAnimate);


  const sendYes = async () => {
    addYes(id);
    setAnimate('big');
    await sleep(1500);
    refresh();
  };

  return (
    <button
      onClick={sendYes}
      className='btn tracking-widest select-none btn-error'
    >
      Sí
      <RiHeartsLine />
    </button>
  );
};

export default ButtonYes;
