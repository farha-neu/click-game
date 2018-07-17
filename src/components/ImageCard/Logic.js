import React from "react";
import ImageCard from "./ImageCard";
import images from "./../../images.json";

console.log(images);


class Logic extends React.Component {
    render(){
        return(
            <div>
                <ImageCard images={images}/>
            </div>
        )     
    }

}


export default Logic;
