// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCDpGlRdVy8YegEitfR0-CiKOTHLVwFBig",
  authDomain: "birthday-a9478.firebaseapp.com",
  projectId: "birthday-a9478",
  storageBucket: "birthday-a9478.firebasestorage.app",
  messagingSenderId: "343086849844",
  appId: "1:343086849844:web:aab7684576cb7c70d0cf61",
  measurementId: "G-V6W0G8H5CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;