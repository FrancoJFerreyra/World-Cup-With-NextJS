import { useRouter } from 'next/router';
import { useState } from 'react';
import resultsData from '../../../world_cup_history_data/results';
import { motion } from 'framer-motion';
import Navigation from 'pages/components/Navigation';
import { playerPageVariant, playerCardVariant } from 'framerVariants/playerVariants';

const Player = ({ matchesResults }) => {
	const [showDescription, setShowDescription] = useState(false);

	const router = useRouter();
	const name = router.query.player;
	const player = matchesResults.reduce((acc, current) => {
		const scorer = current.topGoalScorer.reduce((accScorer, currentScorer) => {
			if (currentScorer.name.toLowerCase().split(' ').join('') == name.split('_').join('')) {
				return { year: current.year, ...currentScorer };
			}
			return { ...accScorer };
		}, {});
		return { ...acc, ...scorer };
	}, {});

	return (
		<>
			<Navigation />
			<motion.div
				initial='hidden'
				animate='show'
				exit='exit'
				transition={{ duration: 1 }}
				variants={playerPageVariant}
				className='player__container--content'
			>
				<div className='d-flex flex-column align-items-center'>
					<motion.div
						initial='hidden'
						animate='show'
						exit='exit'
						transition={{ duration: 0.25 }}
						variants={playerCardVariant}
						whileHover={{ boxShadow: '0px 0px 32px rgb(176,150,119)' }}
						className='d-flex align-items-center flex-column player__card--container'
					>
						<div className='text-center'>
							<motion.h1
								initial={{ translateX: '-100vw', opacity: 0 }}
								animate={{ translateX: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.75, type: 'spring', stiffness: 100 }}
							>
								{player.name}
							</motion.h1>
						</div>
						<div className='d-flex gap-4 align-items-center'>
							<div>
								<a href={player.biography}>
									<img src={player.image} alt={player.name} />
								</a>
							</div>
							<div>
								<ul>
									<li>
										<p>Name: {player.name}</p>
									</li>
									<li>
										<p>From: {player.country}</p>
									</li>
									{player.nickname ? (
										<li>
											<p>Nickname: {player.nickname}</p>
										</li>
									) : null}
									<li>
										<p>Date of birth: {player.dateOfBirth}</p>
									</li>
									{player.dateOfDeath ? (
										<li>
											<p>Date of death: {player.dateOfDeath}</p>
										</li>
									) : null}
									<li>
										<p>Goals: {player.numberOfGoals}</p>
									</li>
									<li>
										<p>Top scorer in {player.year} worldcup</p>
									</li>
								</ul>
							</div>
						</div>
						<div className='player__description--container'>
							{showDescription ? (
								<motion.p
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5 }}
								>
									{player.description}
								</motion.p>
							) : null}
							<div className='text-center'>
								<span className='btn' onClick={() => setShowDescription(!showDescription)}>
									{showDescription ? (
										<motion.i
											animate={{ rotateZ: 180 }}
											transition={{ duration: 0.5 }}
											className='fa-solid fa-sort-down'
										/>
									) : (
										<motion.i className='fa-solid fa-sort-down' />
									)}
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default Player;

export const getServerSideProps = () => {
	return {
		props: {
			matchesResults: resultsData,
		},
	};
};
