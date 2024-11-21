import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

    useEffect(()=>{
		actions.getDetailVehicle(theid)
	},[])

	return (
		<div className="container">
		   <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.vehicle?.properties?.name}</h5>
     <p className="card-text">cargo_capacity: {store.vehicle?.properties?.cargo_capacity}</p>
		<p className="card-text">consumables: {store.vehicle?.properties?.consumables}</p>
		<p className="card-text">cost_in_credits: {store.vehicle?.properties?.cost_in_credits}</p>
		<p className="card-text">crew: {store.vehicle?.properties?.crew}</p>
		<p className="card-text">length: {store.vehicle?.properties?.length}</p>
		<p className="card-text">manufacturer: {store.vehicle?.properties?.manufacturer}</p>
		<p className="card-text">model: {store.vehicle?.properties?.model}</p>
        <p className="card-text">passengers: {store.vehicle?.properties?.passengers}</p>
      </div>
    </div>
  </div>
</div>
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};
