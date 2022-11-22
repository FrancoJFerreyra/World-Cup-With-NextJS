import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const GroupsTable = ({ groups }) => {
	const [selectedTab, setSelectedTab] = useState(groups[0]);
	return (
		<>
			<div>
				<h2>Grupos</h2>
			</div>
			<div className='container-md'>
				<div className='row groups__container'>
					{groups.map((group) => (
						<div key={group._id} className='col-md-4 col-lg-3'>
							<div>
								<h4>{group.group}</h4>
							</div>
							<div className='d-flex flex-column gap-2'>
								{group.teams.map((team) => (
									<div key={team.team_id} className='d-flex align-items-center gap-1'>
										<img src={team.flag} className='border fixture__country--img' />
										<h5>{team.name_en}</h5>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
		// <div>
		// 	<nav>
		// 		<ul>
		// 			{groups.map((group) => (
		// 				<li
		// 					key={group._id}
		// 					className={group._id === selectedTab._id ? 'selected' : ''}
		// 					onClick={() => setSelectedTab(group)}
		// 				>
		// 					{group.group}
		// 					{group._id === selectedTab._id ? (
		// 						<motion.div className='underline' layoutId='underline' />
		// 					) : null}
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</nav>
		// 	<main>
		// 		<AnimatePresence>
		// 			<motion.div
		// 				key={selectedTab._id ? selectedTab._id : 'empty'}
		// 				initial={{ y: 10, opacity: 0 }}
		// 				animate={{ y: 0, opacity: 1 }}
		// 				exit={{ y: -10, opacity: 0 }}
		// 				transition={{ duration: 0.9 }}
		// 			>
		// 				{selectedTab
		// 					? selectedTab.teams.map((team) => (
		// 							<div key={team.team_id} className='d-flex align-items-center gap-1'>
		// 								<img src={team.flag} className='border fixture__country--img' />
		// 								<h5>{team.name_en}</h5>
		// 							</div>
		// 					  ))
		// 					: ''}
		// 			</motion.div>
		// 		</AnimatePresence>
		// 	</main>
		// </div>
	);
};

export default GroupsTable;
