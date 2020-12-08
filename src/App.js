// import { Fragment } from "react"
import './App.css';
// import par défaut
// import Book from "./Book"
// import nommé
// import { BookActions } from "./Book"
// Import par défaut suivi d'un import nommé
import Book, { BookActions as Actions } from "./components/Book/Book"

function App() {
  const livreFavoris = {
    livre: "L'étranger",
    auteur: "Albert Camus",
  }
  // Slide aide: https://slides.com/fabiodev/react#/3/4

  return (
    <>
      <header>Mon header</header>
      <ul>
        <Book livre="Harry Potter" auteur="J. K. Rowlings" ></Book>
        <Actions />
        <Book><p>Description: Lorem ipsum dolor sit amet.</p></Book>
        <Book livre={"The Witcher".toUpperCase()} auteur="Andrzej Sapkowski" />
        <Book {...livreFavoris} />
      </ul>
      <ul>
        <li className="appLi">Agatha Chistie</li>
        <li className="myLi">Ernest Hemingway</li>
        <li>Stephen King</li>
        <li>Robin Hoob</li>
      </ul>
      <footer>Footer</footer>
    </>
  );
}

export default App;
