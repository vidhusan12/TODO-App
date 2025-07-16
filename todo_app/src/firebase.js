// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9JHqimpVMtOcuWL9luOqUV6_qQeLT1AU",
  authDomain: "todo-app-80c26.firebaseapp.com",
  projectId: "todo-app-80c26",
  storageBucket: "todo-app-80c26.firebasestorage.app",
  messagingSenderId: "562921755192",
  appId: "1:562921755192:web:1d45f78add41a4642e8ccd",
  measurementId: "G-BN9DQ8QLEG"
});

const db = firebase.firestore();

export default db;