import "./index.css";

function Sec1() {
  return (
    <>
      <section class='sec-1'>
            <div>
              <button id="btn-3" className="button">Solutions</button>
              <h3 style={{ color: "black" }}>The global payroll solution</h3>
              <p>
                When it comes to payroll solutions, we have a variety of options
                that benefit both your company and your contractar
              </p>
            </div>
        </section>

        <section className="sec-2">
          <div className="item1">
            <img src="/images/solution_illustrations.png"></img>
          </div>
          <div className="item2">
            <h3>Consolidate Payroll Processing</h3>
            <p>We home designed a fost and effective payrail system that streamlines your payment procesn</p>
            <section className="sub-sec-2">
              <div className="item1" >
                <img src="/images/file.png" id="icn-prt-1"/>
                <span>Tax Preparation</span>
                <img src="/images/shuttle.png" id="icn-prt-1" />
                <span>Scale Rapidly</span>
              </div>
              <div className="item2">
                <img src="/images/hand-with-heart.png" id="icn-prt-1"/>
                <span>Payroll Processing</span>
                <img src="/images/lamp.png" id="icn-prt-1"/>
                <span>Cost Effective</span>
              </div>
            </section>
          </div>
        </section>
    </>
  );
}
export default Sec1;
