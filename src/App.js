import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

var scoreArr=[];
var win = false;
var incorrect = 0;

var styles = {
    border: "1px solid red"
};


class App extends Component {
  state = {
    friends: friends,
    totalScore : 0,
    topScore: 0,
    message : "Click an image to begin"
  };


  removeFriend = id => {
    for(var i = 0; i<friends.length; i++){
      if(friends[i].id === id){
        incorrect = 0;
        if(friends[i].clicked===0){
          friends[i].clicked = 1;
          if(this.state.totalScore===friends.length-1){
            for(var k = 0;k<friends.length;k++){
              friends[k].clicked =0;
            }
            scoreArr.push(friends.length);
            this.setState({totalScore : this.state.totalScore+1,message:"You won the game! Play again!",topScore:Math.max(...scoreArr)});
            win = true;
          }
          else{
            if(win===false){
              this.setState({totalScore : this.state.totalScore+1,message:"You guessed correctly!"});
            }
            else{
              this.setState({totalScore : 1,message:"You guessed correctly!"});
              win = false;
            } 
          } 
          break;
        }

        else{
          incorrect = 1;
          scoreArr.push(this.state.totalScore);
          console.log(scoreArr);
          for(var j = 0;j<friends.length;j++){
            friends[j].clicked =0;
          }
          this.setState({friends: friends,totalScore : 0,message:"You guessed incorrectly!",topScore:Math.max(...scoreArr)});
          break;
        }
      }
    }
    this.setState({friends : this.state.friends.sort( () => Math.random() - 0.5)});
    // console.log(friends);
  };
  

  render() {
    
    return (
      <Wrapper incorrect={incorrect}>
        <Title style={this.state.message !== "Click an image to begin" ? styles : {}}
         count={this.state.totalScore} message={this.state.message} topScore={this.state.topScore}/>
        {this.state.friends.map(friend => (
          <FriendCard 
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
