import { refs } from './refs';

const { authorization } = refs;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSk3k-SUg9Wco3mDqClVSP1cXvTSW8MOs',
  authDomain: 'goit-js.firebaseapp.com',
  projectId: 'goit-js',
  storageBucket: 'goit-js.appspot.com',
  messagingSenderId: '393564713998',
  appId: '1:393564713998:web:635571a7cde75de092385f',
  databaseURL: 'https://goit-js-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
const database = getDatabase(app);

export function authorize() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.uid, user.displayName, user.email);
    authorization.style.backgroundImage = `url("${user.photoURL}")`;
    // set(ref(db, 'users/' + user.uid), {
    //   username: user.displayName,
    //   email: user.email
    // });
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};

export function writeFavoriteDrinks(drinkId, drinkName, drinkImage) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    drinkId,
    drinkName,
    drinkImage
  });
};