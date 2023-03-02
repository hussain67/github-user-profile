import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const rootUrl = "https://api.github.com";

export const githubContext = createContext();

const initialUser = {
	name: "wes  initial",
	email: "webbos@yahoo.com",
	public_repos: 20,
	followers: 2000,
	following: 200,
	public_gists: 20
};

const GithubProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("wesbos");
	const [githubUser, setGithubUser] = useState(initialUser);
	const [repos, setRepos] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const getUser = async () => {
			try {
				const response = await axios.get(`${rootUrl}/users/${searchTerm}`);

				if (response) {
					setGithubUser(response.data);

					const { repos_url } = response.data;
					const repos = await axios.get(repos_url);
					if (repos) {
						setRepos(repos.data);
					}

					const { followers_url } = response.data;

					const followers = await axios.get(followers_url);
					if (followers) {
						setFollowers(followers.data);
					}
					setError(false);
				}
			} catch (error) {
				setError(true);
			}
			setIsLoading(false);
		};
		getUser();
	}, [searchTerm]);

	const value = { githubUser, repos, followers, setSearchTerm, isLoading, error };
	return <githubContext.Provider value={value}>{children}</githubContext.Provider>;
};
const useGithubContext = () => useContext(githubContext);

export { GithubProvider, useGithubContext };
