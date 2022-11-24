import { containerMatchVariants } from 'framerVariants/fixtureVariants';
import { motion } from 'framer-motion';
import Matches from './Matches';

const Fixture = ({ fixture, showMore }) => {
  const matches = showMore || fixture.length === 4 ? fixture : fixture.slice(0, 8);

  return (
    <div>
      <motion.div
        variants={containerMatchVariants}
        initial='hidden'
        animate='show'
        exit='exit'
        className='row row-gap-4 fixture__container'>
        <div></div>
        <Matches matches={matches} />
      </motion.div>
    </div>
  );
};

export default Fixture;
