import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/error/Error";
import Dashboard from "./pages/dashboard/Dashboard";
import Authentication from "./pages/authentication/Authentication";

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Dashboard />}
					/>

					<Route
						path="/authentication"
						element={<Authentication />}
					/>
					<Route
						path="*"
						element={<Error />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
