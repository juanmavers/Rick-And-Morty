import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { removeFavorite } from "../../redux/actions.js"
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";


const Card = ({ id, name, species, gender, image, onClose, removeFavorite, myFavorites }) => {
   const [isFav, setIsFav] = useState(false);

   const addFavorite = () => {
      axios.post("http://localhost:3001/rickandmorty/fav")
      .then((res) => console.log("OK"));
   }

   const handleFavorite = (addFavorite, removeFavorite) => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }
      setIsFav(true);
      addFavorite(
         id,
         name,
         species,
         gender,
         image
      );
   }


   return (
      <div className={style.container}>
         <Link to={`/detail/${id}`}>
            <h2 className={style.h2}>{name}</h2>
         </Link>

         <button
            onClick={() => onClose(id)}
            className={style.closeButton}
         >
            X
         </button>
         <img src={image} alt="" />
         <h2 className={style.h2}>Species: {species}</h2>
         <h2 className={style.h2}>Gender: {gender}</h2>
            {isFav ? (
               <button
                  className={style.favButton}
                  onClick={handleFavorite}
               >
                  ❤️
               </button>
            ) : (
               <button
                  className={style.favButton}
                  onClick={handleFavorite}
               >
                  🤍
               </button>
            )}
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);