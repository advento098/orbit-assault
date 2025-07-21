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
          <li></li>
        </ul>
      </nav>

      <section>
        <h1 className="poppins-regular">
          ORBIT <br />
          <span className="poppins-bold">ASSAULT</span>
        </h1>
      </section>
      <section></section>
    </div>
  );
}

export default App;
