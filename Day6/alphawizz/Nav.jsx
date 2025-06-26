import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary Hero-sec">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#"> <img src="/images/logo.png"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-bar-nav" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Taxes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accounting</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      {/* <div className="Nav-sec Hero-sec">
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
        </div> */}
    </>
  );
}
export default Nav;
