import { useState } from 'react';
import Navigation from './components/Navigation';
import dataGroups from '../testData/groups';
import { motion } from 'framer-motion';
import axios from 'axios';
import Fixture from './components/Fixture';
import GroupsTable from './components/GroupsTable';
import { rightToLeftVariants } from 'framerVariants/pagesVariants';

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
				variants={rightToLeftVariants}
			>
				<div className='container-xxl'>
					<section className='text-center qatar__title--container'>
						<h1>Groups</h1>
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
								whileTap={{ scale: 0.8 }}
								onClick={() => setShowMore(!showMore)}
								className='btn btn-primary border border-3'
							>
								{showMore ? 'See less' : 'See more'}
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
	const dataMatches = await axios.post('http://localhost:3000/api/qatar/token', {
		path: '/match',
	});
	res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
	return {
		props: {
			groups: dataGroups.data,
			fixtureList: dataMatches.data,
		},
	};
};
