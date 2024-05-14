import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChCCMUib1EOhGleTXUwMRlW9RNOQ4Gdt4",
  authDomain: "culturalhatti.firebaseapp.com",
  projectId: "culturalhatti",
  storageBucket: "culturalhatti.appspot.com",
  messagingSenderId: "41998909854",
  appId: "1:41998909854:web:2f954bb3b67fdab6e3168f",
  measurementId: "G-YPPYWJH9SQ"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth }