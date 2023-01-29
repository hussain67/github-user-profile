import React from "react";
import { GoLocation } from "react-icons/go";
import { MdBusiness } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
//import { Link } from "react-router-dom";
import mockUser from "../../mocks/mockUser";
import "./owner.scss";

const { avatar_url, name, email, blog, bio, company, location } = mockUser;

const Owner = () => {
	return (
		<article className="user__card owner">
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
