import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";
import { useGithubContext } from "../../context/githubContext";
const Search = () => {
	const { setSearchTerm, error } = useGithubContext();
	const [searchWord, setSearchWord] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (searchWord) setSearchTerm(searchWord);
	};
	return (
		<article className="page-section">
			<form
				className="search"
				onSubmit={handleSubmit}
			>
				<button className="btn-icon">{<AiOutlineSearch />}</button>
				<input
					type="text"
					placeholder="Enter Github User"
					onChange={e => setSearchWord(e.target.value)}
					value={searchWord}
				/>
				<button className="btn btn-search">Search</button>
			</form>
			{error && (
				<div className="search-msg">
					<h3>No user found with this user name</h3>
				</div>
			)}
		</article>
	);
};

export default Search;
