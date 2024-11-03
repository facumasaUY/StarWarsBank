import React, {useState, useEffect} from "react"
import "../../styles/home.css";
import CardPeople from "../component/cardPeople";
import CardPlanets from "./cardPlanets";
import CardVehicles from "./cardVehicle"

export const Home = () => {
	const [people, setPeople] = useState([])
    const [planet, setPlanet] = useState([])
	const [vehicle, setVehicle] = useState([])

	useEffect(()=>{
		fetch("https://www.swapi.tech/api/people")
.then(res => res.json())
.then(data => setPeople(data.results))
.catch(err => console.error(err));

fetch("https://www.swapi.tech/api/planets")
.then(res => res.json())
.then(data => setPlanet(data.results))
.catch(err => console.error(err));

fetch("https://www.swapi.tech/api/vehicles")
.then(res => res.json())
.then(data => setVehicle(data.results))
.catch(err => console.error(err));

	}
	,[])

	return <div className="text-center mt-5">
		<h1>Warriors</h1>
		<div className="d-flex flex-row overflow-auto">
		{
			people.map((item,index)=>{
				return (
					<CardPeople key={index} name={item.name} uid={item.uid}> </CardPeople>
				)
			})
		}
		</div>
		<h1>Planets</h1>
		<div className="d-flex flex-row overflow-auto">
		{
			planet.map((item,index)=>{
				return (
					<CardPlanets key={index} name={item.name} uid={item.uid}></CardPlanets>
				)
			})
		}
		</div>
		<h1>Vehicles</h1>
		<div className="d-flex flex-row overflow-auto">
		{
			vehicle.map((item,index)=>{
				return (
					<CardVehicles key={index} name={item.name} uid={item.uid}></CardVehicles>
				)
			})
		}
		</div>
	</div>

};
