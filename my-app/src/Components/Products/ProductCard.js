import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

export default function ProductCard({ product }) {
	return (
		<div className='productCard'>
			<div className='productImage'>
				<img src={product.imgUrl} alt='productImg' />
			</div>
			<div className='productActionBtns'>
				<AiOutlineHeart />
				<AiOutlineShoppingCart />
				<span>${product.price}</span>
			</div>
		</div>
	)
}
