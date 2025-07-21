import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="./src/assets/space-background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <nav>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <button>Login</button>
        </ul>
      </nav>

      <section>
        <h1 className="poppins-regular">
          SPACE <br />
          <span className="poppins-bold">VOYAGE</span>
        </h1>
      </section>
      <section>
        <p>Dare to test your limits in surviving the dark empty space?</p>
        <button className="neon-button poppins-regular">Download now!</button>
      </section>
    </div>
  );
}

export default App;
