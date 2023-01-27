import React from "react";
//import { GoRepo } from "react-icons/go";

const InfoItem = ({ icon, label, value, color }) => {
	return (
		<article>
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	);
};

export default InfoItem;
