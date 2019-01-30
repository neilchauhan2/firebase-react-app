import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var config = {
    apiKey: "AIzaSyDdE3-68cBryedvC3O0uq0locA8TEcgjlk",
    authDomain: "fir-react-app-18c16.firebaseapp.com",
    databaseURL: "https://fir-react-app-18c16.firebaseio.com",
    projectId: "fir-react-app-18c16",
    storageBucket: "fir-react-app-18c16.appspot.com",
    messagingSenderId: "690976374376"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timeStampsinSnapshots: true})
  export default firebase;