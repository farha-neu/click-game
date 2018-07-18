import React from "react";
import "./Title.css";

const Title = props => <h1 className="title" style={props.style}>{props.message} <br/> Score : {props.count} | Top Score : {props.topScore}</h1>;

export default Title;
