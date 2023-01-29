import React from "react";
import Followers from "./Followers";
import Owner from "./Owner";
import "./user.scss";

const User = () => {
	return (
		<section className="page-section user">
			<Owner />
			<Followers />
		</section>
	);
};

export default User;
