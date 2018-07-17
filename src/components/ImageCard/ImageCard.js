import React from "react";
import SingleImage from "./SingleImage";
import "./ImageCard.css";


class ImageCard extends React.Component {
    render(){
        return(
            this.props.images.map(item=>(
                <SingleImage src={item.src} name={item.alt} id={item.id} key={item.id}/>
             ))
        )     
    }

}
export default ImageCard;