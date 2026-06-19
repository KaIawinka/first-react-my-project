import React from 'react'
import "./card.css";

function UserName(props) {
	return (
		<div className="main">
			{props.products.map((prod) => (
				<div className="card-item" key={prod.id}>
					<img src={prod.image}></img>
					<div className="card-list">
						<h3>{prod.title}</h3>
						<div className="info">{prod.price} - сом</div>
						<div className="info">ID - {prod.id}</div>
						<span></span>
					</div>
				</div>
			))}
		</div>
	)
}

export default UserName
