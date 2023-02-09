// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDt1AQNseBiImeoDZ_VKTgl8cZ2yoxnFj0",
	authDomain: "github-user-profile-755dc.firebaseapp.com",
	projectId: "github-user-profile-755dc",
	storageBucket: "github-user-profile-755dc.appspot.com",
	messagingSenderId: "93893525363",
	appId: "1:93893525363:web:0122ea74169f61dd57cf06"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

// Create user document
const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	// Create a reference and path for the document for the collection "users"
	const userDocRef = doc(db, "users", userAuth.uid);

	// Get the data of the user
	let snapShot = await getDoc(userDocRef);

	// If the user data does not exists
	if (!snapShot.exists()) {
		const { email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				email,
				createdAt,
				...additionalInformation
			});
			let snapShot = await getDoc(userDocRef);

			return snapShot.data();
		} catch (error) {
			console.log(error.message);
		}
	}
};

// Get user info
export const getUserInfo = async userAut => {
	// create  areferance and path for the document for the collection 'users'
	const userDocRef = doc(db, "users", userAut.uid);

	// Get the user data
	let snapShot = await getDoc(userDocRef);
	if (snapShot.exists()) {
		return snapShot.data();
	}
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = callback => onAuthStateChanged(auth, callback);
