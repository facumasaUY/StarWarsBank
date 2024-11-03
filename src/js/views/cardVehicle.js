import React from "react";

const CardVehicle = (props) => {
    return (
        <div className="card" style={{width: "18rem", flex: "none", margin:"10px"}}>
  <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+props.uid+".jpg"} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
  </div>
</div>
)
}

export default CardVehicle