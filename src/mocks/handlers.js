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
	})
];
