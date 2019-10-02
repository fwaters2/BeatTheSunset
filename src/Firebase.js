import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyApxcMFhJgKKrrB7bncKnNT9H0xnEaKoPw",
    authDomain: "beatthesunset-2d721.firebaseapp.com",
    databaseURL: "https://beatthesunset-2d721.firebaseio.com",
    projectId: "beatthesunset-2d721",
    storageBucket: "beatthesunset-2d721.appspot.com",
    messagingSenderId: "18741905234",
    appId: "1:18741905234:web:57a272f1c6f47d8bf4dc8b",
    measurementId: "G-2X3RL6VTGC"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase