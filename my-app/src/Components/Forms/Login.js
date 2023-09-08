import React from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function Login(props) {
  return (
	  <div className="modal">

		  <div className="modal-content">

			  <form className="form">

				  <div className="formHeading">Sign in</div>
				  <RxCross2 className="crossBtn" onClick={props.closeModal} />

				  <label className="label">userName / eMail</label>
				  <input className="formInput" />

				  <label className="label">Password</label>
				  <input className="formInput" />

				  <button className="submitBtn">Login</button>
				  <span className="alreadyAUserText">Not a user? Register...</span>
			  </form>

		  </div>
	  </div>
  )
}
