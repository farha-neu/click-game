import React from "react";
import SingleImage from "./SingleImage";
import "./ImageCard.css";


const ImageCard =(props)=>(
     
     props.images.map(item=>(
        // <img src={item.src} alt={item.src} key={item.id} className="custom-image"/>
        <SingleImage src={item.src} name={item.alt} id={item.id} key={item.id}/>
     ))
)
   

export default ImageCard;