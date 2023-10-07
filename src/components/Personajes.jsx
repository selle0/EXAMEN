import React from 'react';

function Personajes({ character }) {
  const { name, image, origin } = character;
  const originName = origin ? `Origin: ${origin.name}` : '';

  return (
    <div className="text-center p-5">
      <h3>{name}</h3>
      <img src={image} alt={name} className="img-fluid" />
      <p>{originName}</p>
    </div>
  );
}

export default Personajes;
