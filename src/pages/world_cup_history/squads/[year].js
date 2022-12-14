import squadsData from '../../../world_cup_history_data/teams';
import resultsData from '../../../world_cup_history_data/results';
import { useRouter } from 'next/router';
import Navigation from 'pages/components/Navigation';

const Year = ({ squadsList, winnersData }) => {
	const router = useRouter();
	const year = router.query.year;
	const contenders = winnersData.filter((currentYear) => currentYear.year == year)[0];
	const yearSquads = squadsList.filter((player) => {
		return player.year == year;
	});

	const renderPlayer = (list, property) => {
		return list
			.filter((squad) => squad.squad == contenders[property])
			.map((player) => (
				<div key={player.player} className='col-sm-6'>
					<div className='text-center playerSquad__player--name'>
						<a href={`https://en.wikipedia.org${player.player_url}`}>
							<h5 className='text-warning'>{player.player}</h5>
						</a>
					</div>
					<div>
						<ul className='yearSquad__playerDetails--ul'>
							<li>
								<p>Position: {player.pos}.</p>
							</li>
							<li>
								<p>Date of Birth: {player.date_of_birth}.</p>
							</li>
							<li>
								<p>
									Club: {player.club}, {player.club_country}.
								</p>
							</li>
							<li>
								<a className='text-warning' href={`https://en.wikipedia.org${player.player_url}`}>
									Biography
								</a>
							</li>
						</ul>
					</div>
				</div>
			));
	};

	return (
		<>
			<Navigation />
			<section>
				<div className='container-xxl'>
					<div className='row playerSquad__content--container'>
						<div className='text-center'>
							<h1>{year}</h1>
						</div>
						<div className='col-md-6'>
							<div className='text-center'>
								<h2>{contenders.winner}</h2>
							</div>
							<div className='row yearSquad__players--container'>
								{renderPlayer(yearSquads, 'winner')}
							</div>
						</div>
						<div className='col-md-6'>
							<div className='text-center'>
								<h2>{contenders.runnerUp}</h2>
							</div>
							<div className='row yearSquad__players--container border-start'>
								{renderPlayer(yearSquads, 'runnerUp')}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Year;

export const getStaticPaths = () => {
	const paths = resultsData.map((match) => {
		return { params: { year: match.year.toString() } };
	});
	return { paths, fallback: false };
};

export const getStaticProps = ({ params }) => {
	return {
		props: {
			winnersData: resultsData,
			squadsList: squadsData,
		},
	};
};
