import React from "react";
import './forms-module.css'
import { RxCross2 } from 'react-icons/rx'
import { useState } from "react";

export default function Register(props) {

	return (
		<div className="modal">

			<div className="modal-content">

				<form className="form">

					<div className="formHeading">Register</div>
					<RxCross2 className="crossBtn" onClick={props.closeModal} />

					<label className="label">eMail</label>
					<input className="formInput" />

					<label className="label">userName</label>
					<input className="formInput" />

					<label className="label">Password</label>
					<input className="formInput" />

					<label className="label">Confirm Password</label>
					<input className="formInput" />

					<button className="submitBtn">Register</button>
					<span className="alreadyAUserText">Already a user? Login...</span>
				</form>

			</div>
		</div>

	);
}
