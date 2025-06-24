import React from 'react'

function Price({oldPrice, NewPrice}) {
  let styles = {
    textDecorationLine: "Line-through",
  };
  
    return (
    <div style={{backgroundColor : "yellow" ,}} >
        <span style = {styles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{fontWeight: "bold"}}>{NewPrice}Rs</span>
    </div>
  )
}
export default Price;