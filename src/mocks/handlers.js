import { rest } from "msw";
import mockUser from "./mockUser";

export const handlers = [
	rest.get("https://api.github.com/users/wesbos", (req, res, ctx) => {
		return res(ctx.json(mockUser));
	})
];
