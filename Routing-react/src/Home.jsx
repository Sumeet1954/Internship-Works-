import './Home.css'

function Home({h6,h3,h3_1,span,para,btn_1,btn_2,img_src,styl}) {
  return (
    <>
        <section className="Hero-sec">
          <div className="content">
            <div className="ctn">
              <h6>{h6}</h6>
              <h3>
              {h3}
              <span>{span}</span>
              {h3_1}
              </h3>
              <p>{para}
              </p>
              <button id={styl} className="button" style={{backgroundColor:'#ffbf3f'}}>{btn_1}
              </button>
              <button id="btn-2" className="button">
                <a href="/">{btn_2}</a>
              </button>
            </div>
            <div className="pic">
              <img src={img_src}></img>
            </div>
          </div>
        </section>
    </>
  )
}
export default Home;