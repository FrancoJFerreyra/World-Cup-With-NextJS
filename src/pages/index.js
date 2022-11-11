import axios from 'axios';

const Home = ({ matches }) => {
  return <div>Home</div>;
};
export default Home;

export const getServerSideProps = async (ctx) => {
  const res = await axios.get('http://localhost:3000/api/qatar2022/matches');
  const matches = res.data.data;
  return {
    props: {
      matches,
    },
  };
};
