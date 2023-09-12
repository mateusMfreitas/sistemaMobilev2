import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

import { getFirestore } from 'firebase/firestore';

// Initialize Firebase/
const firebaseConfig = {
    apiKey: "AIzaSyCWfXxUrzi_2ocVhxJnCst1osJvgs6sz-o",
    authDomain: "mg-sistema-mobile.firebaseapp.com",
    databaseURL: "https://mg-sistema-mobile-default-rtdb.firebaseio.com",
    projectId: "mg-sistema-mobile",
    storageBucket: "mg-sistema-mobile.appspot.com",
    messagingSenderId: "642732426860",
    appId: "1:642732426860:web:806d252735b85d3643fa49",
    measurementId: "G-6ZF2JTFLM9"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const db = getFirestore(app);
export { db };