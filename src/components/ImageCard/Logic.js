import React from "react";
import ImageCard from "./ImageCard";
import images from "./../../images.json";

console.log(images);

const Logic = () =>(
    <div>
        <ImageCard images={images}/>
    </div>
);


export default Logic;
