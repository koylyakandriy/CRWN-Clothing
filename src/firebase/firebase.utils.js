import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyARgt2EnWLVZqgi2y3gi76ZUw0tUIzxGS4",
	authDomain: "crwn-clothing-e1742.firebaseapp.com",
	databaseURL: "https://crwn-clothing-e1742.firebaseio.com",
	projectId: "crwn-clothing-e1742",
	storageBucket: "crwn-clothing-e1742.appspot.com",
	messagingSenderId: "1078176484364",
	appId: "1:1078176484364:web:e5e83e40f39fb45c1ef229",
	measurementId: "G-3581FJ5B2F",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error creating user", err.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	
	await batch.commit()
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
