// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr20FRHUtSKT8VytNRbNoRw8RfJxi_tHg",
  authDomain: "shuddhavayu.firebaseapp.com",
  projectId: "shuddhavayu",
  storageBucket: "shuddhavayu.appspot.com",
  messagingSenderId: "343459198750",
  appId: "1:343459198750:web:f8b46b40dbbde51a3d7b0f",
  measurementId: "G-TV3K7G3SE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

