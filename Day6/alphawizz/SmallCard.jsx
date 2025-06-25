import React from "react";
import "./index.css";

const SmallCard = ({title,icon,bg_style}) => {
  return (
    <>
       <div className="small-card">
       <div className={bg_style}>
        <div><img src={icon}></img>
        <p>{title}</p>
        </div>
        <div>
        <span>→</span>
       </div>
       </div>
       </div>
    </>  
  );
};

export default SmallCard;
