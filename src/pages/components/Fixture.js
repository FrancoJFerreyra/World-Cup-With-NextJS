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
				className='row row-gap-4 fixture__container'
			>
				{todayMatches.map((match) =>
					currentMatch(match) ? (
						<div className='d-flex align-items-center flex-column'>
							<h3>Playing now</h3>
							<MatchCard match={match} />
						</div>
					) : null
				)}

				<Matches matches={matches} />
			</motion.div>
		</div>
	);
};

export default Fixture;
