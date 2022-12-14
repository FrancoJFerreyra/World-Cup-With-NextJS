import { newsApi } from '../axiosRequest';
import { motion } from 'framer-motion';
import axios from 'axios';
import Link from 'next/link';
import Fixture from './components/Fixture';
import News from './components/News';
import Navigation from './components/Navigation';
import { indexVariants } from 'framerVariants/pagesVariants';

const Home = ({ fixtureList, newsList }) => {
	const upcomingMatches = fixtureList.filter((match) => new Date(match.local_date) > new Date());
	const sortedFixture = upcomingMatches
		.sort((a, b) => new Date(a.local_date) - new Date(b.local_date))
		.slice(0, 4);
	return (
		<>
			<Navigation />
			<motion.div
				initial='pageInitial'
				animate='pageAnimate'
				transition={{ duration: 0.75, ease: 'easeOut' }}
				exit='pageExit'
				variants={indexVariants}
			>
				<div className='text-center home__title--container'>
					<h1>Only World Cup!</h1>
				</div>
				<section className='home__fixtureComponent--container'>
					<div className='container-xxl'>
						{sortedFixture.length > 0 ? (
							<>
								<div className='text-center'>
									<h2>Next matches</h2>
								</div>
								<Fixture fixture={sortedFixture} />
							</>
						) : null}
						<div className='text-center'>
							<Link href={'/qatar'} className='btn btn-warning border border-3'>
								See fixture
							</Link>
						</div>
					</div>
				</section>
				<section>
					<div className='container-xxl'>
						<News newsList={newsList} />
					</div>
				</section>
			</motion.div>
		</>
	);
};
export default Home;

export const getServerSideProps = async ({ req, res }) => {
	const newsRes = async () => {
		try {
			const { data } = await newsApi.get('/everything', {
				params: {
					q: 'fifaworldcup',
					from: '2022-11-14',
					to: new Date(),
					language: 'en',
				},
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const { articles } = await newsRes();

	const matches = async () => {
		try {
			const { data } = await axios.post('http://localhost:3000/api/qatar/token', {
				path: '/match',
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
	return {
		props: {
			fixtureList: await matches(),
			newsList: articles.slice(0, 10),
		},
	};
};
