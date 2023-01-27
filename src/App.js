import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import Dashboard from "./pages/dashboard/Dashboard";

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
						path="/login"
						element={<Login />}
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
