import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsAuK7BVGaA4j2Od4XPPjarftPjN9JpfM",
  authDomain: "telegram-clone-cce7a.firebaseapp.com",
  projectId: "telegram-clone-cce7a",
  storageBucket: "telegram-clone-cce7a.appspot.com",
  messagingSenderId: "887419912608",
  appId: "1:887419912608:web:7e48de65092c20225ca4c5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
