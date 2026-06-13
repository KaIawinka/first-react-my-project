import React, {Component} from "react";
class myComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timer: 0
		}
	}

	handlePlus = () => {
		this.setState({timer: this.state.timer + 1})
	}

	handleMinus = () => {
		if (this.state.timer >= 1) {this.setState({timer: this.state.timer - 1})}
	}

	handleMultiply = () => {
		this.setState({timer: Math.round(this.state.timer * prompt("Введите число: ")*1)})
	}

	handleDivision = () => {
		let num = prompt("Введите число: ")*1
		if (num !== 0 && !isNaN(num)) {this.setState({timer: Math.round(this.state.timer / num * 1)})}
	}

	handlePlus10 = () => {
		this.setState({timer: this.state.timer + 10})
	}

	handleMinus10 = () => {
		if (this.state.timer >= 10) {this.setState({timer: this.state.timer - 10})}
		if (this.state.timer <= 10) {this.setState({timer: this.state.timer - this.state.timer})}
	}

	render() {
		return (
			<>
				<h1 style={{fontSize: "2em"}}>Калькулятор</h1>
				<p style={{fontSize: "2em", marginTop: "20px"}}>{this.state.timer}</p>
				<div style={{marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center"}}>
					<button onClick={this.handlePlus} style={{width: "30%", marginTop: "10px"}}>Плюс</button>
					<button onClick={this.handleMinus} style={{width: "30%", marginTop: "10px"}}>Минус</button>
					<button onClick={this.handleMultiply} style={{width: "30%", marginTop: "10px"}}>Умножение</button>
					<button onClick={this.handleDivision} style={{width: "30%", marginTop: "10px"}}>Деление</button>
					<button onClick={this.handlePlus10} style={{width: "30%", marginTop: "10px"}}>Плюс 10</button>
					<button onClick={this.handleMinus10} style={{width: "30%", marginTop: "10px"}}>Минус 10</button>
				</div>
			</>
		)
	}
}

export default myComponent