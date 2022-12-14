import React from 'react';
import MatchCard from './MatchCard';

const Matches = ({ matches = null }) => {
	return (
		<>{matches ? matches.map((match) => <MatchCard key={match._id} match={match} />) : null}</>
	);
};

export default Matches;
