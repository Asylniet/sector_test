import { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Popup from "./components/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const buttonClick = () => {
    setShowPopup(!showPopup);
  }
  return (
    <div className="App">
      <Header />
      {/* <Window /> */}
      <HeroSection func={buttonClick} />
      <Popup active={showPopup} func={buttonClick} />
    </div>
  );
}

export default App;
