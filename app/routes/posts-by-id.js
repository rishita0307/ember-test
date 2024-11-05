import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class PostsByIdRoute extends Route {
  async model(params) {
    // a funky little trick for doing multiple fetches.
    return RSVP.hash({
      post: fetch(
        'https://jsonplaceholder.typicode.com/posts/' + params.post_id,
      ).then((r) => r.json()),
      comments: fetch(
        'https://jsonplaceholder.typicode.com/posts/' +
          params.post_id +
          '/comments',
      ).then((r) => r.json()),
    });
  }
}
