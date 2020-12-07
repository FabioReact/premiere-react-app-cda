// import { Fragment } from "react"
import './App.css';

// Créer un nouveau composant ayant pour nom "Book". Ce composant affichera un élément d'une liste avec le titre d'un livre

const Book = ({ livre = "Nom de livre", auteur = "Nom de l'auteur" }) => {
  return (
    <li>{livre} - Ecrit par {auteur}</li>
  )
}

function App() {
  const livreFavoris = {
    titre: "L'étranger",
    auteur: "Albert Camus",
  }
  // Slide aide: https://slides.com/fabiodev/react#/3/4

  return (
    <>
      <header>Mon header</header>
      <ul>
        <Book livre="Harry Potter" auteur="J. K. Rowlings" ></Book>
        <Book livre="The Witcher" auteur="Andrzej Sapkowski" />
        <Book /* Insérer ici les valeurs de livreFavoris */ />
        <Book />
      </ul>
      <footer>Footer</footer>
    </>
  );
}

export default App;
