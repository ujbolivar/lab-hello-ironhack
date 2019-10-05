import React from "react";
import { Component } from "react";
import "./info.css";

export default class Info extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
     
          <div className="info">
          <img src={this.props.img} />
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
          </div>


    );
  }
}