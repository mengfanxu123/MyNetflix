import React from "react";
import "./styles.css";
const listElement = props => {
  return (
    <div>
      <h3>{props.element.title}</h3>
      <img src={props.element.img} alt={props.element.id} />
    </div>
  );
};

export default listElement;
