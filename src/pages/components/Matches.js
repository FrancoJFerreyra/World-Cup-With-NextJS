import React from 'react';
import MatchCard from './MatchCard';

const Matches = ({ matches }) => {
  return (
    <>
      {matches.map((match) => (
        <MatchCard key={match._id} match={match} />
      ))}
    </>
  );
};

export default Matches;
