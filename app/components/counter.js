import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { collection, addDoc } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { query, where, getDocs } from 'firebase/firestore';

export default class Counter extends Component {
  @tracked count = parseInt(this.args.start || '0');

  @service firebase;

  @action
  async increment() {
    this.count = this.count + 1;
    console.log('ok');

    const db = this.firebase.db;

    const q = query(collection(db, 'cities'), where('capital', '==', true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }
}
