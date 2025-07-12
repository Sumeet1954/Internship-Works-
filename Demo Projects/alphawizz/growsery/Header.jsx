import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  //     useEffect(() => {
  //     AOS.init({
  //       duration: 1000,     // Animation duration
  //       mirror: true,       // 🔁 Animate on scroll up
  //       once: false         // 🔄 Animate every time you scroll past
  //     });
  //   }, []);

  return (
    <>
      <section class="theme-block">
        <header class="header">
          <div class="header-inner">
            <a href="#" class="header-logo">
              <img src="logo.png"></img>
            </a>
            <nav class="header-navigation">
              <a href="#" class="header-link">
                Home <i class="fa-solid fa-angle-down"></i>
              </a>
              <a href="#" class="header-link">
                About Us<i class="fa-solid fa-angle-down"></i>
              </a>
              <a href="#" class="header-link">
                Gallery <i class="fa-solid fa-angle-down"></i>
              </a>
              <a href="#" class="header-link">
                Service <i class="fa-solid fa-angle-down"></i>
              </a>
            </nav>
          </div>
        </header>
        <div className="hero-sec">
          <p style={{ color: "#858585" }}>KEEP WITH FOODANO</p>
          <h1 style={{ color: "#fff" }}>DELICIOUS AND</h1>
          <h1 style={{ color: "#fff" }}>ITALION</h1>
        </div>
      </section>
      <div data-aos="fade-down-right" className="svg-1">
        <img src="https://developmentalphawizz.com/html/grocery/assets/img/hero/slider-shape-1.png"></img>
      </div>
      <div data-aos="fade-up" className="svg-2">
        <img src="https://developmentalphawizz.com/html/grocery/assets/img/hero/slider-shape-2.png"></img>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="300"
        data-aos-mirror="true"
        data-aos-once="false"
        className="svg-3"
      >
        <img src="https://developmentalphawizz.com/html/grocery/assets/img/hero/slider-shape-3.png"></img>
      </div>
    </>
  );
};

export default Header;
