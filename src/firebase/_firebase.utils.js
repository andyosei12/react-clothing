import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCp9E4wZei4L5cY4AoeqSjakvGJexC1PqM",
  authDomain: "crwnclothin.firebaseapp.com",
  projectId: "crwnclothin",
  storageBucket: "crwnclothin.appspot.com",
  messagingSenderId: "212079875680",
  appId: "1:212079875680:web:ebed3a5ed74be12ac45505",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
