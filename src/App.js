import React, { Component } from "react";
import Fruit from "./components/Fruit";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import fruits from "./fruits.json";
import "./App.css";



var message = "Click an image to begin!";
var topScore = 0;
var totalScore = 0;
var incorrect = 0;
var correct = 0;
var win = 0;

function reset(fruits){
    for(var i = 0; i< fruits.length; i++){
       if(fruits[i].clicked ===1){
           fruits[i].clicked = 0;
       }
    }
}

class App extends Component {
  
    state={
        fruits : fruits
    }

    clickFruit = id => {
        var currentId;
        incorrect = 0;
        correct  = 0;
        //same fruit clicked: incorrect
        for(var i = 0; i< fruits.length; i++){
            if(fruits[i].id === id){
              currentId = i;
              break;
            }
        }

        if(fruits[currentId].clicked === 1){
            fruits[currentId].clicked = 0;
            totalScore = 0;
            message = "You guessed incorrectly!";
            incorrect = 1;
            reset(fruits);
        }
        else{
            fruits[currentId].clicked = 1;
            totalScore++;
            correct = 1;
            if(totalScore===fruits.length){
                message="You won! Click to play again!";
                reset(fruits);
                win = 1;
            }
            else{
                message = "You guessed correctly!";
                if(win===1){
                    totalScore=1;
                }
                win = 0;
            }
           
        }
        console.log(fruits);
        if(totalScore>topScore){
            topScore = totalScore
        }
         //randomize it
        this.setState({fruits : this.state.fruits.sort( () => Math.random() - 0.5)});

    }

  render() {
    
      return (
        <div>
             <Navbar topScore = {topScore} totalScore={totalScore} correct={correct} incorrect={incorrect}>{message}</Navbar>
             <Jumbotron/>
             <div className="container gallery">
                   <div className="row text-center">
                        {this.state.fruits.map(fruit => (
                                <Fruit incorrect={incorrect} alt={fruit.name} src={fruit.image} id={fruit.id} clickFruit={this.clickFruit} key={fruit.id}/>
                        ))}
                    </div>
              </div>
         </div>
      );
  }
}

export default App;
