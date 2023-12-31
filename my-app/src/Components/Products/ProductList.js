import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../data'

export default function ProductList() {
  return (
	<div className='productList'>	
	{
		products.map((product) => (
			<ProductCard key={product.id} product = {product}/>
		))
	}
	  
	</div>
  )
}
