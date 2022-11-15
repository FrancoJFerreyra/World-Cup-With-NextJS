import axios from 'axios';
import { serialize } from 'cookie';

const handlerLogin = async (req, res) => {
  const credentials = req.body;
  console.log(credentials);
  try {
    const token = await axios.post(
      'http://api.cup2022.ir/api/v1/user/login',
      credentials
    );
    const serialized = serialize('QatarToken', 'token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/',
    });
    res.setHeader('Set-Cookie', serialized);
    return res.json('success');
  } catch (error) {
    return res.status(400).json({ error: error });
  }
  // token.data.data
};
export default handlerLogin;
