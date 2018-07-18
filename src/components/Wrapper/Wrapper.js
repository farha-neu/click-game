import React from "react";
import "./Wrapper.css";


const Wrapper = props => {
    console.log(props);

    return(
         <div className="wrapper">{props.children}</div>
    );
}

export default Wrapper;
