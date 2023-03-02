import { GoLocation } from "react-icons/go";
import { MdBusiness } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

import "./owner.scss";
import { useGithubContext } from "../../context/githubContext";

const Owner = () => {
	const { githubUser } = useGithubContext();
	if (githubUser === undefined) return;
	const { avatar_url, html_url, name, email, blog, bio, company, location } = githubUser;
	return (
		<article className="card owner">
			<header className="owner-header">
				<img
					src={avatar_url}
					alt="owner-pic"
				/>
				<div>
					<h3>{name}</h3>
					<p>{email}</p>
				</div>
				<a href={html_url}>Follow</a>
			</header>
			<p className="owner-bio">{bio}</p>
			<div className="owner-links">
				<p>
					<MdBusiness />
					{company}
				</p>
				<p>
					<GoLocation />
					{location}
				</p>
				<a href={`https://${blog}`}>
					<AiOutlineLink /> {blog}
				</a>
			</div>
		</article>
	);
};

export default Owner;
