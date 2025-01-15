// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore,collection, addDoc  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0b0_MczOYKI0sTgSW4xahqwktabta_b0",
  authDomain: "task-management-e0883.firebaseapp.com",
  projectId: "task-management-e0883",
  storageBucket: "task-management-e0883.firebasestorage.app",
  messagingSenderId: "772116479334",
  appId: "1:772116479334:web:6041b39605455e2c441ca7",
  measurementId: "G-XQ86H5Z18S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
export {  db,collection,addDoc   }; 