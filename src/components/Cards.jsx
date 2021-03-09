/*jslint es6:true*/
import React from "react";
import Avatar from "./Avatar.jsx";

function Card(props) {
  return (
    <div className="body">
      <div className="card img">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.imgURL} />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
