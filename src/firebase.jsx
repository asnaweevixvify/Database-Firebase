import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAFnpRwYQ5XjmCJoJ6qQtAjqHxwaunSmkI",
  authDomain: "fir-basic-51258.firebaseapp.com",
  projectId: "fir-basic-51258",
  storageBucket: "fir-basic-51258.firebasestorage.app",
  messagingSenderId: "646813151141",
  appId: "1:646813151141:web:f03acc05faef6d7c9ac24c",
  measurementId: "G-B9V4D6XRW7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);