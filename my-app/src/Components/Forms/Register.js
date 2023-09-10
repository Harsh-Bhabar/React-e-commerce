import React from "react";
import "./forms-module.css";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { registerUser } from "../../actions/RegisterActions";
 

function Register({ closeModal, users }) {
	const dispatch = useDispatch();

	const [registerationFormData, setRegisterationFormData] = useState({
		userName : "",
		email: "",
		password: "",
		confPassword: ""
	})

	const handleChange = (e) => {
		const {name, value} = e.target;
		setRegisterationFormData({
			...registerationFormData,
			[name] : value
		});
	}

	const submitForm = (e) => {
		e.preventDefault();
		// validations , no need of confPass
		dispatch(registerUser(registerationFormData));
	};

	return (
		<div className="modal">
			<div className="modal-content">



				<form className="form">
					<div className="formHeading">Register</div>
					<RxCross2 className="crossBtn" onClick={closeModal} />

					<label className="label">eMail</label>
					<input
						name="email"
						type="email"
						className="formInput"
						value={registerationFormData.email}
						onChange={handleChange}
					/>

					<label className="label">userName</label>
					<input
						name="userName"
						type="text"
						className="formInput"
						value={registerationFormData.userName}
						onChange={handleChange}
					/>

					<label className="label">Password</label>
					<input
						name="password"
						type="password"
						className="formInput"
						value={registerationFormData.password}
						onChange={handleChange}
					/>

					<label className="label">Confirm Password</label>
					<input
						name="confPassword"
						type="password"
						className="formInput"
						value={registerationFormData.confPassword}
						onChange={handleChange}
					/>

					<button type="submit" className="submitBtn" onClick={submitForm}>
						Register
					</button>
					<span className="alreadyAUserText">Already a user? Login...</span>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		users: state.users // name should match the one in rootreducer  and pass it in props 
	}
}

export default connect(mapStateToProps, {registerUser})(Register);