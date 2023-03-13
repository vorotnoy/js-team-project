// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSk3k-SUg9Wco3mDqClVSP1cXvTSW8MOs",
  authDomain: "goit-js.firebaseapp.com",
  projectId: "goit-js",
  storageBucket: "goit-js.appspot.com",
  messagingSenderId: "393564713998",
  appId: "1:393564713998:web:635571a7cde75de092385f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)