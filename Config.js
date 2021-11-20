import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCA4JOp-wT_aa00Srx32SI3KHnUdNm6fO4",
    authDomain: "book-center-eabae.firebaseapp.com",
    projectId: "book-center-eabae",
    storageBucket: "book-center-eabae.appspot.com",
    messagingSenderId: "138107176250",
    appId: "1:138107176250:web:2540ced40c03553f877c03"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
