import { useState } from "react";
import styles from "./searchBar.module.css"

export default function SearchBar(props) {
   const {onSearch} = props
   const [id, setId] = useState("")

   function handleChange (e){
      e.preventDefault()
      setId(e.target.value)
   }

   return (
      <header className={styles.inputContainer}>
         <input type='search'onChange={handleChange} value={id} placeholder=" Character ID"/>
         <button onClick={() => onSearch(id)}> Agregar </button>
      </header>
   );
}
