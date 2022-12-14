import Link from 'next/link';
import { motion } from 'framer-motion';

const HistoryResult = ({ final }) => {
	return (
		<>
			<div className='col-md-6 d-flex align-items-center justify-content-center '>
				<h2 className='text-warning historyResult__year mb-0'>{final.year}</h2>
			</div>
			<div className='col-md-6 historyResult__match--container'>
				<div className='d-flex flex-column align-items-center'>
					<div>
						<h2>Host: {final.hostCountry}</h2>
					</div>
					<div className='d-flex flex-column historyResult__match--result'>
						<div className='d-flex justify-content-between gap-2'>
							<div className='d-flex align-items-center justify-content-center gap-2'>
								<img
									className='fixture__country--img border border-1'
									src={final.winnerFlag}
									alt={final.winner}
								/>
								<h5>{final.winner}</h5>
							</div>
							<p>{final.winnerResult}</p>
						</div>
						<div className='historyResult__match--vs'>
							<p>VS</p>
						</div>
						<div className='d-flex justify-content-between gap-2'>
							<div className='d-flex align-items-center justify-content-center gap-2'>
								<img
									className='fixture__country--img border border-1'
									src={final.runnerUpFlag}
									alt={final.runnerUp}
								/>
								<h5>{final.runnerUp}</h5>
							</div>
							<p>{final.runnerUpResult}</p>
						</div>
					</div>
				</div>
				<ul className='historyResult__matchDetails--container'>
					<li>
						<ul className='historyResult__list--scorers'>
							<span>Top scorers:</span>
							{final.topGoalScorer.map((player) => (
								<li key={player.name}>
									<Link
										className='text-warning'
										href={`/world_cup_history/top_scorer/${player.name
											.toLowerCase()
											.split(' ')
											.join('_')}`}
									>
										{player.name}
									</Link>
								</li>
							))}
						</ul>
					</li>
					<li>
						<p>Total matches: {final.numberOfMatches}</p>
					</li>
					<li>
						<p>Total attendance: {final.totalAttendance}</p>
					</li>
					<li className='text-center'>
						<p>
							<Link
								className='btn btn-primary border border-3'
								href={`/world_cup_history/squads/${final.year}`}
							>
								See squads
							</Link>
						</p>
					</li>
				</ul>
			</div>
		</>
	);
};

export default HistoryResult;
