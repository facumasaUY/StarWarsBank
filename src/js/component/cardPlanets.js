import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = ({ item, uid }) => {

  const { store, actions } = useContext(Context);

  // Manejador de clic para agregar a favoritos
  const handleLikeClick = () => {
    actions.addFavourite(item.name); // Llamar a la función addFavourite con el nombre del personaje
  };

  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Population: {item.population}
        </p>
        <p>
          Terrain: {item.terrain}
        </p>
        <div className="d-flex justify-content-between">
          <Link to={"/singleplanet/" + uid}>
            <button className="btn btn-outline-primary">Learn more!</button>
          </Link>
          <button className="btn btn-outline-warning" onClick={handleLikeClick}>
            <i className="fa-regular fa-heart" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPlanets