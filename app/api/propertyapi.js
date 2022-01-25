import { Http, HttpResponse } from "@nativescript/core";
import * as ApplicationSettings from '@nativescript/core/application-settings';
export default {
  async index(payload) {
    // return await axios.get('property', payload)
    return await Http.request({
      url: 'https://realstate.kratoxxsoft.com/api/property?params=' + JSON.stringify(payload),
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ApplicationSettings.getString('token') ? ApplicationSettings.getString('token') : ''
      },
    }).then(
      (response) => {
        return response.content.toJSON();
      },
      (e) => {
        console.log(e);
      }
    )
  }
}
