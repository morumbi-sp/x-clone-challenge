import { Metadata } from 'next';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDW_7jPGIxb6VH4Bq6lftL37hfdv4VJJ6Q',
  authDomain: 'x-cloning-nomad.firebaseapp.com',
  projectId: 'x-cloning-nomad',
  storageBucket: 'x-cloning-nomad.appspot.com',
  messagingSenderId: '148893911257',
  appId: '1:148893911257:web:b4098df0612e32dce616c8',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

export const metadata: Metadata = {
  title: 'Login',
  description: 'Cloning X',
};

export default function LoginPage() {
  return <div>home</div>;
}
