import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			characters: [],
			planets: [],
			vehicles: [],
			misFavoritos: [],
			person:{},
			planet:{},
			vehicle:{},
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json()
		
				const peopleDetailsPromises = data.results.map(async (people) => {
					const resPeople = await fetch(people.url);
					const peopleDetails = await resPeople.json();
					return peopleDetails.result;
				});
		
				const characters = await Promise.all(peopleDetailsPromises); // <--- This is the magic line
				setStore({characters});
			},

			loadPlanets: async () =>{
				const response = await fetch("https://www.swapi.tech/api/planets")
				const data = await response.json()

				const planetsDetailsPromises = data.results.map(async (planets)=>{
					const resPlanets = await fetch(planets.url);
					const planetsDetails = await resPlanets.json();
					return planetsDetails.result;
				});
				const planets = await Promise.all(planetsDetailsPromises);
				setStore({planets});
			},

			loadVehicles: async () =>{
				const response = await fetch("https://www.swapi.tech/api/vehicles")
				const data = await response.json()

				const vehiclesDetailsPromises = data.results.map(async (vehicles)=>{
					const resVehicles = await fetch(vehicles.url);
					const vehiclesDetails = await resVehicles.json();
					return vehiclesDetails.result;
				});
				const vehicles = await Promise.all(vehiclesDetailsPromises);
				setStore({vehicles});
			},

            removeItem: (item) => {
				let aux = getStore().misFavoritos.filter((elemento)=>elemento!=item)
					setStore({misFavoritos: aux})
			},

			addFavourite: (item) => {
				if (getStore().misFavoritos.includes(item)){ //Si ya existe, lo borra.
					getActions().removeItem(item);
				} else{
					
					setStore({misFavoritos:[...getStore().misFavoritos, item]})
				}
			},
            
			showFavourite: () =>{
                return getStore().misFavoritos;
			},

			deleteFavourite: (item) =>{
				if (getStore().misFavoritos.includes(item)){				
					getActions().removeItem(item)};			
			},

			getDetaiCharacter: async(id) =>{
				try {
					const res = await fetch("https://www.swapi.tech/api/people/"+id)
					const data = await res.json()
					console.log(data.result)
					setStore({person:data.result})
				} catch (error) {
					console.log(error)
					return false
				}
			},

			getDetailPlanet: async(id) =>{
				try {
					const res = await fetch("https://www.swapi.tech/api/planets/"+id)
					const data = await res.json()
					console.log(data.result)
					setStore({planet:data.result})
				} catch (error) {
					console.log(error)
					return false
				}
			},

			getDetailVehicle: async(id) =>{
				try {
					const res = await fetch("https://www.swapi.tech/api/vehicles/"+id)
					const data = await res.json()
					console.log(data.result)
					setStore({vehicle:data.result})
				} catch (error) {
					console.log(error)
					return false
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
