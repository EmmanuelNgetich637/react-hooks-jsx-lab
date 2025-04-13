import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import myImage from "../images/myImage.jpg";

function App() {
  return <About imageSrc={myImage} />;(
    <div>
      <NavBar />
      <Home />
      <About />
      <About imageSrc={myImage} />
    </div>
  );
}

export default App;
