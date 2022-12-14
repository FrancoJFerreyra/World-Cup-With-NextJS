import Navigation from 'pages/components/Navigation';
import resultsData from '../../world_cup_history_data/results';
import HistoryResult from 'pages/components/HistoryResult';
import { rightToLeftVariants } from 'framerVariants/pagesVariants';
import { motion } from 'framer-motion';

const All = () => {
	return (
		<>
			<Navigation />
			<motion.section
				initial='pageInitial'
				animate='pageAnimate'
				transition={{ duration: 0.75, ease: 'easeOut' }}
				exit='pageExit'
				variants={rightToLeftVariants}
			>
				<div className='container-xxl'>
					<div className='text-center finals__title--container'>
						<h1>World Cup Finals</h1>
					</div>
					<div className='row finals__matches--container'>
						{resultsData.map((final) => (
							<HistoryResult key={final.year} final={final} />
						))}
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default All;
