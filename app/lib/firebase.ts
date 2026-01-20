import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfKs7ityL2QHmiD5a8NI1m9O_sD92Jwck",
  authDomain: "rawafed-9a6c6.firebaseapp.com",
  projectId: "rawafed-9a6c6",
  storageBucket: "rawafed-9a6c6.firebasestorage.app",
  messagingSenderId: "656696430973",
  appId: "1:656696430973:web:f27521ece26ab435f87c14",
  measurementId: "G-CG00E5C9PL"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

export { app, auth };
