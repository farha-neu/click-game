import React from "react";
import "./ImageCard.css";

//if 1 to 0..loses
class SingleImage extends React.Component {
    state = {
        count: 0
      };
    handleCount = () => {
        console.log(this.state.count);
        if(this.state.count===1){
            this.setState({ count: 0 });
        }
        else{
            this.setState({ count: 1 });
        }
       
    };

    render(){
        console.log(this.props);
        return(
                <img src={this.props.src} alt={this.props.name} key={this.props.id} onClick={this.handleCount} className="custom-image"/>
        );
    }   
};

export default SingleImage;