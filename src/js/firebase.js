// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
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
};

// const btnIn = document.querySelector('#btnAuth');
// const btnOut = document.querySelector('#btnOut');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// onAuthStateChanged(auth, user => {
//   if (user) {
//     uidUser = user.uid;
//     let useraut = document.querySelector('.userAuth');
//     useraut.textContent = uidUser;
//     console.log(user);
//   } else {
//     console.log('нема авторизації');
//   }
// });

// export const db = getFirestore(app);
// export let uidUser = '';
// const currentUser = auth.currentUser;

// console.log(currentUser);

// export async function signIn() {
//   const provider = new GoogleAuthProvider();
//   try {
//     const user = await signInWithPopup(auth, provider);

//     console.log(user.user.email);
//   } catch {
//     console.log('mistake');
//   }
// }
// // signOut(auth)
// // .then(() => {
// //       alert('u out');
// //       // Sign-out successful.
// //     })
// //     .catch(error => {
// //       // An error happened.
// //     });

// btnIn.addEventListener('click', signIn);
// btnOut.addEventListener('click', signOut);

