import React, { useState, useEffect } from "react";
import Personajes from "./Personajes"; 

function PersonajesLista() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const { results } = await data.json();
      setCharacters(results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)}>
        Más
      </button>

      <div className="row">
        {characters.map((character) => (
          <div className="col-md-6" key={character.id}>
            <Personajes character={character} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonajesLista;
