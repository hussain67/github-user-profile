import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbord from "./pages/dashboard/Dashbord";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Dashbord />}
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
