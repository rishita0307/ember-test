import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
  authStateReady,
} from 'firebase/auth';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts');

  this.route('posts_by_id', {
    path: '/posts/:post_id',
  });

  this.route('a', function () {
    this.route('b', function () {
      this.route('c', function () {
        this.route('d');
      });
    });
  });
  this.route('albums');

  this.route('one_album', {
    path: '/albums/:album_id',
  });

  this.route('test', {
    path: 'test/:test_id',
  });

  this.route('notfound', {
    path: '/*route',
  });
  this.route('debgging');
});
