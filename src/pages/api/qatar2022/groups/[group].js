import { qatarApi } from 'axiosRequest';
import data from 'testData/group';

const handler = async (req, res) => {
  const id = req.query.group;
  // const data = await qatarApi.get(`/standings/${id}`);
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
