import "./Section1.css";
export default function Section1() {
  return (
    <>
      <div className="section1">
        <div className="section1__content">
          <h2>Better food for{<br />}more people</h2>
          <p>
            For over a decade, we’ve enabled our{<br />}customers to discover
            new tastes,{<br />}delivered right to their doorstep
          </p>
          <div className="section1-card">
            <div className="col1">
              <h3>999+</h3>
              <p>Restaurents</p>
            </div>
            <div>
              {" "}
              <img src="https://jetsetterindia.com/assets/front_end/classic/images/countImg1.webp"></img>
            </div>

            <div className="col1">
              <h3>99+</h3>
              <p>Cities</p>
            </div>
            <div>
              
              <img src="https://jetsetterindia.com/assets/front_end/classic/images/countImg2.png"></img>
            </div>

            <div className="col1">
              <h3>1 Million+</h3>
              <p>order delivered</p>
            </div>
            <div>
              <img src="https://jetsetterindia.com/assets/front_end/classic/images/countImg3.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
