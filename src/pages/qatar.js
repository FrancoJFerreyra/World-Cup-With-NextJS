import { useState } from 'react';
import Navigation from './components/Navigation';
import dataGroups from '../testData/groups';
import { motion } from 'framer-motion';
import axios from 'axios';
import Fixture from './components/Fixture';
import dataMatches from '../testData/matches';
import GroupsTable from './components/GroupsTable';

const Qatar = ({ fixtureList, groups }) => {
  const [showMore, setShowMore] = useState(false);
  const sorted = fixtureList.sort((a, b) => new Date(a.local_date) - new Date(b.local_date));
  return (
    <>
      <Navigation />
      <motion.div
        initial='pageInitial'
        animate='pageAnimate'
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit='pageExit'
        variants={{
          pageInitial: {
            x: '100vw',
          },
          pageAnimate: {
            x: 0,
          },
          pageExit: {
            x: '100vw',
          },
        }}>
        <div className='container-xxl'>
          <section>
            <GroupsTable groups={groups} />
          </section>
          <section>
            <div className='text-center'>
              <h2>Fixture</h2>
            </div>
            <Fixture fixture={sorted} showMore={showMore} />
            <div className='text-center qatar__showMore--btn'>
              <motion.button
                type='button'
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0px 0px 16px rgb(176,150,119)',
                }}
                onClick={() => setShowMore(!showMore)}
                className='btn btn-primary border border-3'>
                {showMore ? 'Ver menos' : 'Ver mas'}
              </motion.button>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Qatar;

export const getServerSideProps = async ({ req, res }) => {
  // const dataMatches = await axios.post('http://localhost:3000/api/qatar/token', {
  //   path: '/match',
  // });
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
  return {
    props: {
      groups: dataGroups.data,
      fixtureList: dataMatches.data,
    },
  };
};
