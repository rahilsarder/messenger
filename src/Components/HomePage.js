import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Alert, Button } from "react-bootstrap";
import { axios } from "axios";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

function HomePage() {
	const route = useNavigate();
	const [data, setData] = useState([]);

	const arr = ['rahil', 'sarder', 'bablu']
	const arr2 = [
		{'Name': "Rahil"},
		{'Name': "Sarder"},
		{'Name': "Bablu"},
	]

	// const getData = async () => {
	// 	const response = await fetch(
	// 		"https://messenger-cf12a-default-rtdb.firebaseio.com/Rahil.json"
	// 	);
	// 	const result = await response.json()
	// 	console.log(result);
	// 	setData(result, [...data])
	// 	console.log(data)
	// };


	const getData = async() => {
	 await	 fetch('https://messenger-cf12a-default-rtdb.firebaseio.com/Rahil.json').then((res) => {
			return	res.json()
			
		}).then((result) => {
			console.log(result)
			setData(result)
			console.log(data)	
		})
	}

	
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			route("/signin");
			// alert("Oops, you are not signed in!");
			<Alert variant="danger">Oops, you are not signed in!</Alert>;
		}
	}, []);

	useEffect(() => {
		// data.map((element) => {
		// 	return(
		// 		<div>
		// 			<li>
		// 				{element}
		// 			</li>
		// 		</div>
		// 	)
		// })
		getData()
		console.log('state updated')
	}, [])
	return (
		<div>
			<NavBar />
			<h1>HomePage!</h1>
			<Button variant="primary" onClick={getData}>
				Get Data
			</Button>


			<ul>
				{
					
					data !== [] ? data.map((element) => {
						return(
							<div>
								<li>
									{element}
								</li>
							</div>
						)
					}) : null 
					
				}
			</ul>
		</div>
	);
}

export default HomePage;
