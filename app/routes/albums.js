import Route from '@ember/routing/route';

export default class AlbumsRoute extends Route {
  async model(params) {
    console.log('apple');
    const result = await fetch('https://jsonplaceholder.typicode.com/albums/');
    const data = await result.json();
    return data;
  }
}
