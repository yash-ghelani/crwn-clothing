// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7FIQmc7GZlTm-56k8iDbztEsXXow5Gr8",
  authDomain: "project-db-820ac.firebaseapp.com",
  projectId: "project-db-820ac",
  storageBucket: "project-db-820ac.appspot.com",
  messagingSenderId: "309991608560",
  appId: "1:309991608560:web:fd21cb220cf919804f3235",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// ############# Sign in methods ###############
export const auth = getAuth();

// signing in with google
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// sign in auth user with form
export const signInWithForm = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// create auth user with form
export const createUserWithForm = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// ############# Firestore DB #############
export const db = getFirestore();

// create user in db
export const createUser = async (userAuth, extraUserData = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("DOCREF:", userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log("SNAPSHOT", userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...extraUserData,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};
