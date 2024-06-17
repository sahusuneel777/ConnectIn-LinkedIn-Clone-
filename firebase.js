import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/storage"


const firebaseConfig = {
  apiKey: "AIzaSyADumu4QXdsihElynv9u44jR8NFkPS_1JA",
  authDomain: "linkedin-d3f83.firebaseapp.com",
  projectId: "linkedin-d3f83",
  storageBucket: "linkedin-d3f83.appspot.com",
  messagingSenderId: "874621039749",
  appId: "1:874621039749:web:015b81115983e1d7cee5ec"
};
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};