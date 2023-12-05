import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyClSelpvBqYCAVjmE0syIiBxpQ060aTrhU",
    authDomain: "metercount-2a16c.firebaseapp.com",
    databaseURL: "https://metercount-2a16c-default-rtdb.firebaseio.com",
    projectId: "metercount-2a16c",
    storageBucket: "metercount-2a16c.appspot.com",
    messagingSenderId: "313025549695",
    appId: "1:313025549695:web:5adeaab61d36285a05b64a",
    measurementId: "G-HD0BP3RXTC"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataRef=firebase.database();
  export default firebase;