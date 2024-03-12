// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2c226.firebaseapp.com",
  projectId: "mern-estate-2c226",
  storageBucket: "mern-estate-2c226.appspot.com",
  messagingSenderId: "1060569021944",
  appId: "1:1060569021944:web:b7276718080b3f3c9cea0d"
};

// initializing
export const app = initializeApp(firebaseConfig);

