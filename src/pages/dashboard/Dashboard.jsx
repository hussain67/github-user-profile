import React from "react";
import Info from "../../components/Info/Info";
import Search from "../../components/search/Search";
import User from "../../components/user/User";

const Dashboard = () => {
	return (
		<div className="">
			Dashboard
			<Search />
			<Info />
			<User />
		</div>
	);
};

export default Dashboard;
