import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service auth;

  async model() {
    await this.auth.ensureInitialized();
  }
}
