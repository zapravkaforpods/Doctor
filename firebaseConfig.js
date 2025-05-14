// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Імпорт сервісу аутентифікації
import { getFirestore } from "firebase/firestore"; // Імпорт сервісу Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBijTdqpfAF6Lk5VZNQ3NO-a_tWljd7by0",
  authDomain: "doctor-b52a0.firebaseapp.com",
  projectId: "doctor-b52a0",
  storageBucket: "doctor-b52a0.firebasestorage.app",
  messagingSenderId: "434682344042",
  appId: "1:434682344042:web:b1f391f0382aab44f5d013",
  measurementId: "G-ZBLXFW1B90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Отримай інстанси сервісів аутентифікації та Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);