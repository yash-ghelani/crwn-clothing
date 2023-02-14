// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
initializeApp(firebaseConfig);

// Google Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// ############# auth generation ###############
export const auth = getAuth();

// ############# Sign in methods ###############

// signing in with google
export const signInWithGooglePopup = async () => {
  return await signInWithPopup(auth, provider);
};

// sign in auth user with form
export const signInWithForm = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// ############# Sign up methods ###############

// create auth user with form
export const createUserWithForm = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// ############# Sign out methods ###############
export const signOutUser = async () => {
  await signOut(auth);
};

// ############# observer/listeners ###############

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};

// ############# Firestore DB #############
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  console.log("Collection created");

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Documents batch created");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// create user in db
export const createUser = async (userAuth, extraUserData = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

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
