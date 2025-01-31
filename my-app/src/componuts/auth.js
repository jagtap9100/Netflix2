// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWLpTovTwjQyoOSiuNwJeXttU04ZdZytU",
  authDomain: "netflix-4b159.firebaseapp.com",
  projectId: "netflix-4b159",
  storageBucket: "netflix-4b159.firebasestorage.app",
  messagingSenderId: "950530490438",
  appId: "1:950530490438:web:b9056665f76ba51497ca47",
  measurementId: "G-281MFN3HP2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
