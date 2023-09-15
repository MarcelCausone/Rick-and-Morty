import Card from '../Card/Card';
import styles from "./cards.module.css"

export default function Cards(props) {
   const {characters} = props;
   const {onClose} = props
//    console.log(props)
   return(
       <div  className={styles.cardContainer}>
            {characters.map((character)=>(
               <Card 
                character ={character} 
                key ={character.id} 
                onClose={onClose}
                />
            ))}

       </div>
   )
}
