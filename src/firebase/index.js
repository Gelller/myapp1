// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyAGzzTptYi5WoqzrqyUsMkDo9Saib4QM4Y",
    authDomain: "myapp1-2b4d3.firebaseapp.com",
    projectId: "myapp1-2b4d3",
    storageBucket: "myapp1-2b4d3.appspot.com",
    messagingSenderId: "414188414927",
    appId: "1:414188414927:web:d893652fd338d967f014ba"
};

export const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;

