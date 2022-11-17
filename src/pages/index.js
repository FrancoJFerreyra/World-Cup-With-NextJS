import { qatarApi, newsApi } from '../axiosRequest';
import axios from 'axios';
import { serialize } from 'cookie';
import dataMatches from '../testData/matches';
import Fixture from './components/Fixture';
import News from './components/News';
import Navigation from './components/Navigation';

const Home = ({ fixtureList, newsList }) => {
  return (
    <>
      <Navigation />
      <div className='container-xxl'>
        <div className='text-center'>
          <h1>Solo Fútbol!</h1>
        </div>
        <section className='home__fixtureComponent--container container-md'>
          <Fixture fixture={fixtureList} />
        </section>
        <section>
          <News newsList={newsList} />
        </section>
      </div>
    </>
  );
};
export default Home;

export const getServerSideProps = async ({ req, res }) => {
  const newsRes = await newsApi.get('/everything', {
    params: {
      q: 'fifaworldcup',
      from: '2022-11-14',
      to: new Date(),
      language: 'es',
    },
  });
  // const matches = await axios.post('http://localhost:3000/api/qatar/token', {
  //   path: '/match',
  // });
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=120'
  );
  return {
    props: {
      fixtureList: dataMatches.data.slice(0, 10),
      // fixtureList: matches.data.slice(0, 10),
      newsList: newsRes.data.articles.slice(0, 8),
    },
  };
};
