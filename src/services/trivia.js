import Axios from 'axios';
import to from 'await-to-js';

const axios = Axios.create({
  baseURL: `${process.env.VUE_APP_URL}`,
});

export default {
  async getToken() {
    return await to(axios.get('/token'));
  },

  async getQuestions() {
    return await to(axios.get('/questions'));
  },
};
