import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ClickToEdit extends Component {
  @tracked editMode = false;
  @tracked text = 'apple';

  @action
  edit() {
    this.editMode = true;
  }

  @action
  save() {
    this.editMode = false;
  }
}
