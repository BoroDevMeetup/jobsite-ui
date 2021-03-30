import Route from '@ember/routing/route';
export default class JobRoute extends Route {

  model() {
    return this.store.findAll('job');
    // return fetch('http://localhost:3000/authors')
    // .then(response => response.json());
  }
}
