import React from "react";
import "./forms-module.css";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Register({ closeModal, registerUser }) {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [passrord, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		
		//validations 
		registerUser(email, userName, passrord);

		setEmail("");
		setPassword("");
		setUserName("");
		setConfPassword("");
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<form className="form">
					<div className="formHeading">Register</div>
					<RxCross2 className="crossBtn" onClick={closeModal} />

					<label className="label">eMail</label>
					<input
						type="email"
						className="formInput"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label className="label">userName</label>
					<input
						type="text"
						className="formInput"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>

					<label className="label">Password</label>
					<input
						type="password"
						className="formInput"
						value={passrord}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<label className="label">Confirm Password</label>
					<input
						type="password"
						className="formInput"
						value={confPassword}
						onChange={(e) => setConfPassword(e.target.value)}
					/>

					<button className="submitBtn" onClick={submitForm}>
						Register
					</button>
					<span className="alreadyAUserText">Already a user? Login...</span>
				</form>
			</div>
		</div>
	);
}
