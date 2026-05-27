// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiuAahbrChK8AZNeAHbjHmFtWmcPjJ_i4",
  authDomain: "netflix-gpt-5bdff.firebaseapp.com",
  projectId: "netflix-gpt-5bdff",
  storageBucket: "netflix-gpt-5bdff.firebasestorage.app",
  messagingSenderId: "857935180235",
  appId: "1:857935180235:web:3f2f61e2bafac0e2b5464e",
  measurementId: "G-V61HSWQC1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
