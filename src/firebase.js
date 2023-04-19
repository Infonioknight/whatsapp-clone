import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUJWjlue4FfggiLErBWPiHgybj02rW81I",
  authDomain: "whatsapp-clone-f3380.firebaseapp.com",
  projectId: "whatsapp-clone-f3380",
  storageBucket: "whatsapp-clone-f3380.appspot.com",
  messagingSenderId: "875066661937",
  appId: "1:875066661937:web:940530e05671426d26c910",
  measurementId: "G-5H0RY727B6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
