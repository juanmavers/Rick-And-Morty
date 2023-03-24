import React from 'react';
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={style.bar}>
         <input
            type='search'
            className={style.searchInput}
            onChange={handleChange}
         />
         <button className={style.searchButton} onClick={() => onSearch(id)}>
               ← Agregar
         </button>
      </div>
   );
}
