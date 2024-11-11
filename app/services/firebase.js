import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpITRVoa5AOMiY4Yi-a7Ba8QveOs_0gek',
  authDomain: 'f2024-ongoing-example.firebaseapp.com',
  projectId: 'f2024-ongoing-example',
  storageBucket: 'f2024-ongoing-example.firebasestorage.app',
  messagingSenderId: '595362775097',
  appId: '1:595362775097:web:15cdb97ef93c4f42b58de8',
};

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
}
