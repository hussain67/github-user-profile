import React from "react";
import "./InfoItem.scss";

const InfoItem = ({ icon, label, value, color }) => {
	return (
		<article className="info-item">
			<span className={color}>{icon}</span>
			<div>
				<h3>{value}</h3>
				<p>{label}</p>
			</div>
		</article>
	);
};

export default InfoItem;
