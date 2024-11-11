// Import the functions you need from the SDKs you need
import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUH4y5giL_DNunrvHO1tHm3rq9ag17b-w",
  authDomain: "nov11test-530e2.firebaseapp.com",
  projectId: "nov11test-530e2",
  storageBucket: "nov11test-530e2.firebasestorage.app",
  messagingSenderId: "336622868678",
  appId: "1:336622868678:web:54c851c07c9646d170dfc7"
};
export default class FirebaseService extends Service {
    app = initializeApp(firebaseConfig);
    db = getFirestore(this.app)
}
