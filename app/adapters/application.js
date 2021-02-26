import JSONAPIAdapter from '@ember-data/adapter/json-api';
// import DS from 'ember-data';
// import { computed } from '@ember/object';
// import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // session = service('session');
    // localhost
    host = 'http://localhost:8081';
      // Production API
      // host: 'https://fierce-earth-79141.herokuapp.com'

      // headers = computed(function () {
      //   // let session = this.get('session');

      //   // if (session.get('isAuthenticated')) {
      //   //   return {
      //   //     Authorization: `Bearer ${session.get('data.authenticated.token')}`
      //   //   };
      //   // }

      //   return {};
      // })
}



// export default DS.JSONAPIAdapter.extend({

// });
