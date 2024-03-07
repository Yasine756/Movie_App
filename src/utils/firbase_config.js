// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAm7PQvcZaKiClRMeyhOanmA1aSHU0yohw",
  authDomain: "movieapp-f2b9c.firebaseapp.com",
  projectId: "movieapp-f2b9c",
  storageBucket: "movieapp-f2b9c.appspot.com",
  messagingSenderId: "307493114177",
  appId: "1:307493114177:web:735db18b7fcdef753c11c0",
  measurementId: "G-TJ3DF4WJC7"
};


const app = initializeApp(firebaseConfig);
export const  firebaseAuth=getAuth(app)