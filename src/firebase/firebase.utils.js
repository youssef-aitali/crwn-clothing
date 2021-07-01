import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXSZ9GGfaPUoZucfL8DKOA0FoiDWXQQ78",
    authDomain: "crwn-db-6ad76.firebaseapp.com",
    projectId: "crwn-db-6ad76",
    storageBucket: "crwn-db-6ad76.appspot.com",
    messagingSenderId: "961933014646",
    appId: "1:961933014646:web:1e516e9ab80d14fe905157",
    measurementId: "G-MM4K3PZE65"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;