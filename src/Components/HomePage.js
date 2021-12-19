import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Alert, Button } from "react-bootstrap";
import { axios } from "axios";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

function HomePage() {
	const route = useNavigate();
	const [data, setData] = useState([]);

	const getData = async (e) => {
		e.preventDefault();
		await fetch("http://localhost:8000/comments")
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				console.log(result);
				setData(result);
				console.log(data);
			});
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

			<ul>
				{data.map((ele) => {
					return (
						<div>
							<li key={ele.id}>
								{ele.Name} Comment: {ele.Comment}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default HomePage;
