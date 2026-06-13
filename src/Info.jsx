import React from 'react'
import './info.css'

function Info(props) {
	return (
		<div className="card-item">
			<img src={props.img}></img>
			<div className="card-list">
				<h3>{props.name}</h3>
				<div className="info">{props.info}</div>
			</div>
		</div>
	)
}

export default Info
