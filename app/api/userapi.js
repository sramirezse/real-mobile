
import { Http, HttpResponse } from "@nativescript/core";
import * as ApplicationSettings from '@nativescript/core/application-settings';

export default {
  async signin(params) {
    // return await axio.post(`https://realstate.kratoxxsoft.com/api/auth/login`, params)
    return await Http.request({
      url: "https://realstate.kratoxxsoft.com/api/auth/login",
      headers: {
        "Content-Type": "application/json"
      },
      content: JSON.stringify(params),
      method: "POST"
    }).then(
      (response) => {
        return response.content.toJSON();
      },
      (e) => {
        console.log(e);
      }
    );
  },
  async me() {
    // return await axio.get('https://realstate.kratoxxsoft.com/api/auth/user').catch((e) => { console.error(e) })
    return await Http.request({
      url: 'https://realstate.kratoxxsoft.com/api/auth/user',
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ApplicationSettings.getString('token')
      },
    }).then(
      (response) => {
        return response.content.toJSON();
      },
      (e) => {
        console.log(e);
      }
    )
  },
  async logout() {

    // return await axios.post(`auth/logout`);
    return await Http.request({
      url: "https://realstate.kratoxxsoft.com/api/auth/logout",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ApplicationSettings.getString('token')
      },
      method: "POST",
    }).then(
      (response) => {
        return response.content;
      },
      (e) => {
        console.log('error', e);
      }
    );
  },

}
