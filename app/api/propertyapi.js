import axios from '../plugins/axios'
export default {
  async index(payload) {
    return await axios.get('property', payload)
  }
}
