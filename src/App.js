import "./App.css";
import HomePage from "./Components/HomePage";
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
