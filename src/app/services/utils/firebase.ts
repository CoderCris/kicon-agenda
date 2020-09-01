import * as firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyCVAiuBTodBdyNsdgGSEBDL7LGRTuu74UM",
    authDomain: "kikon-agenda-9a8ce.firebaseapp.com",
    databaseURL: "https://kikon-agenda-9a8ce.firebaseio.com",
    projectId: "kikon-agenda-9a8ce",
    storageBucket: "kikon-agenda-9a8ce.appspot.com",
    messagingSenderId: "1082170826462",
    appId: "1:1082170826462:web:095412d86fec36b3502c4f",
    measurementId: "G-NF4KZRXFYQ"
  }


export const app = firebase.initializeApp(config);
export const db = firebase.firestore(app);
