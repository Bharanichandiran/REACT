import React from "react";
import { useState } from "react";

const Header = () => {
  const [colors, setColors] = useState("black");
  const [newColor, setNewColor] = useState({
    background: "white",
  });

  const handleChange = () => {
    setColors(colors === "black" ? "white" : "black");
  };

  const handleColor = (e) => {
    setNewColor({
      background: e.target.value,
    });
  };

  return (
    <main>
      <div
        className="box"
        style={{
          color: colors,
          backgroundColor: newColor.background,
        }}
      >
        {colors}
      </div>
      <label>Enter your color</label>
      <input type="text" onChange={handleColor}></input>
      <button onClick={handleChange}>toggle</button>
    </main>
  );
};

export default Header;
