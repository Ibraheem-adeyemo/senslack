import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxHpxgY11o5ChyABLL2OtpC5845ekTpYM",
    authDomain: "senslack-4fcb0.firebaseapp.com",
    databaseURL: "https://senslack-4fcb0.firebaseio.com",
    projectId: "senslack-4fcb0",
    storageBucket: "senslack-4fcb0.appspot.com",
    messagingSenderId: "265026282873",
    appId: "1:265026282873:web:8b87f20e7e5e5a6a993ba8",
    measurementId: "G-KM78WHJHMC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }