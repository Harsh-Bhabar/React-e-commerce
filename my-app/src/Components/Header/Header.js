import React from 'react'
import PropTypes from 'prop-types'
import './header-module.css'

export default function Header( props ) {
  return (
	  <div className='header'>
		  <div className='leftHeader'>
		  	<div className='searchBar'>
				search bar
			</div>
		  </div>
		  <div className='middleHeader'>
		  	<div className='logo'>
				  {props.title}
			</div>
		  </div>
		  <div className='rightHeader'>
			  <div className='register'>Register</div>
			  <div className='login'>Login</div>
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