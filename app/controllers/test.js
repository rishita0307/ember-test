import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { collection, onSnapshot } from 'firebase/firestore';

export default class TestController extends Controller {
  // we need the router service so we can pay attention to transitions.
  @service router;

  // we need a tracked for the most recent data
  @tracked city = null;

  // and we need to track our "unsubscribe" function so we can call it as needed.
  unsubscribe_func = null;

  constructor() {
    super(...arguments);

    // when leaving the page unsubscribe.
    this.router.on('routeWillChange', (transition) => {
      if (!transition.to.find((route) => route.name === this.routeName)) {
        unsubscribe();
      }
    });

    // add listener whenever the model changes.
    this.addObserver('model', this, 'modelChanged');
  }

  unsubscribe() {
    if (this.unsubscribe_func) {
      // remove listener.
      this.unsubscribe_func();
      this.unsubscribe_func = null;
    }
  }

  modelChanged() {
    this.unsubscribe(); // shouldn't be needed, but paranoia is good.
    this.unsubscribe_func = onSnapshot(this.model.ref, (doc) => {
      this.city = doc.data();
    });
  }
}
