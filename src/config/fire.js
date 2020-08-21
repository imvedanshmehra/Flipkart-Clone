import { firebase } from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDSxXUqnR8AgNVCmZiJ6RBVWbYalXlXK5c",
  authDomain: "sk-store-2b052.firebaseapp.com",
  databaseURL: "https://sk-store-2b052.firebaseio.com",
  projectId: "sk-store-2b052",
  storageBucket: "sk-store-2b052.appspot.com",
  messagingSenderId: "973430845168",
  appId: "1:973430845168:web:631fdbf9c4d80871401c35",
};

const firebase = firebase.initializeApp(firebaseConfig);

export default firebase;
