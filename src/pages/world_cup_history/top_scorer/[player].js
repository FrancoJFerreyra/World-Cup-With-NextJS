import { useRouter } from 'next/router';
import resultsData from '../../../world_cup_history_data/results';
import teamGroups from '../../../world_cup_history_data/teams';
import TeamGroup from 'pages/components/TeamGroup';
import React from 'react';
import Navigation from 'pages/components/Navigation';

const Player = () => {
  const router = useRouter();
  console.log(router.query);
  const name = router.query.player;
  const player = resultsData.reduce((acc, current) => {
    return current.topGoalScorer.reduce((accScorer, currentScorer) => {
      if (currentScorer.name.toLowerCase().split(' ').join('') == name.split('_').join('')) {
        return { year: current.year, ...currentScorer };
      }
      return acc;
    }, {});
  }, {});

  const team = teamGroups.filter(
    (team) => team.year == player.year && team.squad == player.country
  );
  return (
    <>
      <Navigation />
      <div>
        <div className='text-center'>
          <h1>{player.name}</h1>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <div>
            <a href={player.biography}>
              <img src={player.image} alt='Guillermo Stábile' />
            </a>
          </div>
          <div>
            <ul>
              <li>
                <p>Nombre: {player.name}</p>
              </li>
              <li>
                <p>Origen: {player.country}</p>
              </li>
              <li>
                <p>Apodo: {player.nickname}</p>
              </li>
              <li>
                <p>Fecha de nacimiento: {player.dateOfBirth}</p>
              </li>
              {player.dateOfDeath ? (
                <li>
                  <p>Fallecimiento: {player.dateOfDeath}</p>
                </li>
              ) : null}
              <li>
                <p>
                  Goles en el mundial de {player.year}: {player.numberOfGoals}
                </p>
              </li>
              <li>
                <p>
                  Biografia:{' '}
                  <span>
                    <a href={player.biography}>{player.biography}</a>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h2>Formación con {player.country}</h2>
          </div>
          <TeamGroup team={team} />
        </div>
      </div>
    </>
  );
};

export default Player;
