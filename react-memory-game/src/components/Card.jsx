import React from "react";


function Card(props) {
  return (
  <div className="memory-card">
      <h2 className="name">{props.name}</h2>
      <img className="front-face"
        src={props.img}
        alt="member_img"
      />
      <img className="back-face"
        src="img/PAW_Patrol_Logo.png"
        alt="PAW_Patrol_Logo"
      />
  </div>
  );
export default Card;
