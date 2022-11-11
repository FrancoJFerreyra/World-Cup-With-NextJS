import { qatarApi } from 'axiosRequest';
import data from 'testData/groups';

const handler = async (req, res) => {
  // const data = await qatarApi.get('/standings');
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
