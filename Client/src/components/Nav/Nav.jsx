import SearchBar from '../searchBar/SearchBar.jsx';
import {Link} from "react-router-dom";
import styles from "./nav.module.css"

export default function Nav ({onSearch,random}) {
    return (
        <div className={styles.container}>
        <div>
          <SearchBar className={styles.SearchBar} onSearch={onSearch} />
          <button className={styles.random}onClick={random}>
            Add Random
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/favorites">
            <button>Favorites</button>
          </Link>
        </div>
      </div>
    )
}