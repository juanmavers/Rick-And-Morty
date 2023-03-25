import { useState, useEffect, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import style from "../SearchBar/SearchBar.module.css"

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {

        const URL_BASE = "http://localhost:3001/rickandmorty";
        // const KEY = "fa1b8a45821e.79b09a5a787ffc1274e3";

        axios(`${URL_BASE}/detail/${detailId}`)
            .then((response) => setCharacter(response.data));
    }, [detailId]);


    return (
        <div>
            {character.name ? (
                <>
                    <h2>{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <img src={character.image} alt="img" />
                </>
            ) : (
                <h2>Loading...</h2>
            )}
            <button
                className={style.searchButton}
                onClick={handleClick}>
                Back
            </button>
        </div>

    )
}

export default Detail;

