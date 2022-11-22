import React from 'react';
import Navigation from './components/Navigation';
import dataGroups from '../testData/groups';
import axios from 'axios';
import Fixture from './components/Fixture';
import dataMatches from '../testData/matches';

const Qatar = ({ fixtureList, groups }) => {
	const sorted = fixtureList.sort((a, b) => new Date(a.local_date) - new Date(b.local_date));
	return (
		<>
			<Navigation />
			<div className='container-xxl'>
				<Fixture fixture={sorted} groups={groups} />
			</div>
		</>
	);
};

export default Qatar;

export const getServerSideProps = async ({ req, res }) => {
	// const dataMatches = await axios.post('http://localhost:3000/api/qatar/token', {
	// 	path: '/match',
	// });
	// const dataGroups = await axios.post('http://localhost:3000/api/qatar/token', {
	// 	path: '/standings',
	// });
	res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
	return {
		props: {
			groups: dataGroups.data,
			fixtureList: dataMatches.data,
		},
	};
};
