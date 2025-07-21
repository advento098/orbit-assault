import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div>
      <video ref={videoRef} autoPlay loop muted>
        <source src="./src/assets/space-background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default App;
