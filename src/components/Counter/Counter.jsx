import { Component } from "react"

// Class component
class Counter extends Component {
	constructor(props) {
		super(props)
		// this.onIncrement = this.onIncrement.bind(this)
		console.log("Constructeur appelé")
		this.state = {
			count: 0,
			savedValues: [],
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

	componentDidMount() {
		console.log("componentDidMount appelé")
		// Ici, je peux faire des appels http à une API
	}

	componentDidUpdate(prevProps, prevState, snaphshot) {
		if (this.state.count !== prevState.count) {
			console.log("componentDidUpdate appelé, mon composant s'est bien mis à jour")
		}
	}

	componentWillUnmount() {
		console.log("componentWillUnmount appelé - Notre composant va disparaitre de la page")
		// Endroit idéal pour se désabonner de certains evenement type: chat, ou se déconnecter d'une bdd type indexeddb
	}

	render() {
		console.log("Render appelé")
		return (
			<>
				<p>Compteur (classe): {this.state.count}</p>
				<button onClick={this.onIncrement}>Incrémenter</button>
				<button onClick={this.onDecrement}>Décrémenter</button>
				{/* <Button label="Incrementer" callback={this.onIncrement} />
				<Button label="Decrementer" callback={this.onDecrement} />
				<Button label="+5" callback={() => this.onUpdateCounter(5)} />
				<Button label="-5" callback={() => this.onUpdateCounter(-5)} /> */}
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