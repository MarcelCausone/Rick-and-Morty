import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./detail.module.css";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailCard}>
      <div className={styles.characterImageContainer}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.characterImage}
        />
      </div>
      <div className={styles.characterInfo}>
        <h2>{character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin?.name}</h2>
        <h2>Location: {character.location?.name}</h2>
      </div>
    </div>
  );
}

export default Detail;
