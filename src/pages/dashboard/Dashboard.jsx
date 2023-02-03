import React from "react";
import Info from "../../components/Info/Info";
import Search from "../../components/search/Search";
import User from "../../components/user/User";
import { useGithubContext } from "../../context/githubContext";
import loadingImage from "../../images/preloader.gif";
import "./dashboard.scss";

const Dashboard = () => {
	const { isLoading } = useGithubContext();
	console.log(isLoading);
	if (isLoading) {
		return (
			<main className="">
				<Search />
				<img
					src={loadingImage}
					alt="loading"
					className="loading"
				/>
			</main>
		);
	}
	return (
		<main className="">
			Dashboard
			<Search />
			<Info />
			<User />
		</main>
	);
};

export default Dashboard;
