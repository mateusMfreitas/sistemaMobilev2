import { initializeApp } from 'firebase/app';
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
const db = getFirestore(app);
export { db };