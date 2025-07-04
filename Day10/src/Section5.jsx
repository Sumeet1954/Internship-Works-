import "./Section5.css";

import React from "react";

const Section5 = () => {
  return (
    <>
      <section className="section5">
        <div className="container-s5">
          <div className="s5-part-1">
            <h2>Download the app now!   </h2>
            <p>Experience seamless online ordering
                        only on the Jetsetter app</p>
            <div class="images-s5">
              <div class="img1-s5">
                <a href="https://play.google.com/store/apps/details?id=jetsetter.user">
                  <img src="playStore.png"></img>
                </a>
              </div>
              <div class="img2-s5">
                <a href="https://apps.apple.com/us/app/jetsetter-india/id6471654482">
                  <img src="appStore.png"></img>
                </a>
              </div>
            </div>
          </div>
          <div className="s5-part-2">
            <img src="https://jetsetterindia.com/assets/front_end/classic/images/downloadImgQR.png"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
