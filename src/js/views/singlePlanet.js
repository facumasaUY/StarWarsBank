import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

    useEffect(()=>{
		actions.getDetailPlanet(theid)
	},[])

	return (
		<div className="container">
		   <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.planet?.properties?.name}</h5>
     <p className="card-text">climate: {store.planet?.properties?.climate}</p>
		<p className="card-text">diameter: {store.planet?.properties?.diameter}</p>
		<p className="card-text">gravity: {store.planet?.properties?.gravity}</p>
		<p className="card-text">orbital_period: {store.planet?.properties?.orbital_period}</p>
		<p className="card-text">population: {store.planet?.properties?.population}</p>
		<p className="card-text">rotation_period: {store.planet?.properties?.rotation_period}</p>
		<p className="card-text">surface_water: {store.planet?.properties?.surface_water}</p>
        <p className="card-text">terrain: {store.planet?.properties?.terrain}</p>
      </div>
    </div>
  </div>
</div>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
