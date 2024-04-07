// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkWLvezXmK1VcZkZDQpCNacmdL8aSmoWo",
  authDomain: "vix-news.firebaseapp.com",
  projectId: "vix-news",
  storageBucket: "vix-news.appspot.com",
  messagingSenderId: "276983596041",
  appId: "1:276983596041:web:eac2b7ecd2cc66a27e64d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;
