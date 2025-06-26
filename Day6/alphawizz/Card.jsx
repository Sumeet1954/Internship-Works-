import './index.css';

function Card({img_src,para}){
    return(
        <>
           <div className='card-body'>
            <img src={img_src}></img>
            <p>{para}</p>
           </div>
        </>
    )
}
export default Card;