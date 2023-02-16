import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const PrivateRoute = ({ children }) => {
	//const navigate = useNavigate();
	const { displayName } = useAuthContext();
	console.log(displayName);
	if (!displayName) {
		return <Navigate to={"/authentication"} />;
	}
	return children;
};

export default PrivateRoute;
