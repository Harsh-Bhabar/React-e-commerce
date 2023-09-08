import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './forms-module.css'

export default function SearchBar() {
  return (
		  <div className=''>
			  <input className='searchBar' placeholder='Search here...' />
			  <BiSearch className='searchIcon' />
		  </div>
  )
}
