import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBaas8Pkdw82rDlm2T-j25ljZA5t1vtgnk',
  authDomain: 'crwn-clothing-db-4d6ff.firebaseapp.com',
  projectId: 'crwn-clothing-db-4d6ff',
  storageBucket: 'crwn-clothing-db-4d6ff.appspot.com',
  messagingSenderId: '751216883830',
  appId: '1:751216883830:web:fa33c947c08a9c4b8b8757',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);
