import React from 'react'
import './products-module.css'

export default function FeaturedCategories() {

	const categories = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			title: "SHIRT STYLE!",
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			title: "LOUNGEWEAR LOVE",
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
			title: "LIGHT JACKETS",
		},
	];

  return (
	  <div className='featuredCategories'>
		  <div className='category'>cat1</div>
		  <div className='category'>cat2</div>
		  <div className='category'>cat3</div>
		  <div className='category'>cat1</div>
		  <div className='category'>cat2</div>
		  <div className='category'>cat3</div>
		  <div className='category'>cat1</div>
		  <div className='category'>cat2</div>
		  <div className='category'>cat3</div>
	</div>
  )
}
