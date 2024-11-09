import React from "react";

const CardPeople = (props) => {
  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{props.item.name}</h4>
        <p className="card-text">
          Gender: {props.item.gender}
        </p>
        <p>
          Hair Color: {props.item.hair_color}
        </p>
        <p className="card-text">
          Eye color: {props.item.eye_color}
        </p>
        <div className="d-flex justify-content-between">
        <button className="btn btn-outline-primary">Learn more!</button>
        <button className="btn btn-outline-warning"><i class="fa-regular fa-heart"/></button>
        </div>
      </div>
    </div>
  )
}

export default CardPeople