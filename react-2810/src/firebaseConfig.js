// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UkVkFTjXHNNMPMbNzoYRGuOckhqo3CA",
  authDomain: "react2810.firebaseapp.com",
  projectId: "react2810",
  storageBucket: "react2810.firebasestorage.app",
  messagingSenderId: "25958264633",
  appId: "1:25958264633:web:d75dcd2a64b1378db902e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);