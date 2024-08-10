// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDljqHzyisrEqQRL-FGjiYEJboyU2uedFQ",
  authDomain: "internship-647f0.firebaseapp.com",
  projectId: "internship-647f0",
  storageBucket: "internship-647f0.appspot.com",
  messagingSenderId: "855786999739",
  appId: "1:855786999739:web:14c3b70ca932a1c51dbe9e",
  measurementId: "G-84BWMHJJEB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
