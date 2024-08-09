'use client'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuJ7DqkyEk6Foaw6S5wHYKeUqUhfr2LQ4",
  authDomain: "namviek-landingpage.firebaseapp.com",
  projectId: "namviek-landingpage",
  storageBucket: "namviek-landingpage.appspot.com",
  messagingSenderId: "458322272778",
  appId: "1:458322272778:web:cd410e381eb0f1f15db5f3",
  measurementId: "G-T5VK9YRX02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
