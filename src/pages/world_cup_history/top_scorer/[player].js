import { useRouter } from 'next/router';
import resultsData from '../../../world_cup_history_data/results';
import React from 'react';
import Navigation from 'pages/components/Navigation';

const Player = ({ matchesResults }) => {
  const router = useRouter();
  const name = router.query.player;
  const player = matchesResults.reduce((acc, current) => {
    const scorer = current.topGoalScorer.reduce((accScorer, currentScorer) => {
      if (currentScorer.name.toLowerCase().split(' ').join('') == name.split('_').join('')) {
        return { year: current.year, ...currentScorer };
      }
      return { ...accScorer };
    }, {});
    return { ...acc, ...scorer };
  }, {});

  return (
    <>
      <style jsx global>
        {`
          body {
            height: 100%;
            background-image: url(https://wallpapercave.com/wp/wp2521997.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
      <Navigation />
      <div className='container-xxl player__container--content'>
        <div className='d-flex flex-column align-items-center'>
          <div className='d-flex align-items-center flex-column player__card--container'>
            <div className='text-center'>
              <h1>{player.name}</h1>
            </div>
            <div>
              <a href={player.biography}>
                <img src={player.image} alt={player.name} />
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
                {player.nickname ? (
                  <li>
                    <p>Apodo: {player.nickname}</p>
                  </li>
                ) : null}
                <li>
                  <p>Fecha de nacimiento: {player.dateOfBirth}</p>
                </li>
                {player.dateOfDeath ? (
                  <li>
                    <p>Fallecimiento: {player.dateOfDeath}</p>
                  </li>
                ) : null}
                <li>
                  <p>Goles: {player.numberOfGoals}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;

export const getServerSideProps = () => {
  return {
    props: {
      matchesResults: resultsData,
    },
  };
};
