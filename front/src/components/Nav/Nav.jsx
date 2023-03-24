import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";


class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.navContainer}>
                <h1 className={SearchBar.h1}>RICK & MORTY CARDS</h1>
                <h2 className={SearchBar.h2}>Elige un número y recibe un personaje:</h2>
                <SearchBar onSearch={this.props.onSearch} />
                <Link to="/home">
                    <h3>HOME 🏠</h3>
                </Link>
                <Link to="/about">
                    <h3>ABOUT ME 👨🏼‍🦲</h3>
                </Link>
                <Link to="/favorites">
                    <h3>MY FAVORITES ❤️</h3>
                </Link>
            </div>
        );
    }
}

export default Nav;