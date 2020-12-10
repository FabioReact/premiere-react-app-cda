import { useState, useEffect } from "react"

// React Hooks

const FunctionalCounter = () => {
	console.log("Nouveau render") // Equivalent du la méthode Render dans une classe
	const [count, setCount] = useState(0)
	const [savedValues, setSavedValues] = useState([])

	// useEffect prend deux paramètre
	// le premier est la fonction à éxécuté
	// le second est un table de dépendances - Si la valeur l'une de ces dépendances change, alors la fonction sera éxécutée
	useEffect(() => {
		console.log("Equivalent de componentDidMount")
		const fonctionAExecuterPlusTard = () => {
			console.log("Equivalent de componentWillUnmount")
		}
		return fonctionAExecuterPlusTard
	}, [])

	useEffect(() => {
		console.log("Equivalent de componentDidMount + componentDidUpdate")
		return () => {
			console.log("Equivalent de componentWillUnmount - Bye from component")
		}
	}, [count])

	return (
		<div>
			<p>Compteur (fonctionnel): {count}</p>
			<button onClick={() => setCount(count => count + 1)}>Incrémenter</button>
			<button onClick={() => setCount(count => count - 1)}>Décrémenter</button>
		</div>
	)
}

export default FunctionalCounter