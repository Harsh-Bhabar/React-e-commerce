import React from "react";
import './forms-module.css'
import { RxCross2 } from 'react-icons/rx'

export default function Register() {
	return (
		<div className="register-modal">

			<form className="register-form">

				<div className="registerHeading">Register</div>
				<RxCross2 className="registerCrossBtn"/>

				<label className="label">eMail</label>
				<input className="formInput" />

				<label className="label">userName</label>
				<input className="formInput" />

				<label className="label">Password</label>
				<input className="formInput" />

				<label className="label">Confirm Password</label>
				<input className="formInput" />

				<button className="submitBtn">Register</button>

			</form>

		</div>
	);
}
