import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Alert, Button } from "react-bootstrap";
import { axios } from "axios";

function HomePage() {
	const route = useNavigate();
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await fetch(
			"https://messenger-cf12a-default-rtdb.firebaseio.com/Rahil"
		);
		console.log(response);
	};
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			route("/signin");
			// alert("Oops, you are not signed in!");
			<Alert variant="danger">Oops, you are not signed in!</Alert>;
		}
	}, []);
	return (
		<div>
			<NavBar />
			<h1>HomePage!</h1>
			<Button variant="primary" onClick={getData}>
				Get Data
			</Button>
		</div>
	);
}

export default HomePage;
