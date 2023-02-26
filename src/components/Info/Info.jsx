import React, { useContext } from "react";
import InfoItem from "./InfoItem";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import "./Info.scss";

import { githubContext } from "../../context/githubContext";

const Info = () => {
	const { githubUser } = useContext(githubContext);

	if (githubUser === undefined) return;

	const { public_repos, followers, following, public_gists } = githubUser;

	const items = [
		{
			id: 1,
			icon: <GoRepo />,
			label: "Repos",
			value: public_repos, //328
			color: "pink"
		},
		{
			id: 2,
			icon: <FiUsers />,
			label: "Followers",
			value: followers,
			color: "green"
		},
		{
			id: 3,
			icon: <FiUserPlus />,
			label: "Following",
			value: following,
			color: "blue"
		},
		{
			id: 4,
			icon: <GoGist />,
			label: "Gists",
			value: public_gists,
			color: "yellow"
		}
	];
	return (
		<section className="page-section info">
			{items.map(data => (
				<InfoItem
					{...data}
					key={data.id}
				/>
			))}
		</section>
	);
};

export default Info;
