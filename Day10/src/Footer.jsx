import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="div-ft">
            <img src="js1.png" alt="Jetsetter Logo" class="logo" />
            <h6>More of Us </h6>
            <ul>
              <li>JetSetter</li>
              <li>JetMart</li>
            </ul>
          </div>
          <div className="div-ft">
            <h6>For Restaurants</h6>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>
          <div className="div-ft">
            <h6>For Delivery Partners</h6>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>
          <div className="div-ft">
            <h6>Learn More</h6>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Refund & Cancellation</li>
              <li>Return Policies</li>
              <li>Shipping Policies</li>
            </ul>
          </div>
          <div className="div-ft">
            <h6>Social Links</h6>
            <span></span>
          </div>
        </div>
        <div className="footer-bootom"></div>
      </footer>
    </>
  );
};

export default Footer;
