import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Navbar = () => { // Default to empty array if favourites is undefined
  
  const { store, actions } = useContext(Context);

  let favourites = actions.showFavourite()

  const handleDeleteFavourite = (favourite) => {
    actions.deleteFavourite(favourite); // Llamar a la función addFavourite con el nombre del personaje
   };

  return (
    <nav
      className="navbar mb-3 d-flex justify-content-between"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/background_53876-32170.jpg?t=st=1730574678~exp=1730578278~hmac=7749a498e54bee0f6a379f411199353dd8e326be1ef8532f1afb62ee997e3710&w=740)",
        padding: "0 100px",
        minWidth: "100%",
      }}
    >
      <div className="d-flex align-items-center">
        <Link to="/">
        <img
          className="ms-5"
          src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG37.png"
          alt="Star Wars Logo"
          style={{ height: "60px", width: "auto" }}
        />
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Favorites
          </button>
          <ul className="dropdown-menu drop-down-menu-end" id="favouriteList">
            {favourites.length > 0 ? (
              favourites.map((favourite, index) => (
                <li key={index} className="dropdown-item">
                  {favourite} <button className="btn" onClick={()=>handleDeleteFavourite(favourite)}><i class="fa-solid fa-trash-can"></i></button>
                </li>
              ))
            ) : (
              <li className="dropdown-item">No favorites yet</li> // Mostrar un mensaje si no hay favoritos
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
