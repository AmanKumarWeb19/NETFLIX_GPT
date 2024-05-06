// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuCn1V0b3KORuYRtiegq4P66ZkROd-mWc",
  authDomain: "netflixauth-32372.firebaseapp.com",
  projectId: "netflixauth-32372",
  storageBucket: "netflixauth-32372.appspot.com",
  messagingSenderId: "69805640834",
  appId: "1:69805640834:web:9ac3d5a8c984dad781f89b",
  measurementId: "G-KZFXZ1KT27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
