import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { signOutUser } from "../../utils/firebase.utils";
import "./navBar.scss";

const NavBar = () => {
	const navigate = useNavigate();
	const { displayName, setDisplayName } = useAuthContext();
	const onClickHandler = () => {
		setDisplayName("");
		signOutUser();
		navigate("/authentication");
	};
	return (
		<div>
			{displayName && (
				<>
					<h1>Welcome : {displayName}</h1>
					<button onClick={onClickHandler}>Sign Out</button>
				</>
			)}
		</div>
	);
};

export default NavBar;
