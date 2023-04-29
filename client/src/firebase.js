// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0Nn6nfwvAd2v7cr_vVcL_FubCPMIOuI8",
  authDomain: "convo-ce324.firebaseapp.com",
  projectId: "convo-ce324",
  storageBucket: "convo-ce324.appspot.com",
  messagingSenderId: "42457462038",
  appId: "1:42457462038:web:9d0dab8424f9217f4c0c37",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
