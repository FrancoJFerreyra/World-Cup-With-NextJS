import { qatarApi, newsApi } from '../axiosRequest';
import dataMatches from '../testData/matches';
import Fixture from './components/Fixture';
import News from './components/News';

const Home = ({ fixtureList, newsList }) => {
  return (
    <div className='container-xxl'>
      <div className='text-center'>
        <h1>Todo sobre Qatar</h1>
      </div>
      <section className='home__fixtureComponent--container'>
        <Fixture fixture={fixtureList.data} />
      </section>
      <section>
        <News newsList={newsList} />
      </section>
    </div>
  );
};
export default Home;

export const getServerSideProps = async (ctx) => {
  // const matchesRes = await qatarApi.get('/match');
  const matchesRes = dataMatches;
  const newsRes = await newsApi.get('/everything', {
    params: {
      q: 'fifaworldcup',
      language: 'es',
    },
  });
  // const res2 = await axios.get('http://localhost:3000/api/qatar2022/groups');
  // const groups = res2.data.data;
  return {
    props: {
      // fixture: matchesRes.data.data,
      fixtureList: dataMatches,
      newsList: newsRes.data.articles,
    },
  };
};
