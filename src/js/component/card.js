import React from "react";

const Card = (props) => {
    return (
        <div class="card" style={{width: "18rem"}}>
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    )
}

export default Card