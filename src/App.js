import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/error/Error";
import Dashboard from "./pages/dashboard/Dashboard";
import Authentication from "./pages/authentication/Authentication";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
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
