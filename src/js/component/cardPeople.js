import React from "react";

const CardPeople = (props) => {
  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{props.item.name}</h4>
        <p className="card-text">
          {
            props.item.gender
          }
        </p>
        <p className="card-text">
          {
            props.item.eye_color
          }
        </p>
      </div>
    </div>
  )
}

export default CardPeople