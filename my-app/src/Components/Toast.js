import React from 'react'

export default function Toast({success}) {
  return (
	<div>
	  	{success ? alert("User found") : alert("User not dound")}
	</div>
  )
}
