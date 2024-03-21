/*
클래스 컴포넌트 전
import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" alt="" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box; */

import React, { Component } from "react";

export default class Box extends Component {
  constructor() {
    super();
    this.result = "";
  }
  getResult = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "win" ? "lose" : "win";
    } else {
      this.result = this.props.result;
    }
  };
  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          alt=""
          src={this.props.item && this.props.item.img}
        />
        <h2>{this.result}</h2>
      </div>
    );
  }
}
