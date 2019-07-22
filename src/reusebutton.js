import React from "react";
import "./styles.css";
const reusebutton = props => {
  console.log(props);
  return (
    <div>
      <div>
        <h3>{props.element.title}</h3>
        <img src={props.element.img} alt={props.element.id} />
      </div>
      <div>
        <button onClick={() => props.handle(props.index)}>{props.text}</button>
      </div>
    </div>
  );
};

export default reusebutton;
