import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions.js"
import { connect } from "react-redux";
import { useState, useEffect } from "react";


const Card = ({ id, name, species, gender, image, onClose, addFavorite, removeFavorite, myFavorites }) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (addFavorite, removeFavorite, characters) => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }
      setIsFav(true);
      return addFavorite(characters);
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
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
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