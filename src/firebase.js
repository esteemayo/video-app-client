import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'video-42829.firebaseapp.com',
  projectId: 'video-42829',
  storageBucket: 'video-42829.appspot.com',
  messagingSenderId: '876716559497',
  appId: '1:876716559497:web:e45a1168af541b42490a58'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
