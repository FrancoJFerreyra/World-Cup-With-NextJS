import Link from 'next/link';

const HistoryResult = ({ final }) => {
  return (
    <>
      <div className='col-md-6 d-flex align-items-center justify-content-center '>
        <h2 className='text-warning historyResult__year mb-0'>{final.year}</h2>
      </div>
      <div className='col-md-6 border-start rounded'>
        <div className='d-flex flex-column align-items-center'>
          <div>
            <h2>Sede: {final.hostCountry}</h2>
          </div>
          <div className='text-center'>
            <h3 className='text-success'>{final.winner}</h3>
            <p>VS</p>
            <h3 className='text-danger'>{final.runnerUp}</h3>
          </div>
        </div>
        <div>
          <div>
            <ul>
              <span>Goleadores:</span>
              {final.topGoalScorer.map((player) => (
                <li key={player.name}>
                  <Link
                    href={`/world_cup_history/top_scorer/${player.name
                      .toLowerCase()
                      .split(' ')
                      .join('_')}`}>
                    {player.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Partidos totales: {final.numberOfMatches}</p>
          </div>
          <div>
            <p>Espectadores totales: {final.totalAttendance}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryResult;
