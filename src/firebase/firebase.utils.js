import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  writeBatch,
  collection,
} from "firebase/firestore";
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

export const retrieveCollectionData = async () => {
  const collectionRef = collection(firestore, "collections");
  // console.log(collectionRef);
  return collectionRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const shopData = {};
  collections.forEach((doc) => {
    shopData[doc.data().title.toLowerCase()] = { ...doc.data(), id: doc.id };
  });
  return shopData;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(firestore);
  objectsToAdd.forEach((item) => {
    const newDocRef = doc(collection(firestore, collectionKey));
    batch.set(newDocRef, item);
  });
  return await batch.commit();
};

export const firestore = getFirestore();
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
