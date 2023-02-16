import { useContext, createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, getUserInfo, onAuthStateChangedListner } from "../utils/firebase.utils";

const AuthContrext = createContext({
	currentUser: null,
	setCurrentUser: () => {}
});

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [displayName, setDisplayName] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner(async user => {
			if (user) {
				console.log(user);
				if (user.displayName) {
					await createUserDocumentFromAuth(user, { displayName: user.displayName });
				}
				const userData = await getUserInfo(user);

				if (userData) {
					setDisplayName(userData.displayName);
				}
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
