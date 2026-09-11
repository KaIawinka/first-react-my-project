function Cart({ data }) {
	return (
		<div>
			<h2>{data.price}</h2>
			<h2>{data.title}</h2>
			{data.image && <img src={data.image} alt={data.title} />}
		</div>
	)
}

export default Cart