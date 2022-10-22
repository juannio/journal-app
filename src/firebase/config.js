// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZhJ5ix8av9ayHmOu77gu2gLMu_ecylYA",
    authDomain: "react-redux-3a86d.firebaseapp.com",
    projectId: "react-redux-3a86d",
    storageBucket: "react-redux-3a86d.appspot.com",
    messagingSenderId: "536344220703",
    appId: "1:536344220703:web:0b182258a080629589712a"
};

// Initialize Firebase with Firebase configuration
export const FirebaseAPP = initializeApp(firebaseConfig);

// Gets the Auth credentials on Firebase
export const FirebaseAuth = getAuth(FirebaseAPP);

export const FirebaseDB = getFirestore(FirebaseAPP)