import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Toast from '../Toast';

export default function Login({ closeModal, loginUser }) {
	const [userEmail, setUserEmail] = useState("");
	const [userPass, setUserPass] = useState("");
	const [userFound, setUserFound] = useState(false);
	const [showToast, setShowToast] = useState(false);

	const submitForm = async (e) => {
		e.preventDefault();
		const newUser = {
			userEmail,
			userPass,
		};
		const validUser = await loginUser(newUser);

		// Set the userFound state
		setUserFound(validUser);

		// Show the toast based on the userFound result
		setShowToast(true);

		// Clear input fields
		setUserEmail("");
		setUserPass("");
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<form className="form" onSubmit={submitForm}>
					<div className="formHeading">Sign in</div>
					<RxCross2 className="crossBtn" onClick={closeModal} />

					<label className="label">eMail</label>
					<input className="formInput" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

					<label className="label">Password</label>
					<input className="formInput" value={userPass} onChange={(e) => setUserPass(e.target.value)} />

					<button className="submitBtn" type="submit">
						Login
					</button>
					<span className="alreadyAUserText">Not a user? Register...</span>
				</form>

				{showToast && <Toast success={userFound} />} {/* Conditionally render the Toast component */}
			</div>
		</div>
	);
}
