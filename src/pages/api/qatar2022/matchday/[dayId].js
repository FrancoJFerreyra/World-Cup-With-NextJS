import data from 'testData/match';

const handler = async (req, res) => {
  const id = req.query.dayId;
  // const data = await qatarApi.get(`/bymatch/${id}`);
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
