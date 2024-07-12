
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1DsxP67Ew5VOySeu_lFt2aKiEw7auF0o",
  authDomain: "pantry-tracker-app-6121e.firebaseapp.com",
  projectId: "pantry-tracker-app-6121e",
  storageBucket: "pantry-tracker-app-6121e.appspot.com",
  messagingSenderId: "225855722023",
  appId: "1:225855722023:web:a6c0f6c705997e5618f402",
  measurementId: "G-X74PX9D21G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };