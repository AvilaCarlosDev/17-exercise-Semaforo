import React, { useState } from "react";

//include images into your bundle
import "../../styles/index.scss";
//Creating a traffic light with an extra light
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("orange");
  const [colors, setColors] = useState(["red", "orange", "green"]);

  const toggleCycle = () => {
    const idx = colors.indexOf(selectedColor);
    const next = colors[(idx + 1) % colors.length];
    setSelectedColor(next);
  };

  const addPurple = () => {
    if (!colors.includes("purple")) setColors((prev) => [...prev, "purple"]);
  };

  return (
    <>
      <h2 className="traffic-title">La Traffic Light</h2>

      <div className="traffic-light" role="list">
        {colors.map((c) => (
          <div
            key={c}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedColor(c)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelectedColor(c);
            }}
            className={`light ${c}${selectedColor === c ? " glow" : ""}`}
          />
        ))}
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
