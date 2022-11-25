import { motion } from 'framer-motion';
import { currentMatchVariants } from 'framerVariants/fixtureVariants';

const useFixture = () => {
  const actualLocalDate = new Date().toLocaleDateString();
  const getArgentinaDate = (stringDate) => {
    const toDate = new Date(stringDate);
    return `${toDate.getMonth() + 1}/${toDate.getDate()}/${toDate.getFullYear()} ${
      toDate.getHours() - 6
    }:00`;
  };

  const checkCurrent = (matchDay, toDate) => {
    if (
      actualLocalDate === matchDay &&
      new Date().getHours() >= toDate.getHours() &&
      new Date().getHours() < toDate.getHours() + 2
    ) {
      return true;
    }
    return false;
  };

  const checkFinished = (date) => {
    const argentinaDate = getArgentinaDate(date);
    const toDate = new Date(argentinaDate);
    const matchDay = argentinaDate.split(' ')[0];
    if (checkCurrent(matchDay, toDate)) {
      return (
        <motion.p animate='animateV' variants={currentMatchVariants} className='text-success'>
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
    return false;
  };
  return {
    checkCurrent,
    checkFinished,
    currentMatch,
  };
};

export default useFixture;
