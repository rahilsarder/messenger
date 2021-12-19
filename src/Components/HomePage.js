import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

toast.configure();
function HomePage() {
	const notSignedIn = () =>
		toast.warn("You are not Signed In!!", { theme: "dark" });
	const fetchedData = () =>
		toast.success("Data Fetched", {
			position: toast.POSITION.BOTTOM_LEFT,
			autoClose: 1000,
			theme: "dark",
		});
	const route = useNavigate();
	const [data, setData] = useState([]);

	const getData = async () => {
		await fetch("http://localhost:8000/comments")
			.then((res) => {
				return res.json();
			})
			.then((result) => {
				setData(result);
				fetchedData();
			});
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			route("/signin");
			notSignedIn();
		}
	}, []);

	return (
		<div>
			<NavBar />
			<h1>HomePage!</h1>
			{/* <Button variant="primary" onClick={getData}>
				Get Data
			</Button> */}
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<Container maxWidth="sm"></Container>
				</Grid>
				<Grid item xs={8}>
					<Container maxWidth="lg">
						<Box
							sx={{
								bgcolor: "#282c34",
								height: "100vh",
								marginTop: "50px",
							}}
						>
							<CssBaseline />

							{data.map((ele) => {
								return (
									<div key={ele.id}>
										<li key={ele.id}>
											{ele.Name} Comment:
											{ele.Comment}
										</li>
									</div>
								);
							})}
						</Box>
					</Container>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</div>
	);
}

export default HomePage;
