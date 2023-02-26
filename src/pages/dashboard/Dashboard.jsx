import React from "react";
import Info from "../../components/Info/Info";
import NavBar from "../../components/navbar/NavBar";
import Repos from "../../components/repos/Repos";
import Search from "../../components/search/Search";
import User from "../../components/user/User";
import { useGithubContext } from "../../context/githubContext";
import loadingImage from "../../images/preloader.gif";
import "./dashboard.scss";

const Dashboard = () => {
	const { isLoading } = useGithubContext();

	if (isLoading) {
		return (
			<main className="">
				<NavBar />
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
			<NavBar />
			<Search />
			<Info />
			<User />
			<Repos />
		</main>
	);
};

export default Dashboard;
