import React from 'react'

function Cart(data) {
	return (
		<div>
			<h2>{data.price}</h2>
			<h2>{data.title}</h2>
			<h2>{data.image}</h2>
			<h2>{data.id}</h2>
		</div>
	)
}

export default Cart