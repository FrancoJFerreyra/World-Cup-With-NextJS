import axios from 'axios';

const NEWS_KEY = process.env.NEWS_KEY;

const qatarApi = axios.create({
  baseURL: 'http://api.cup2022.ir/api/v1',
  // headers: {
  //   Authorization: QATAR_KEY,
  // },
});

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: NEWS_KEY,
  },
});

export { qatarApi, newsApi };
