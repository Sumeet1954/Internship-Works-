import "./index.css";

function Nav() {
  return (
    <>
      <div className="Section-1">
        <div className="nav-bar">
          <div className="logo">
            <img src="/images/logo.png"></img>
          </div>
          <div className="nav-items">
            <a href="/">Home</a>
            <a href="/">Services</a>
            <a href="/">Taxes</a>
            <a href="/">Accounting</a>
          </div>
        </div>

        {/* This Part is Hero Section */}

        <section className="Hero-sec">
          <div className="content">
            <div className="ctn">
              <h6>EFFICIENCY PAYROLL AND WORKFORCE MASTERY</h6>
              <h3>
                We Make<span> Payroll</span> Painless.
              </h3>
              <p>
                We get your employee paid while providing online access to
                paystubs,tax reports and payroll tax filings
              </p>
              <button id="btn-1" className="button">
                Get Started
              </button>
              <button id="btn-2" className="button">
                <a href="/">Learn More</a>
              </button>
            </div>
            <div className="pic">
              <img src="/images/hero_illus.png"></img>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Nav;
