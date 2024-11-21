import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

    useEffect(()=>{
		actions.getDetaiCharacter(theid)
	},[])

	return (
		<div className="container">
		   <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.person?.properties?.name}</h5>
        <p className="card-text">birth_year: {store.person?.properties?.birth_year}</p>
		<p className="card-text">eye_color: {store.person?.properties?.eye_color}</p>
		<p className="card-text">gender: {store.person?.properties?.gender}</p>
		<p className="card-text">hair_color: {store.person?.properties?.hair_color}</p>
		<p className="card-text">height: {store.person?.properties?.height}</p>
		<p className="card-text">skin_color: {store.person?.properties?.skin_color}</p>
		<p className="card-text">mass: {store.person?.properties?.mass}</p>
      </div>
    </div>
  </div>
</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
