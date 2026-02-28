// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq9qp3Zqc0OnX6lV92V0MntyCv8yWm8ME",
  authDomain: "series-f5dde.firebaseapp.com",
  projectId: "series-f5dde",
  storageBucket: "series-f5dde.firebasestorage.app",
  messagingSenderId: "72775057",
  appId: "1:72775057:web:de59cfb443d058c18f5630",
  measurementId: "G-PS1RMC0SCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()