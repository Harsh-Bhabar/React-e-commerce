import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Toast from "../Toast";
import { connect, useDispatch } from "react-redux";
import { userLoginSuccess, userLoginFailure } from "../../actions/LoginActions";
import { Dispatch } from "react";

function Login({ closeModal, users, user }) {
  const dispatch = useDispatch();
  const allRegisteredUsers = users.users;

  const [loginFormData, setLoginFormData] = useState({
    userEmail: "",
    userPass: "",
  });

  const [userFound, setUserFound] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const isValidUser = allRegisteredUsers.some(
      (user) =>
        user.email === loginFormData.userEmail &&
        user.password === loginFormData.userPass
    );

    if (isValidUser) {
      dispatch(userLoginSuccess(loginFormData));
      console.log("user found", user);
    } else {
      console.log("user not found", user);
      dispatch(userLoginFailure(loginFormData));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="formHeading">Sign in</div>
          <RxCross2 className="crossBtn" onClick={closeModal} />

          <label className="label">eMail</label>
          <input
            name="userEmail"
            className="formInput"
            value={loginFormData.userEmail}
            onChange={handleChange}
          />

          <label className="label">Password</label>
          <input
            name="userPass"
            className="formInput"
            value={loginFormData.userPass}
            onChange={handleChange}
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

const mapStateToProps = (state) => {
  return {
    users: state.users, // gives us all the registered users from the store
    user: state.user,
  };
};

export default connect(mapStateToProps, { userLoginSuccess, userLoginFailure })(
  Login
);
