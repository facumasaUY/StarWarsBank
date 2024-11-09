import React, { useState, useEffect, useContext } from "react"
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople";
import CardPlanets from "../component/cardPlanets";
import CardVehicles from "../component/cardVehicle"

export const Home = () => {

	const {store, actions} = useContext(Context)
	
	useEffect(() => {

		actions.loadCharacters()
		actions.loadPlanets()
		actions.loadVehicles()
	}, [])

	return <div className="text-center mt-5">

		<h1>Characters</h1>
		<div className="d-flex flex-row overflow-auto">

			{
				store.characters.length == 0 && <div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			}

			{
				store.characters.map((item, index) => {
					return (
						<CardPeople key={index} item={item.properties || {}} uid={item.uid}> </CardPeople>
					)
				})
			}
		</div>

		<h1>Planets</h1>
		<div className="d-flex flex-row overflow-auto">

			{
				store.planets.length == 0 && <div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			}

			{
				store.planets.map((item, index) => {
					return (
						<CardPlanets key={index} item={item.properties || {}} uid={item.uid}> </CardPlanets>
					)
				})
			}
		</div>

		<h1>Vehicles</h1>
		<div className="d-flex flex-row overflow-auto">

			{
			    store.vehicles.length == 0 && <div className="spinner-border" role="status">
				    <span className="visually-hidden">Loading...</span>
				</div>
			}

			{
				store.vehicles.map((item, index) => {
					return (
						<CardVehicles key={index} item={item.properties} uid={item.uid}></CardVehicles>
					)
				})
			}
		</div>

	</div>

};
