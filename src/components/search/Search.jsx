import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";
import { useGithubContext } from "../../context/githubContext";
const Search = () => {
	const { setSearchTerm } = useGithubContext();
	const [searchWord, setSearchWord] = useState("");

	const handleClick = () => {
		if (searchWord) setSearchTerm(searchWord);
	};
	return (
		<article className="page-section">
			<div className="search">
				<button className="btn btn-icon">{<AiOutlineSearch />}</button>
				<input
					type="text"
					placeholder="Enter Github User"
					onChange={e => setSearchWord(e.target.value)}
					value={searchWord}
				/>
				<button
					className="btn btn-search"
					onClick={handleClick}
				>
					Search
				</button>
			</div>
		</article>
	);
};

export default Search;
