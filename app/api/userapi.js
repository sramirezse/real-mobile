import axios from '../plugins/axios'
import axio from "axios/dist/axios";
export default {
    async signin (params) {
        return await axio.post(`https://realstate.kratoxxsoft.com/api/auth/login`, params)
    },
    async me () {
        return await axio.get('https://realstate.kratoxxsoft.com/api/auth/user').catch((e)=>{console.error(e)})
    },
    async logout() {
      console.log('logout');
      return await axios.post(`auth/logout`)
    },
    async refresh () {

        return await axios.post(`auth/refresh`)
    },
}
