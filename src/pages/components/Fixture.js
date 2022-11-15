import React from 'react';
import Link from 'next/link';

const Fixture = ({ fixture }) => {
  const upcomingMatches = fixture.filter(
    (match) => new Date(match.local_date) > new Date()
  );
  const sortedFixture = upcomingMatches
    .sort((a, b) => new Date(a.local_date) - new Date(b.local_date))
    .slice(0, 4);
  return (
    <div>
      <div>
        <h2>Proximos partidos</h2>
      </div>
      <table className='home__fixture--container'>
        <thead>
          <tr>
            {sortedFixture.map((match, i) => (
              <th key={i}>Grupo {match.group}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {sortedFixture.map((match, i) => (
              <td key={i}>
                <div className='home__fixture--matchContainer d-flex flex-column'>
                  <div className='d-flex align-items-center'>
                    <img
                      className='fixture__country--img'
                      src={match.home_flag}
                      alt={match.home_team_en}
                    />
                    <h5>{match.home_team_en}</h5>
                  </div>
                  <div className='d-flex align-items-center'>
                    <img
                      className='fixture__country--img'
                      src={match.away_flag}
                      alt={match.away_team_en}
                    />
                    <h5>{match.away_team_en}</h5>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className='text-center'>
        <Link href={'/qatar'} className='btn btn-success'>
          Ver fixture
        </Link>
      </div>
    </div>
  );
};

export default Fixture;
