import React from "react";
import followers from "../../mocks/mockFollowers";
import "./followers.scss";

const Followers = () => {
	return (
		<article className="user__card followers">
			Followers
			{followers.map(follower => {
				const { id, avatar_url, login, html_url } = follower;
				return (
					<li key={id}>
						<img
							src={avatar_url}
							alt="follower-pic"
						/>
						<div>
							<h3>{login}</h3>
							<a href={html_url}>{html_url}</a>
						</div>
					</li>
				);
			})}
		</article>
	);
};

export default Followers;
