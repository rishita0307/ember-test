import Route from '@ember/routing/route';

export default class OneAlbumRoute extends Route {
  async model(params) {
    const result = await fetch(
      'https://jsonplaceholder.typicode.com/albums/' + params.album_id,
    );
    const data = await result.json();
    const result2 = await fetch(
      'https://jsonplaceholder.typicode.com/albums/' +
        params.album_id +
        '/photos',
    );
    const data2 = await result2.json();
    console.log({ album: data, photos: data2 });
    return { album: data, photos: data2 };
  }
}
