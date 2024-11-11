import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ARoute extends Route {
  @service auth;

  async model() {
    await this.auth.ensureInitialized();
    if (!this.auth.user) {
      throw new Error('NOT LOGGED IN');
    }
  }
}
