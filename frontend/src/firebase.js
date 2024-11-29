import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9zu42ViuExi1qpKjmXOR5nsi9Uc9w6AI",
  authDomain: "promentorai-37f12.firebaseapp.com",
  projectId: "promentorai-37f12",
  storageBucket: "promentorai-37f12.firebasestorage.app",
  messagingSenderId: "376916122388",
  appId: "1:376916122388:web:36ee2db922e100992ec001",
  measurementId: "G-PXYJJ6GMM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);