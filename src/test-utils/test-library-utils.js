import { render } from "@testing-library/react";
import { GithubProvider } from "../context/githubContext";

const renderWithContext = (ui, options) => {
	render(ui, { wrapper: GithubProvider, ...options });
};
// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
