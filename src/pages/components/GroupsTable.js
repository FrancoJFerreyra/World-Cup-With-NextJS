const GroupsTable = ({ groups = null }) => {
	return (
		<div className='container-md'>
			<div className='row groups__container'>
				{groups
					? groups.map((group) => (
							<div key={group._id} className='col-sm-4 col-lg-3'>
								<div className='text-center'>
									<h4>{group.group}</h4>
								</div>
								<div className='d-flex justify-content-center border-start border-end rounded'>
									<div className='d-flex flex-column gap-2'>
										{group.teams.map((team) => (
											<div key={team.team_id} className='d-flex align-items-center gap-1'>
												<img src={team.flag} className='border fixture__country--img' />
												<h5>{team.name_en}</h5>
											</div>
										))}
									</div>
								</div>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default GroupsTable;
