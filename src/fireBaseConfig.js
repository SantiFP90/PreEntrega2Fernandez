// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCenOdqzAzW_bkZudjMKGc6pUpiveAQtow",
  authDomain: "backendreactjs.firebaseapp.com",
  projectId: "backendreactjs",
  storageBucket: "backendreactjs.appspot.com",
  messagingSenderId: "139553993310",
  appId: "1:139553993310:web:aa2d11a3873ecbe2503acf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Guardo Base de Datos y exporto
export const db = getFirestore(app);
