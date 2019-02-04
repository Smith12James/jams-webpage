import React from 'react';
import './Landing.css';

const Landing = () => (
  <section className="landing">
    <img className="blurred-image" src="./assets/images/blurred_backgrounds/blur_bg_3.jpg" alt="Blurred colors" />
    <h1 className="hero-title">Turn the music up!</h1>
    <section className="selling-points">
      <div className="point"><hr className="hr1" />
        <h2 id="choose"className="point-title">Choose your music</h2>
        <img src="./assets/images/girl_listening.jpg" className="girl-listening" alt="girl listening to music"></img>
        <p id="your-music" className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point"><hr className="hr2" />
        <h2 id="unlimited" className="point-title">Unlimited, streaming, ad-free</h2>
        <img src="./assets/images/no-limits.jpg" className="no-limits" alt="no limits"></img>
        <p id="streaming" className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 id="mobile" className="point-title">Mobile enabled</h2>
        <img src="./assets/images/on-the-go.jpg" className="on-go" alt="Music on the go"></img>
        <p id="enabled" className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
