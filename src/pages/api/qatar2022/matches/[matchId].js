import data from 'testData/match';

const handler = async (req, res) => {
  const id = req.query.matchId;
  // const data = await qatarApi.get(`/match/${id}`);
  // console.log(data);
  return res.status(200).json(data);
};
export default handler;
