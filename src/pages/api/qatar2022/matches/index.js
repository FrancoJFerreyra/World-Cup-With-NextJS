import { qatarApi } from 'axiosRequest';
import data from 'testData/matches';

const handler = async (req, res) => {
  // const data = await qatarApi.get('/match');
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
