import styles from "./Book.module.css"
// Créer un nouveau composant ayant pour nom "Book". Ce composant affichera un élément d'une liste avec le titre d'un livre

const mesStyles = {
	backgroundColor: "blue",
	color: "white",
}

const Book = ({ livre = "Nom de livre", auteur = "Nom de l'auteur", children }) => {
  return (
    <li style={mesStyles} className={styles.myLi}>{livre} - Ecrit par {auteur} - {children}</li>
  )
}

// Créer un composant BookActions - Ce composant aura un bouton où il y aura écrit "Emprunter"
const BookActions = () => {
	return (
		<button>Emprunter</button>
	)
}


// Export nommé - On peut faire autant d'export par défaut que l'on veut par fichier
// export { BookActions }

// Export par défaut - On ne peut faire qu'un seul export par défault par fichier
// export default Book

// export par défaut avec export nommé
export { Book as default, BookActions }