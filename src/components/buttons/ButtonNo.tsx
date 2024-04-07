import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCloseLargeLine } from '@remixicon/react';
import { addNo } from '../../api/proposal/addNo.proposal';
import hack from '/hack.gif';


interface Props {
  id?: string;
}

const getRandom = (limit: number) => {
  const max = (2 * limit) + 1;
  return Math.floor(Math.random() * max) - limit;
};

// const plus1 = () => {

// }

const ButtonNo = ({ id }: Props) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [nos, setNos] = useState(0);

  const changePosition = () => {
    setPosition({
      x: getRandom(100),
      y: getRandom(180),
    });
  };

  const fullScreen = async () => {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(${hack})`;
    div.style.backgroundSize = 'contain';
    div.style.backgroundPosition = 'center';
    div.style.backgroundRepeat = 'no-repeat';
    document.body.appendChild(div);

    if (div.requestFullscreen) {
      await div.requestFullscreen();
    } else {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  };

  const sendNo = async () => {
    console.log({ answer: 'No' });
    if (!id) {
      return;
    }
    switch (nos) {
      case 0:
        await addNo(id);
        break;
      case 1:
        await addNo(id);
        fullScreen();
        break;
      case 2:
        await addNo(id);
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        break;
      default:
        await addNo(id);
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        break;
    }
    setNos(prev => prev + 1);
  };

  return (
    <motion.button
      animate={{
        x: position.x,
        y: position.y,
      }}
      className='btn tracking-widest select-none btn-neutral'
      onMouseOver={changePosition}
      onTapStart={changePosition}
      whileTap={{ opacity: 0 }}
      onClick={sendNo}
    >
      No
      <RiCloseLargeLine />
    </motion.button>
  );
};

export default ButtonNo;
