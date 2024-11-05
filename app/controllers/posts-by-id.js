import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsByIdController extends Controller {

  @tracked newComment = ""

  @action
  test() {
    alert("you typed "+this.newComment)
  }
}
