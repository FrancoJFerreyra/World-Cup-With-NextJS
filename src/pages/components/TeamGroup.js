import React from 'react';

const TeamGroup = ({ team }) => {
  return (
    <div>
      {team.map((player) => (
        <p key={player.player}>{player.pos}</p>
      ))}
    </div>
  );
};

export default TeamGroup;
