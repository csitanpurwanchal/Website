import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKdHUa1fS7Gf_uP2GLP_VYhYgfOOmbOJQ",
  authDomain: "csitan-website.firebaseapp.com",
  projectId: "csitan-website",
  storageBucket: "csitan-website.appspot.com",
  messagingSenderId: "397142070568",
  appId: "1:397142070568:web:ee9b41d40454b5a223ac1d",
  measurementId: "G-XLESEE53Y8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
