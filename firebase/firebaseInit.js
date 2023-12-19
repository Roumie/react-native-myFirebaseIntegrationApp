// firebaseInit.js
//Initialisation des services que l'on souhaite utiliser
//import 'firebase/firestore'; // Si vous utilisez Cloud Firestore
//import 'firebase/storage'; // Si vous utilisez Cloud Storage
//...
import { initializeApp } from  'firebase/app';
import { getAuth } from  'firebase/auth';
import { firebaseConfig } from  './firebaseConfig';

const  app  =  initializeApp(firebaseConfig);

// Exportez 'app' si vous avez besoin de l'utiliser ailleurs
export  const  auth  =  getAuth(app);
export  default  app;