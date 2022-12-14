import React from 'react';
import { motion } from 'framer-motion';
import useFixture from 'hooks/useFixture';
import { childMatchVariants } from 'framerVariants/fixtureVariants';

const MatchCard = ({ match = null }) => {
	const { checkFinished } = useFixture();

	const printScorers = (scorers) =>
		scorers !== 'null' && scorers !== '' ? (
			<div>
				{console.log(scorers)}
				<ol>
					{scorers.split(',').map((player, i) => (
						<li key={i} className='fixture__match--scorers'>
							<p>{player}</p>
						</li>
					))}
				</ol>
			</div>
		) : null;

	return (
		<>
			{match ? (
				<motion.div variants={childMatchVariants} key={match._id} className='col-sm-6 col-lg-3'>
					<div className='rounded border-bottom border-top fixture__container--match'>
						<div className='fixture__match d-flex flex-column'>
							<div className='d-flex justify-content-between align-items-start'>
								<div className='d-flex flex-column gap-1'>
									<div className='d-flex align-items-center gap-1'>
										<img
											className='fixture__country--img border'
											src={match.home_flag}
											alt={match.home_team_en}
										/>
										<h5>{match.home_team_en}</h5>
									</div>
									{printScorers(match.home_scorers[0])}
								</div>
								<div>
									<p>{match.home_score}</p>
								</div>
							</div>
							<p className='text-center'>VS</p>
							<div className='d-flex justify-content-between align-items-start'>
								<div className='d-flex flex-column gap-1'>
									<div className='d-flex align-items-center gap-1'>
										<img
											className='fixture__country--img border'
											src={match.away_flag}
											alt={match.away_team_en}
										/>
										<h5>{match.away_team_en}</h5>
									</div>
									{printScorers(match.away_scorers[0])}
								</div>
								<div>
									<p>{match.away_score}</p>
								</div>
							</div>
							<div>
								{match.finished === 'TRUE' ? (
									<p className='text-success'>Finalizado</p>
								) : (
									checkFinished(match.local_date)
								)}
							</div>
						</div>
					</div>
				</motion.div>
			) : null}
		</>
	);
};

export default MatchCard;
