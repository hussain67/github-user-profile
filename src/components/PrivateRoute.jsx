import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import loadingImage from "../images/preloader.gif";

const PrivateRoute = ({ children }) => {
	const { checkingStatus, currentUser } = useAuthContext();
	console.log("PrivateRoute", checkingStatus);
	if (checkingStatus) {
		return (
			<img
				src={loadingImage}
				alt="loading"
				className="loading"
			/>
		);
	}

	return currentUser ? children : <Navigate to={"/authentication"} />;
};

export default PrivateRoute;
