import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqKTEVMkosF6Ei-gQY8NruNmAIFwdxnpY",
  authDomain: "instagram-clone-ii.firebaseapp.com",
  projectId: "instagram-clone-ii",
  storageBucket: "instagram-clone-ii.appspot.com",
  messagingSenderId: "535824911365",
  appId: "1:535824911365:web:34c5719170b006662ba06c",
  measurementId: "G-DLR1B5KLZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
