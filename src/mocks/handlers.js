import { rest } from "msw";
import mockUser from "./mockUser";
import mockRepos from "./mockRepos";
import mockFollowers from "./mockFollowers";

export const handlers = [
	rest.get("https://api.github.com/users/wesbos", (req, res, ctx) => {
		return res(ctx.json(mockUser));
	}),
	rest.get("https://api.github.com/users/wesbos/repos", (req, res, ctx) => {
		return res(ctx.json(mockRepos));
	}),

	rest.get("https://api.github.com/users/wesbos/followers", (req, res, ctx) => {
		return res(ctx.json(mockFollowers));
	}),
	rest.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword", (req, res, ctx) => {
		console.log("fine");
		return res(ctx.json({ createdAt: "32", displayName: "Shahid", email: "hussain.msh67@yahoo.com" }));
	})
];
