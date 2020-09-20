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

  async registerTicket(ticket) {
    return await to(axios.post('/ticket', ticket));
  },

  async sendAnswers(answers) {
    return await to(axios.post('/responses', answers));
  },
};
