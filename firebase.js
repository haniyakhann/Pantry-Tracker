// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPHULyjxNhrqyR8HTPam5s-WQQ077F-O4",
  authDomain: "inventory-management-8a49c.firebaseapp.com",
  projectId: "inventory-management-8a49c",
  storageBucket: "inventory-management-8a49c.appspot.com",
  messagingSenderId: "14743282436",
  appId: "1:14743282436:web:c562ea9065bbc4eaa82651",
  measurementId: "G-L1DKZ8ML1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}