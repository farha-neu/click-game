import React from "react";
import "./Fruit.css";



const Fruit = props => (
    <div className={props.incorrect===1?"animate-style col-lg-3 col-md-4 col-12 mb-4":"col-lg-3 col-md-4 col-12 mb-4"}>
        <img className="img-fluid img-thumbnail rounded-circle" src={props.src} alt={props.alt} key={props.id} 
        onClick={() => props.clickFruit(props.id)}/>
    </div>
);

export default Fruit;
