import React, { useState } from "react";

import "../../styles/index.scss";

// Creating a traffic light with an extra light
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const [colors, setColors] = useState(["red", "orange", "green"]);

  const toggleCycle = () => {
    const idx = colors.indexOf(selectedColor);
    const next = colors[(idx + 1) % colors.length];
    setSelectedColor(next);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) {
      setColors((prev) => [...prev, "purple"]);
    }
  };

  return (
    <>
      <h2 className="traffic-title">La Traffic Light</h2>

      <div className="traffic-light">
        <div
          className={"light red " + (selectedColor === "red" ? "glow" : "")}
          onClick={() => setSelectedColor("red")}
        >
          {/* luz roja */}
        </div>

        <div
          className={
            "light orange " + (selectedColor === "orange" ? "glow" : "")
          }
          onClick={() => setSelectedColor("orange")}
        >
          {/* luz naranja */}
        </div>

        <div
          className={"light green " + (selectedColor === "green" ? "glow" : "")}
          onClick={() => setSelectedColor("green")}
        >
          {/* luz verde */}
        </div>

        {colors.includes("purple") && (
          <div
            className={
              "light purple " + (selectedColor === "purple" ? "glow" : "")
            }
            onClick={() => setSelectedColor("purple")}
          >
            {/* luz púrpura */}
          </div>
        )}
      </div>

      <div className="controls">
        <button className="btn btn-primary" onClick={toggleCycle}>
          Toggle cycle
        </button>

        <button className="btn btn-secondary" onClick={addPurple}>
          Add purple
        </button>
      </div>
    </>
  );
};

export default Home;
