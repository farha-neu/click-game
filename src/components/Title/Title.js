import React from "react";
import "./Title.css";

const Title = props => {
   console.log(props.correct);
   var headerStyle;
   if(props.incorrect === 1){
       headerStyle = "incorrect-style";
   }
   else if(props.correct ===1){
       headerStyle = "correct-style";
   }
    return(
        <h1 className="title"><span className={headerStyle}>{props.message}</span><br/> 
         Score : {props.count} | Top Score : {props.topScore}</h1>
    )

}

export default Title;
