import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANhf9KEq_Nm2QH7XE3Ck2LE3FjBx1YQ4o",
  authDomain: "rnfirebase-29a4d.firebaseapp.com",
  projectId: "rnfirebase-29a4d",
  storageBucket: "rnfirebase-29a4d.appspot.com",
  messagingSenderId: "637894547809",
  appId: "1:637894547809:web:62e819ccbff29e9fb50d20",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
