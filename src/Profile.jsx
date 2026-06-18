import React from "react";
import User from "./User.jsx";
import Cart from "./Cart.jsx";

const Profile = () => {
	let user = ["Asir", "Kutman", "Arthur"];
	function Change() {
		user[1] = "Kadyr"
		console.log(user);
	}
	let products = [
		{
			title: "Apple",
			price: "50",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CQiQTwDM0icaz7ZLMEj5drPCU_Q3UnLSdaROGKjSVg&s=10",
			id: 1
		},
		{
			title: "Orange",
			price: "120",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWojjxk7iFw1KAD88W1W91HrEroq5hSgTXCsNG6-8IQ&s=10",
			id: 2
		},
		{
			title: "Banana",
			price: "170",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AoLfTCxGsGceN3nxU1dkTvoxB4nE_7kauwJlw0g9wA&s=10",
			id: 3
		},
		{
			title: "Strawberry",
			price: "150",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpeGRBbN4f4cCRJDj8pw_3BUhRge24rJTv5aNLlxtjpg&s=10",
			id: 4
		}
	]

  return (
		<div>
			<h1>Profile</h1>
			<div>
				{
					user.map((item, index) => (
						<User key={index} user={item}/>
					))
				}
			</div>
			<button onClick={Change}>Change</button>

			<div style={{display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap"}}>
				{
					products.map((item, key) => (
						<div><br/>
							<p>{item.title}</p>
							<span>Цена: {item.price}</span><br/>
							<span>Key: {key}</span><br/>
							<span>ID: {item.id}</span><br/>
							<img src={item.image} style={{width: "100px", height: "100px"}}/>
							<Cart data={item}/>
						</div>
					))
				}
			</div>
		</div>
  );
};

export default Profile;