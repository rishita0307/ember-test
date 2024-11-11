import Controller from '@ember/controller';

import { service } from '@ember/service';
import { action } from '@ember/object';

export default class DebggingController extends Controller {
  @service router;
  @service auth;
}
