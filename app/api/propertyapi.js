import axios from '../plugins/axios'
export default {
  async index(payload) {
    await axios.get('/property', payload.params).then((res) => {
      console.log('res', res)
      return res;
    }).catch((e) => {
      console.error(e)
    });
  }
}
