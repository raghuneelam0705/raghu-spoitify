// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword
  } from "firebase/auth";
  import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuH8o1ljJ0cOBDi_ziOERxupk0qT8bh5s",
  authDomain: "my-project-478e8.firebaseapp.com",
  projectId: "my-project-478e8",
  storageBucket: "my-project-478e8.appspot.com",
  messagingSenderId: "255113741670",
  appId: "1:255113741670:web:aba5ba63f2885d5897b4a7",
  measurementId: "G-HS87E4BE9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
      });
      return true
    } catch (error) {
      return {error: error.message}
    }
  };