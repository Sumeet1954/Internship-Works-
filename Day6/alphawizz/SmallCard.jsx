import React from "react";
import "./index.css";

const SmallCard = ({title,icon,}) => {
  return (
    <>
       <div className="small-card">
       <div>
        <div className="small-card-img-icon"><img src={icon}></img>
        <p>{title}</p>
        </div>
        <div className="small-card-icn">
        <span>
          <img src="/images/right-arrow.png" id="small-card-icon"></img>
        </span>
       </div>
       </div>
       </div>
    </>  
  );
};

export default SmallCard;
