import { GoLocation } from "react-icons/go";
import { MdBusiness } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

import "./owner.scss";
import { useGithubContext } from "../../context/githubContext";

const Owner = () => {
	const { githubUser } = useGithubContext();
	if (githubUser === undefined) return;
	const { avatar_url, name, email, blog, bio, company, location } = githubUser;
	return (
		<article className="card owner">
			<header className="owner__header">
				<img
					src={avatar_url}
					alt="owner-pic"
				/>
				<div>
					<h3>{name}</h3>
					<p>{email}</p>
				</div>
				<a href={`https://${blog}`}>Follow</a>
			</header>
			<p className="owner__bio">{bio}</p>
			<div className="owner__links">
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
