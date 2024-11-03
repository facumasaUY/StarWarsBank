import React from "react";

const CardPlanets = (props) => {
    return (
        <div className="card" style={{width: "18rem", flex: "none", margin:"10px"}}>
  <img src={"https://starwars-visualguide.com/assets/img/planets/"+props.uid+".jpg"} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    )
}

export default CardPlanets