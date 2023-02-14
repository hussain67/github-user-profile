import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase.utils";

export const AuthContrext = createContext({
	currentUser: null,
	setCurrentUser: () => {}
});

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner(user => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});
		return unsubscribe;
	}, []);
	console.log(currentUser);

	const value = { currentUser, setCurrentUser };
	return <AuthContrext.Provider value={value}>{children}</AuthContrext.Provider>;
};
