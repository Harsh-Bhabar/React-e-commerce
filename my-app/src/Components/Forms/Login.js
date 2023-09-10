import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Toast from '../Toast';

export default function Login({ closeModal, loginUser }) {
	const [userEmail, setUserEmail] = useState("");
	const [userPass, setUserPass] = useState("");
	const [userFound, setUserFound] = useState(false);
	const [showToast, setShowToast] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior

		const newUser = {
			userEmail,
			userPass,
		};
		const validUser = await loginUser(newUser);

		setUserFound(validUser);
		setShowToast(true);

		setUserEmail("");
		setUserPass("");
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<form className="form" onSubmit={handleSubmit}>
					<div className="formHeading">Sign in</div>
					<RxCross2 className="crossBtn" onClick={closeModal} />

					<label className="label">eMail</label>
					<input
						className="formInput"
						value={userEmail}
						onChange={(e) => setUserEmail(e.target.value)}
					/>

					<label className="label">Password</label>
					<input
						className="formInput"
						value={userPass}
						onChange={(e) => setUserPass(e.target.value)}
					/>

					<button className="submitBtn" type="submit">
						Login
					</button>
					<span className="alreadyAUserText">Not a user? Register...</span>
				</form>

				{showToast && <Toast success={userFound} />}
			</div>
		</div>
	);
}
