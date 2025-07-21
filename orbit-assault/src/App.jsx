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
          <li></li>
        </ul>
        <ul>
          <li>About</li>
          <li>News</li>
          <li>Shop</li>
          <button>Login</button>
        </ul>
      </nav>

      <section>
        <h1 className="poppins-regular">
          ORBIT <br />
          <span className="poppins-bold">ASSAULT</span>
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
