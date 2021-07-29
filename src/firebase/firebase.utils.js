import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyALGZgEvHOmRB0ulXVryxFZpjI8gB85nwk",
  authDomain: "clothing-app-aa9fa.firebaseapp.com",
  projectId: "clothing-app-aa9fa",
  storageBucket: "clothing-app-aa9fa.appspot.com",
  messagingSenderId: "851887003865",
  appId: "1:851887003865:web:19695f0a366d8cb33b86c8",
  measurementId: "G-K4F9N7ERST",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
