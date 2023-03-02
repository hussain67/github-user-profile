import { useContext, createContext, useEffect, useState } from "react";
import { getUserInfo, onAuthStateChangedListner } from "../utils/firebase.utils";

const AuthContrext = createContext({
	currentUser: null,
	setCurrentUser: () => {}
});

const AuthProvider = ({ children }) => {
	const [checkingStatus, setCheckingStatus] = useState(true);
	const [currentUser, setCurrentUser] = useState(false);
	const [displayName, setDisplayName] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListner(user => {
			if (user) {
				if (user.displayName) {
					setDisplayName(user.displayName);
					setCurrentUser(true);
				} else {
					const getDisplayName = async () => {
						const userData = await getUserInfo(user);

						userData.displayName ? setDisplayName(userData.displayName) : setDisplayName("");
					};
					getDisplayName();
					setCurrentUser(true);
				}
			}
			setCheckingStatus(false);
		});
		return unsubscribe;
	}, []);

	const value = { checkingStatus, displayName, setDisplayName, currentUser, setCurrentUser };
	return <AuthContrext.Provider value={value}>{children}</AuthContrext.Provider>;
};
const useAuthContext = () => useContext(AuthContrext);
export { AuthProvider, useAuthContext };
