import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Card({img_src,para}){
    return(
        <>
            <div className='card-cnt'>
               <div className="card" style={{width: "18rem"}}>
            <img src={img_src} className="card-img-top" alt="..."/>
                <div className="card-body">
             <p className="card-text">{para}</p>
            </div>
             </div>
            </div>
        </>
    )
}
export default Card;