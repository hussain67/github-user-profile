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
		<div className="nav-bar">
			<p>Welcome {displayName && <span className="display-name">: {displayName} </span>}</p>
			<button
				onClick={onClickHandler}
				className="btn"
			>
				Sign out
			</button>
		</div>
	);
};

export default NavBar;
