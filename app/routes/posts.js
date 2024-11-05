import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  async model(params) {
    let result = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await result.json();
    console.log(data);
    return data;
  }
}
