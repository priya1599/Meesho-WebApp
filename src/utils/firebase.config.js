// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWCFqXdcrUda4aq78vGwBZjnTNd7S40hs",
  authDomain: "meesho-webapp.firebaseapp.com",
  projectId: "meesho-webapp",
  storageBucket: "meesho-webapp.appspot.com",
  messagingSenderId: "1045277792411",
  appId: "1:1045277792411:web:cc7144f54ed4de3640ce3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;