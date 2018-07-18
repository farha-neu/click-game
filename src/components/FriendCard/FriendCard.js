import React from "react";
import "./FriendCard.css";

// const styles={
//   backgroundColor:"red"
// }

const FriendCard = props => (
  <div className={props.incorrect===1?"animate-style card":"card"} onClick={() => props.removeFriend(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image}/>
    </div>
  </div>
);

export default FriendCard;
