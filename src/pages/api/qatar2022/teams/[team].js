import { qatarApi } from 'axiosRequest';
import data from 'testData/team';

const handler = async (req, res) => {
  const id = req.query.team;
  // const data = await qatarApi.get(`/team/${id}`);
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
