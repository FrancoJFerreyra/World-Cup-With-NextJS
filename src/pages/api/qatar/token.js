import axios from 'axios';
import { dbConnect } from 'utils/mongoose';
import tokenModel from 'models/tokenModel';
import { qatarApi } from 'axiosRequest';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

dbConnect();

const user = {
  email,
  password,
};
const getNewToken = async () => {
  const token = await axios.post('http://api.cup2022.ir/api/v1/user/login', user);
  return token.data.data.token;
};

const handleError = async (error, currentToken, req, res) => {
  if (error.status === '429') return;
  console.log('NEW TOKEN SETTED');
  currentToken.token = await getNewToken();
  await currentToken.save();
  const { data } = await qatarApi(req.body, {
    headers: {
      Authorization: currentToken.token,
    },
  });
  return res.status(201).json(data.data);
};

const updateToken = async (currentToken, req, res) => {
  try {
    const { data } = await qatarApi(req.body.path, {
      headers: {
        Authorization: currentToken.token,
      },
    });
    return res.status(200).json(data.data);
  } catch (error) {
    handleError(error, currentToken, req, res);
  }
};

const tokenHandler = async (req, res) => {
  const currentToken = await tokenModel.findOne();
  if (currentToken) {
    return updateToken(currentToken, req, res);
  }
  try {
    const newToken = new tokenModel({ token: await getNewToken() });
    const savedToken = await newToken.save();
    return res.status(201).json(savedToken);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export default tokenHandler;
