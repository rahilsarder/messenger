import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
	const route = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const API_KEY = "AIzaSyD1NQFUatBF0wl0hcsVhnq1FN3Q9w0r31s";
	const handleLogin = async (e) => {
		e.preventDefault();
		console.log(email, password);
		try {
			const response = await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}&email=${email}&password=${password}`
			);
			localStorage.setItem("token", response.data.idToken);
			{
				response.data.idToken ? route("/") : route("/signin");
			}
			<Alert variant="success">Welcome</Alert>;
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div>
			<h1>SignIn Page</h1>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default Signin;
