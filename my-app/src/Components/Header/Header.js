import React from 'react'
import PropTypes from 'prop-types'
import './header-module.css'
import SearchBar from '../Forms/SearchBar'
import { useState } from 'react';
import Register from '../Forms/Register';
import Login from '../Forms/Login';


export default function Header( props ) {

	const [currModal, setCurrModal] = useState("none");

	const loginModal = () => {
		setCurrModal("login");
		props.modalToOpen("login");
	}
	const registerModal = () => {
		setCurrModal("register");
		props.modalToOpen("register");
	}

  return (
	  <div className='header'>
		  <div className='leftHeader'>
		  	<SearchBar />
		  </div>
		  <div className='middleHeader'>
		  	<div className='logo'>
				  {props.title}
			</div>
		  </div>
		  <div className='rightHeader'>
			  <div className='register' onClick={registerModal}>Register</div>
			  <div className='login' onClick={loginModal} >Login</div>
			  <div className='cart'>CartIcon</div>
		  </div>
	</div>
  )
}

Header.defaultProps = {
	title : "MyApp",
	searchBarEnabled: true
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	searchBarEnabled: PropTypes.bool
}
