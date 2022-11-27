import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBw53yjkwihPfY6jbsd7GffpwFIq3BpwjY",
    authDomain: "sistema-c78a3.firebaseapp.com",
    projectId: "sistema-c78a3",
    storageBucket: "sistema-c78a3.appspot.com",
    messagingSenderId: "842273640267",
    appId: "1:842273640267:web:69696814bd3e21d43022ce",
    measurementId: "G-L0LF2JGBTF"
  };

    if (!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
    }
    export default firebase;