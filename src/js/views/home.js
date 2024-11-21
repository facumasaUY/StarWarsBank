import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicle";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [favourites, setFavourites] = useState([]);
  
  const addFavourite = (name) => {
    setFavourites((prevFavourites) => [...prevFavourites, name]);
  };

  useEffect(() => {
    actions.loadCharacters();
    actions.loadPlanets();
    actions.loadVehicles();
  }, [actions]);

  return (
    <div className="text-center mt-5">
      <h1 className="text-start text-danger">Characters</h1>
      <div className="d-flex flex-row overflow-auto">
        {store.characters.length === 0 && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {store.characters.map((item) => {
          return (
            <CardPeople
              key={item.uid}
              item={item.properties || {}}
              uid={item.uid}
              addFavourite={addFavourite}
            />
          );
        })}
      </div>

      <h1 className="text-start text-danger">Planets</h1>
      <div className="d-flex flex-row overflow-auto">
        {store.planets.length === 0 && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {store.planets.map((item) => {
          return (
            <CardPlanets key={item.uid} item={item.properties || {}} uid={item.uid} />
          );
        })}
      </div>

      <h1 className="text-start text-danger">Vehicles</h1>
      <div className="d-flex flex-row overflow-auto">
        {store.vehicles.length === 0 && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}

        {store.vehicles.map((item) => {
          return (
            <CardVehicles key={item.uid} item={item.properties} uid={item.uid} />
          );
        })}
      </div>
    </div>
  );
};
