// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Guardo Base de Datos y exporto
export const db = getFirestore(app);

// REACT_APP_API_KEY= AIzaSyCenOdqzAzW_bkZudjMKGc6pUpiveAQtow
// REACT_APP_AUTH_DOMAIN= backendreactjs.firebaseapp.com
// REACT_APP_PROJECT_ID= backendreactjs
// REACT_APP_STORAGE_BUCKET= backendreactjs.appspot.com
// REACT_APP_MESSAGING_SENDER_ID= 139553993310
// REACT_APP_APP_ID= 1:139553993310:web:aa2d11a3873ecbe2503ac

//MIN 2:43
