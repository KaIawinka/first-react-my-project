import React from 'react';

const Contact = (props) => {
	return (
		<>
			<div style={{width: "30%",
									 height: "280px",
									 display: "flex",
									 alignItems: "center",
									 justifyContent: "center"}}>
				<h3>
					{props.name}
					{props.age}
					<img src={props.image} style={{width: "100%",
																				 height: "260px",
																				 objectFit: "cover"}}></img>
				</h3>
			</div>
		</>
	)
}

export default Contact