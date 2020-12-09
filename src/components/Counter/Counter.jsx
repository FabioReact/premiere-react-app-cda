import { Component } from "react"

// Class component
class Counter extends Component {
	constructor(props) {
		super(props)
		// this.onIncrement = this.onIncrement.bind(this)
		this.state = {
			count: 0,
		}
	}

	onIncrement = () => {
		this.setState(state => ({
			count: state.count + 1
		}))
	}

	onDecrement = () => {
		this.setState((state) => {
			return ({
				count: state.count - 1
			})
		})
	}

	onUpdateCounter = (n) => {
		this.setState(state => ({
			count: state.count + n
		}))
	}

	render() {
		// console.log() -> appel de fonction
		// console.log -> référence à la fonction console.log()
		return (
			<>
				<p>Compteur: {this.state.count}</p>
				{/* <button onClick={this.onIncrement}>Incrémenter</button>
				<button onClick={this.onDecrement}>Décrémenter</button> */}
				<Button label="Incrementer" callback={this.onIncrement} />
				<Button label="Decrementer" callback={this.onDecrement} />
				<Button label="+5" callback={() => this.onUpdateCounter(5)} />
				<Button label="-5" callback={() => this.onUpdateCounter(-5)} />
			</>
		)
	}
}

// Functional component
const Button = (props) => {
	return (
		<button onClick={props.callback}>{props.label}</button>
	)
}



export default Counter