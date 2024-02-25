// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvsD7VRTq6VQ5_2xoeIsb9pamzdAoElKI",
  authDomain: "grupodigital-6f866.firebaseapp.com",
  projectId: "grupodigital-6f866",
  storageBucket: "grupodigital-6f866.appspot.com",
  messagingSenderId: "649159359085",
  appId: "1:649159359085:web:87d46f625edbbc0f931d64",
  measurementId: "G-S8G66RMQ0S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);