import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, getDoc } from 'firebase/firestore';

export default class TestRoute extends Route {
  @service firebase;

  async model(params) {
    const db = this.firebase.db;
    const docRef = doc(db, 'cities', params.test_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return { ref: docRef, data: docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  }
}
