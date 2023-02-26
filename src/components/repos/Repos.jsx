import React from "react";
import "./repos.scss";
import ChartColumn from "./ChartColumn";
import ChartPie from "./ChartPie";
import { useGithubContext } from "../../context/githubContext";

const Repos = () => {
	const { repos } = useGithubContext();
	const languages = repos.reduce((total, item) => {
		//Most used languages
		let { language } = item;
		if (!language) return total;
		if (!total[language]) {
			total[language] = { name: language, value: 1 };
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1
			};
		}
		return total;
	}, {});

	const mostUsedLanguages = Object.values(languages)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0, 4);

	//Most populer
	const stars = repos.reduce((total, item) => {
		const { name, stargazers_count } = item;
		if (!total[name]) {
			total[name] = { name: name, stars: stargazers_count };
		} else {
			total[name] = {
				...total[name],
				stars: total[name].stars + stargazers_count
			};
		}

		return total;
	}, {});
	const mostPopularRepos = Object.values(stars)
		.sort((a, b) => {
			return b.stars - a.stars;
		})
		.slice(0, 3);
	console.log(mostPopularRepos);

	return (
		<section className="page-section">
			<div className="repos">
				<ChartPie data={mostUsedLanguages} />
				<ChartColumn data={mostPopularRepos} />
			</div>
		</section>
	);
};

export default Repos;
