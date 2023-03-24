import React from "react";
import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);

    const dispatch = useDispatch();

    const handleOrderCards = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilterCards = (event) => {
        dispatch(filterCards(event.target.value));
    }

    const [characters, setCharacters] = useState([]);

    const onClose = (id) => {
        setCharacters(characters.filter((char) => char.id !== id));
    };

    return (
        <>
            <div>
                <select
                    name="ORDER"
                    onChange={handleOrderCards}
                >
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select
                    name="FILTER"
                    onChange={handleFilterCards}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div>
            {favorites.map(({ id, name, species, gender, image }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        onClose={onClose}
                    />
                );
            })}
            </div>
        </>
    );
};

export default Favorites;



