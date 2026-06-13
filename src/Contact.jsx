import React from 'react';

const Contact = (props) => {
	return (
		<>
			<div style={{width: "30%",
									 height: "280px",
									 border: "1px solid gray",
									 display: "flex",
									 alignItems: "center",
									 justifyContent: "center"}}>
				<h3>
					{props.name}
					{props.age}
					<img src={props.image} style={{width: "100%", height: "200px"}}></img>
				</h3>
			</div>
		</>
	)
}

export default Contact