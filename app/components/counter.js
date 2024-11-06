import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Counter extends Component {
  @tracked count = parseInt(this.args.start || '0');

  @action
  increment() {
    this.count = this.count + 1;
    console.log('ok');
  }
}
