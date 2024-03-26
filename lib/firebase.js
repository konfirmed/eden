import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOiww8ladPWfZH2YG3nGKc3v3AcqyFP2o",
    authDomain: "eden-restoration.firebaseapp.com",
    projectId: "eden-restoration",
    storageBucket: "eden-restoration.appspot.com",
    messagingSenderId: "366504949231",
    appId: "1:366504949231:web:a5e5dcbd9db56601f0721a",
    measurementId: "G-D6RFTHPJW2"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
