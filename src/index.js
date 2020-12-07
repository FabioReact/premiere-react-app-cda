import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

/* const name = "Fabio"
const element = <h1>Bonjour {name}</h1>

const Button = () => {
	return <button>Mon beau bouton</button>
} */

// ReactDOM.render(Button(), document.getElementById("root"))
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
