import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjI3prR8873VPwLnFL27Hw58U7jPsbjKk",
  authDomain: "filmeversaapp.firebaseapp.com",
  projectId: "filmeversaapp",
  storageBucket: "filmeversaapp.appspot.com",
  messagingSenderId: "164309286478",
  appId: "1:164309286478:web:ba2db7b3718a4fda6c4d1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "moives")

export default app;