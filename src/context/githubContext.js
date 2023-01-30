import axios from "axios";
import { createContext, useEffect, useState } from "react";

const rootUrl = "https://api.github.com";

//- [Get User](https://api.github.com/users/wesbos)
//- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
//- [Followers](https://api.github.com/users/john-smilga/followers)

export const githubContext = createContext();

const initialUser = {
	public_repos: 20,
	followers: 2000,
	following: 200,
	public_gists: 20
};

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(initialUser);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getUser = async () => {
			try {
				const response = await axios.get(`${rootUrl}/users/wesbos`);

				if (response) {
					setGithubUser(response.data);
				}
			} catch (error) {
				setError(true);
			}
		};
		getUser();
	}, []);
	const value = { githubUser };
	return <githubContext.Provider value={value}>{children}</githubContext.Provider>;
};

export { GithubProvider };
