
import { useNavigate } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from "react-redux"
import {useState,useEffect} from "react"
import styles from "./card.module.css"

 function Card(props) {
   const {character,addFav,removeFav,myFavorites,onClose}=props

   const [isFav, setIsFav] = useState(false)
   
   function handleFavorite() {
      if(isFav){
         setIsFav(false)
         removeFav(character.id)
         // console.log()
      } else {
         setIsFav(true)
         addFav(character)
      } 
      
 }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,character.id]);


   const navigate = useNavigate()

   function navigateHandler(){
    navigate(`/detail/${character.id}`)       
     }

   return (
      <div className={styles.card}> {/* Aplica la clase CSS usando el objeto styles */}
      {isFav ? (
        <button
          className={`${styles.favorite} ${isFav ? styles.favorite : styles.favoriteEmpty}`}
          onClick={handleFavorite}
        >
          ❤️
        </button>
      ) : (
        <button
          className={`${styles.favorite} ${isFav ? styles.favorite : styles.favoriteEmpty}`}
          onClick={handleFavorite}
        >
          🤍
        </button>
      )}
      <button className={styles.close} onClick={() => onClose(character.id)}>
        X
      </button>
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        onClick={navigateHandler}
      />
    </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites : state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav:(character)=>{ dispatch(addFav(character))},
      removeFav : (id) => {dispatch(removeFav(id))}
}
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)