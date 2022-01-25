import { Http, HttpResponse } from "@nativescript/core";
import * as ApplicationSettings from '@nativescript/core/application-settings';
export default {
  async index(payload) {
    // return await axios.get('property', payload)
    return await Http.request({
      url: 'https://realstate.kratoxxsoft.com/api/property?page=' + JSON.stringify(payload),
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ApplicationSettings.getString('token') ? ApplicationSettings.getString('token') : ''
      },
      content: payload,
    }).then(
      (response) => {
        console.log('response', response.content);
        return response.content.toJSON();
      },
      (e) => {
        console.log(e);
      }
    )
  }
}
