import React, {useContext} from "react";
import { Context } from "../store/appContext";

const CardPeople = ({ item, uid}) => {

  const { store, actions } = useContext(Context);

  // Manejador de clic para agregar a favoritos
  const handleLikeClick = () => {
   actions.addFavourite(item.name); // Llamar a la función addFavourite con el nombre del personaje
  };

  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        className="card-img-top"
        alt={item.name}
      />
      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        <p className="card-text">Gender: {item.gender}</p>
        <p>Hair Color: {item.hair_color}</p>
        <p className="card-text">Eye color: {item.eye_color}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary">Learn more!</button>
          <button className="btn btn-outline-warning" onClick={handleLikeClick}>
            <i className="fa-regular fa-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPeople;
