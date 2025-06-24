import React from 'react'
import './index.css'
import Price from './price';

 function Card({heading , listcnt , listcnt2 , idx}){
     const oldPrice = [9000,10000,3000,399];
     const NewPrice = [7999,8999,1299,278];
    return(
         <div className='Raw'>
        <h6>{heading} </h6>
        <ul>
            <li>{listcnt}</li>
            <li>{listcnt2}</li>
        </ul>
        <Price oldPrice = {oldPrice[idx]} NewPrice={NewPrice[idx]}/>
    </div>
    )
 }
 export default Card;