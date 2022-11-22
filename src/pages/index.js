import { qatarApi, newsApi } from '../axiosRequest';
import axios from 'axios';
import Link from 'next/link';
// import dataMatches from '../testData/matches';
import Fixture from './components/Fixture';
import News from './components/News';
import Navigation from './components/Navigation';

const Home = ({ fixtureList, newsList }) => {
	const upcomingMatches = fixtureList.filter((match) => new Date(match.local_date) > new Date());
	const sortedFixture = upcomingMatches
		.sort((a, b) => new Date(a.local_date) - new Date(b.local_date))
		.slice(0, 4);
	return (
		<>
			<Navigation />
			<div className='container-xxl'>
				<div className='text-center'>
					<h1>Solo Fútbol!</h1>
				</div>
				<section className='home__fixtureComponent--container'>
					<Fixture fixture={sortedFixture} />
					<div className='text-center'>
						<Link href={'/qatar'} className='btn btn-success'>
							Ver fixture
						</Link>
					</div>
				</section>
				<section>
					<News newsList={newsList} />
				</section>
			</div>
		</>
	);
};
export default Home;

export const getServerSideProps = async ({ req, res }) => {
	const newsRes = await newsApi.get('/everything', {
		params: {
			q: 'fifaworldcup',
			from: '2022-11-14',
			to: new Date(),
			language: 'es',
		},
	});
	const matches = await axios.post('http://localhost:3000/api/qatar/token', {
		path: '/match',
	});
	res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
	return {
		props: {
			// fixtureList: dataMatches.data,
			fixtureList: matches.data,
			newsList: newsRes.data.articles.slice(0, 10),
		},
	};
};
