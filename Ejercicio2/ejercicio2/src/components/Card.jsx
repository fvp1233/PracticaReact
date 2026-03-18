import React from "react";
import './Card.css';

const Card = ({ nombre, edad, profesion, ciudad, email, avatar }) => {
  return (
    <div className="card">
      <div className="card-avatar">{avatar}</div>
      <h2 className="card-nombre">{nombre}</h2>
      <div className="card-info">
        <p className="card-texto"><strong>Edad:</strong> {edad} años</p>
        <p className="card-texto"><strong>Profesión:</strong> {profesion}</p>
        <p className="card-texto"><strong>Ciudad:</strong> {ciudad}</p>
        <p className="card-texto"><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Card