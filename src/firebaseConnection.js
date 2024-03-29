import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAG4vFg6KKzbHWxDf43hnXR4XccqxWxVA0",
    authDomain: "aeroporto-taxi.firebaseapp.com",
    projectId: "aeroporto-taxi",
    storageBucket: "aeroporto-taxi.appspot.com",
    messagingSenderId: "33568516193",
    appId: "1:33568516193:web:60a8f85be9a0b6dc412220",
    measurementId: "G-CK7CR6LWQQ"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  
  export { db };