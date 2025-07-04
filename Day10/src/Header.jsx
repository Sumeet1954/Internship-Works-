import "./Header.css";

export default function Header() {
  return (
    <>
        <div className="video-background">
          <video muted autoPlay loop playsInline>
            <source
              src="https://jetsetterindia.com/assets/front_end/classic/images/homeVideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="overlay">
          <img src="js1.png" alt="Jetsetter Logo" class="logo" />
          <h1>India’s #1 {<br />} food delivery app</h1>
          <p>
            Experience fast & easy online ordering {<br />} on the Jetsetter app
          </p>
          <div class="images">
          <div class="img1">
            <a href="https://play.google.com/store/apps/details?id=jetsetter.user"><img src="playStore.png"></img></a>
          </div>
          <div class="img2">
             <a href="https://apps.apple.com/us/app/jetsetter-india/id6471654482"><img src="appStore.png"></img></a>
          </div>
        </div>
        <div className="bouncing-text">Scroll Down </div>
        </div>
    </>
  );
}
