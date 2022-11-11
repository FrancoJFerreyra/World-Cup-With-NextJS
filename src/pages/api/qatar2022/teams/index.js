import { qatarApi } from 'axiosRequest';
import data from 'testData/teams';

const handler = async (req, res) => {
  // const data = await qatarApi.get('/team');
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
