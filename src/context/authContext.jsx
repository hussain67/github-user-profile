import { useContext, createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, getUserInfo, onAuthStateChangedListner } from "../utils/firebase.utils";

const AuthContrext = createContext({
	currentUser: null,
	setCurrentUser: () => {}
});

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [displayName, setDisplayName] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner(async user => {
			if (user.displayName) {
				setDisplayName(user.displayName);
				await createUserDocumentFromAuth(user, { displayName: user.displayName });
			}
		});
		return unsubscribe;
	}, []);
	//console.log(displayName);

	const value = { displayName, setDisplayName, currentUser, setCurrentUser };
	return <AuthContrext.Provider value={value}>{children}</AuthContrext.Provider>;
};
const useAuthContext = () => useContext(AuthContrext);
export { AuthProvider, useAuthContext };
