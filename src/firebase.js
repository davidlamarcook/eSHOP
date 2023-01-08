import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASRpMrgmXgl827AklwSieXGdVIy9vqvEM",
    authDomain: "eshop-d637d.firebaseapp.com",
    projectId: "eshop-d637d",
    storageBucket: "eshop-d637d.appspot.com",
    messagingSenderId: "618435088948",
    appId: "1:618435088948:web:5d3094345f82157780b061",
    measurementId: "G-FV0KMV7T2Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };