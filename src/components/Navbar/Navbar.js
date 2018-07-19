import React from "react";
import "./Navbar.css";

var style={
    correct:{
        color: "chartreuse"
    },
    incorrect:{
        color:"yellow"
    }
}
const Navbar = (props) => {
 var img;
 var color={};
    if(props.correct === 1){
        img = <img src='images/lol.png' className='top' alt='happy'/>;
        color = style.correct;
    }
    else if(props.incorrect === 1){
        img = <img src='images/sad.png' className='top' alt='sad'/>;
        color = style.incorrect;
    }
  return(
  <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="badge">  <i className="fab fa-apple"></i>  Kids Fruit Memory</span>
                </li>
                
            </ul>
        
            <ul className="navbar-nav mx-auto custom">
                <li className="nav-item custom" style={color}>
                     {props.children} {img}
                </li>
            </ul>

            <ul className="navbar-nav">
                  <li className="nav-item">
                       Score: {props.totalScore} | Top Score : {props.topScore}
                  </li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar;
