import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCp9E4wZei4L5cY4AoeqSjakvGJexC1PqM",
  authDomain: "crwnclothin.firebaseapp.com",
  projectId: "crwnclothin",
  storageBucket: "crwnclothin.appspot.com",
  messagingSenderId: "212079875680",
  appId: "1:212079875680:web:ebed3a5ed74be12ac45505",
};

initializeApp(config);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfile = async (user, additionalData) => {
  if (!user) return;

  //info; this gets the document reference
  const userRef = doc(firestore, `users/${user.uid}`);
  //info: this retrieves a snapshot of a document
  const userData = await getDoc(userRef);

  if (!userData.exists()) {
    console.log("user does not exist");
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const firestore = getFirestore();
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
