import "./index.css";

function Nav() {
  return (
    <>
      <div className="Nav-sec">
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

      </div>
    </>
  );
}
export default Nav;
