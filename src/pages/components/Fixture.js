import GroupsTable from './GroupsTable';

const Fixture = ({ fixture, groups }) => {
	return (
		<div>
			{groups ? <GroupsTable groups={groups} /> : ''}
			<div>
				<h2>Proximos partidos</h2>
			</div>
			<div className='row row-gap-4 fixture__container'>
				{fixture.map((match, i) => (
					<div key={i} className='col-sm-4 col-lg-3'>
						<div className='border-bottom border-top fixture__container--match'>
							<div className='fixture__match d-flex flex-column'>
								{groups ? (
									''
								) : (
									<div className='text-center'>
										<h4>Grupo {match.group}</h4>
									</div>
								)}
								<div className='d-flex justify-content-between align-items-center'>
									<div className='d-flex flex-column gap-1'>
										<div className='d-flex align-items-center gap-1'>
											<img
												className='fixture__country--img border'
												src={match.home_flag}
												alt={match.home_team_en}
											/>
											<h5>{match.home_team_en}</h5>
										</div>
										{match.home_scorers[0] !== 'null' && match.home_scorers[0] !== '' ? (
											<div>
												<ol>
													{match.home_scorers[0].split(',').map((player, i) => (
														<li key={i} className='fixture__match--scorers'>
															<p>{player}</p>
														</li>
													))}
												</ol>
											</div>
										) : (
											''
										)}
									</div>
									<div>
										<p>{match.home_score}</p>
									</div>
								</div>
								<p className='text-center'>VS</p>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='d-flex flex-column gap-1'>
										<div className='d-flex align-items-center gap-1'>
											<img
												className='fixture__country--img border'
												src={match.away_flag}
												alt={match.away_team_en}
											/>
											<h5>{match.away_team_en}</h5>
										</div>
										{match.away_scorers[0] !== 'null' ? (
											<div>
												<ol>
													{match.away_scorers[0].split(',').map((player, i) => (
														<li key={i} className='fixture__match--scorers'>
															<p key={i}>{player}</p>
														</li>
													))}
												</ol>
											</div>
										) : (
											''
										)}
									</div>
									<div>
										<p>{match.away_score}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Fixture;
