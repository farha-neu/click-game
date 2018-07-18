import React from "react";
import "./Wrapper.css";

const styles={
   backgroundColor:"orange"
}
const Wrapper = props => {
    console.log(props);

    return(
         <div style={props.incorrect===1?styles:{}} className="wrapper">{props.children}</div>
    );
}

export default Wrapper;
