import React from 'react';
import Personajes from "./components/Personajes"; 
import PersonajesLista from "./components/PersonajesLista";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick And Morty</h1>
      <PersonajesLista /> 
    </div>
  );
}

export default App;
