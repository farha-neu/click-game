import React from "react";
import "./Jumbotron.css";


const Jumbotron = props => {
    console.log(props);

    return(
        <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4"><i className="fab fa-apple"></i> Kids Fruit Memory Game!</h1>
                    <p className="lead">Click a fruit to earn points, but don't click on any more than once!</p>
                </div>
        </div>
    );
}

export default Jumbotron;
