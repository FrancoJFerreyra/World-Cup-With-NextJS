import React from 'react';

const TeamGroup = ({ team = null }) => {
	return <div>{team ? team.map((player) => <p key={player.player}>{player.pos}</p>) : null}</div>;
};

export default TeamGroup;
