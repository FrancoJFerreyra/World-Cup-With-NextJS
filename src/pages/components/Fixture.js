import { containerMatchVariants } from 'framerVariants/fixtureVariants';
import { motion } from 'framer-motion';
import Matches from './Matches';
import useFixture from 'hooks/useFixture';
import MatchCard from './MatchCard';

const Fixture = ({ fixture, showMore }) => {
  const { currentMatch } = useFixture();
  const matches = showMore || fixture.length === 4 ? fixture : fixture.slice(0, 8);
  const todayMatches = fixture.filter(
    (match) => new Date().toLocaleDateString() === match.local_date.split(' ')[0]
  );
  return (
    <div>
      <motion.div
        variants={containerMatchVariants}
        initial='hidden'
        animate='show'
        exit='exit'
        className='row row-gap-4 fixture__container'>
        <div className='d-flex align-items-center flex-column'>
          {todayMatches.map((match) =>
            currentMatch(match) ? (
              <>
                <h3>Jugando Ahora</h3>
                <MatchCard match={match} />
              </>
            ) : null
          )}
        </div>
        <Matches matches={matches} />
      </motion.div>
    </div>
  );
};

export default Fixture;
