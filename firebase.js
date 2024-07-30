// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPikl5BVRcopiZEQ1AE69TVVh7lvjCC3E",
  authDomain: "react-notes-6ae50.firebaseapp.com",
  projectId: "react-notes-6ae50",
  storageBucket: "react-notes-6ae50.appspot.com",
  messagingSenderId: "917304465638",
  appId: "1:917304465638:web:3d2e39ee5f5c1a342bc327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")