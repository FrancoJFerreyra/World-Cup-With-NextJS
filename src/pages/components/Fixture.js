import { useState } from 'react';
import { motion } from 'framer-motion';

const Fixture = ({ fixture, showMore, groups }) => {
  const getArgentinaDate = (date) => {
    const toDate = new Date(date);
    return `${toDate.getMonth()}-${toDate.getDate()}-${toDate.getFullYear()} ${
      toDate.getHours() - 6
    }:00`;
  };

  const matches =
    showMore || fixture.length === 4 ? fixture : fixture.slice(0, 8);
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };
  const childVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        exit='exit'
        className='row row-gap-4 fixture__container'
      >
        {matches.map((match, i) => (
          <motion.div
            variants={childVariants}
            key={i}
            className='col-sm-4 col-lg-3'
          >
            <div className='rounded border-bottom border-top fixture__container--match'>
              <div className='fixture__match d-flex flex-column'>
                {groups ? (
                  ''
                ) : (
                  <div className='text-center'>
                    <h4>Grupo {match.group}</h4>
                  </div>
                )}
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column gap-1'>
                    <div className='d-flex align-items-center gap-1'>
                      <img
                        className='fixture__country--img border'
                        src={match.home_flag}
                        alt={match.home_team_en}
                      />
                      <h5>{match.home_team_en}</h5>
                    </div>
                    {match.home_scorers[0] !== 'null' &&
                    match.home_scorers[0] !== '' ? (
                      <div>
                        <ol>
                          {match.home_scorers[0].split(',').map((player, i) => (
                            <li key={i} className='fixture__match--scorers'>
                              <p>{player}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <p>{match.home_score}</p>
                  </div>
                </div>
                <p className='text-center'>VS</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column gap-1'>
                    <div className='d-flex align-items-center gap-1'>
                      <img
                        className='fixture__country--img border'
                        src={match.away_flag}
                        alt={match.away_team_en}
                      />
                      <h5>{match.away_team_en}</h5>
                    </div>
                    {match.away_scorers[0] !== 'null' ? (
                      <div>
                        <ol>
                          {match.away_scorers[0].split(',').map((player, i) => (
                            <li key={i} className='fixture__match--scorers'>
                              <p key={i}>{player}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div>
                    <p>{match.away_score}</p>
                  </div>
                  {console.log(typeof match.local_date)}
                </div>
                <div>
                  {match.finished === 'TRUE' ||
                  new Date().getTime() >
                    new Date(match.local_date).getTime() ? (
                    <p className='text-success'>Finalizado</p>
                  ) : (
                    <p className='text-light'>
                      {getArgentinaDate(match.local_date)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Fixture;
