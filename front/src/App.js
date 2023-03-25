import React from 'react';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import style from "./App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';


function App() {

  //! HOOKS 
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //! Credenciales de ejemplo para el login
  const username = "juanmanuelv@outlook.com";
  const password = "asd123";


  //! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    // const KEY = "fa1b8a45821e.79b09a5a787ffc1274e3";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
    alert("Credenciales incorrectas");
  }

  //!Render
  return (
    <div
      className={style.App}
      style={{ padding: '25px' }}
    >

      <div className={style.nav}>
      {pathname !== "/" && !pathname.includes("/detail/") && <Nav onSearch={onSearch} />}
        <Routes>
          <Route
            path="/"
            element={<Form login={login} />}
          />
          <Route
            path="/home"
            element={<Cards characters={characters}
              onClose={onClose}
            />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/detail/:detailId"
            element={<Detail />}
          />
          <Route
          path="/favorites"
          element={<Favorites />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App


