import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAE9ouIet8tSzJPf05hMqxPy_1GIaqQ0GE",
    authDomain: "instagram-clone-react-f6d13.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-f6d13.firebaseio.com",
    projectId: "instagram-clone-react-f6d13",
    storageBucket: "instagram-clone-react-f6d13.appspot.com",
    messagingSenderId: "524732322239",
    appId: "1:524732322239:web:30afce134dffc16b2a110a",
    measurementId: "G-6N83J5SQT0"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
