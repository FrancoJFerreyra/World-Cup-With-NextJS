import { motion } from 'framer-motion';
import { currentMatchVariants } from 'framerVariants/fixtureVariants';

const useFixture = () => {
  const actualLocalDate = new Date().toLocaleString();
  const getArgentinaDate = (stringDate) => {
    const toDate = new Date(stringDate);
    return `${toDate.getMonth() + 1}/${toDate.getDate()}/${toDate.getFullYear()} ${
      toDate.getHours() - 6
    }:00`;
  };

  const checkCurrent = (matchDay, toDate) => {
    //CORREGIR NO FUNCIONA
    if (
      actualLocalDate === matchDay &&
      (new Date(actualLocalDate).getHours() == toDate.getHours() ||
        new Date(actualLocalDate).getHours() > toDate.getHours()) &&
      new Date(actualLocalDate).getMinutes() > toDate.getMinutes()
    ) {
      return true;
    }
    return false;
  };

  const checkFinished = (date) => {
    const argentinaDate = getArgentinaDate(date);
    const toDate = new Date(argentinaDate);
    const matchDay = argentinaDate.split(' ')[0];
    // if (new Date(actualLocalDate).getTime() > toDate.getTime()) {
    //   console.log('jugado');
    //   return <p className='text-success'>Finalizado</p>;
    // }
    console.log(checkCurrent(matchDay, toDate));
    if (checkCurrent(matchDay, toDate)) {
      return (
        <motion.p
          animate='animate'
          transition='transition'
          variants={currentMatchVariants}
          className='text-success'>
          Jugando
        </motion.p>
      );
    }
    return <p className='text-light'>{argentinaDate}</p>;
  };

  const currentMatch = (match) => {
    const argentinaDate = getArgentinaDate(match.local_date);
    const toDate = new Date(argentinaDate);
    const matchDay = argentinaDate.split(' ')[0];
    if (checkCurrent(matchDay, toDate)) {
      return match;
    }
    return;
  };
  return {
    checkCurrent,
    checkFinished,
  };
};

export default useFixture;
