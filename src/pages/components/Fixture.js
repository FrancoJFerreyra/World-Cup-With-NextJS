import React from 'react';

const Fixture = ({ fixture }) => {
  const sortedFixture = fixture.sort(
    (a, b) => new Date(a.local_date) - new Date(b.local_date)
  );
  return (
    <div>
      <div>
        <h2>Fixture</h2>
      </div>
      <div className='row justify-content-center home__fixture--container'>
        {sortedFixture.slice(0, 6).map((match) => {
          return (
            <div
              key={match._id}
              className='col-sm-6 col-md-4 home__fixture--match'
            >
              <div className='row text-center'>
                <div className='col-sm-4 col-md-5'>
                  <img
                    className='fixture__country--img'
                    src={match.home_flag}
                    alt={match.home_team_en}
                  />
                  <p>{match.home_team_en}</p>
                </div>
                <p className='col-sm-4 col-md-2 m-auto'>VS</p>
                <div className='col-sm-4 col-md-5'>
                  <img
                    className='fixture__country--img'
                    src={match.away_flag}
                    alt={match.away_team_en}
                  />
                  <p>{match.away_team_en}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fixture;
