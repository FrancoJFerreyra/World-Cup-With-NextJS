import axios from 'axios';
import { dbConnect } from 'utils/mongoose';
import tokenModel from 'models/tokenModel';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

dbConnect();

const user = {
  email,
  password,
};
const tokenHandler = async (req, res) => {
  /* const getToken = await axios.post(
  //   'http://api.cup2022.ir/api/v1/user/login',
  //   user
  // );
  const newToken = new tokenModel({ token: 'token' });
  await newToken.save();
  res.status(201).json(newToken);*/
};

export default tokenHandler;
