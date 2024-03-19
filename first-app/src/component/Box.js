import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" alt="" src={props.item && props.item.img} />
    </div>
  );
};

export default Box;
