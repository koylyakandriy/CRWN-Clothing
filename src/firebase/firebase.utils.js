import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyARgt2EnWLVZqgi2y3gi76ZUw0tUIzxGS4',
	authDomain: 'crwn-clothing-e1742.firebaseapp.com',
	databaseURL: 'https://crwn-clothing-e1742.firebaseio.com',
	projectId: 'crwn-clothing-e1742',
	storageBucket: 'crwn-clothing-e1742.appspot.com',
	messagingSenderId: '1078176484364',
	appId: '1:1078176484364:web:e5e83e40f39fb45c1ef229',
	measurementId: 'G-3581FJ5B2F',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
