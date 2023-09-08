import React from "react";
import './forms-module.css'
import { RxCross2 } from 'react-icons/rx'
import { useState } from "react";

export default function Register(props) {

	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [passrord, setPassword] = useState("");

	const handleChange = (e) => {
		console.log(e, e.target.value)
		e.value = e.target.value;
	}

	return (
		<div className="modal">

			<div className="modal-content">

				<form className="form">

					<div className="formHeading">Register</div>
					<RxCross2 className="crossBtn" onClick={props.closeModal} />

					<label className="label">eMail</label>
					<input type="email" className="formInput" value={email} onChange={handleChange}/>

					<label className="label">userName</label>
					<input type="text" className="formInput" value={useState} />

					<label className="label">Password</label>
					<input type="password" className="formInput" value={passrord}/>

					<label className="label">Confirm Password</label>
					<input type="password" className="formInput" />

					<button className="submitBtn">Register</button>
					<span className="alreadyAUserText">Already a user? Login...</span>
				</form>

			</div>
		</div>

	);
}
