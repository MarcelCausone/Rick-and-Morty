import {connect, useDispatch} from "react-redux";
import Cards from "../Cards/Cards";
import { useState } from "react";
import { filterCards,orderCards} from "../../redux/actions";


 function Favorites({myFavorites}) {
 
  const dispatch = useDispatch();

  const [aux,setAux]=useState(false)
  
 

  const handleOrder= (event)=>{
    dispatch(orderCards(event.target.value))
    setAux(true)
  }

  const handleFilter= (event)=>{
    dispatch(filterCards(event.target.value))
  }

 
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendiente</option>
      </select>

      <select onChange={handleFilter} >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option  value ="unknown">unknown</option>
        <option value="allCharacters">allCharacters</option>
      </select>

          <Cards characters={myFavorites} />
      {/* {
        myFavorites?.map(fav => {
            return (
                <Cards key={fav.character.id} id={fav.id}
                name={fav.name}/>
            )
        })
      } */}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(
    mapStateToProps
    , null)(Favorites);