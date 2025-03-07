import { useState } from "react";

export default function AvatarChanger() {
  const [bgColor, setBgColor] = useState("#4A90E2");
  const defaultColor = "#4A90E2";
  const predefinedColors = ["#ff0000", "#00ff00", "#ffff00", "#ffffff"];

  return (
    <div className="app-container">
      <div className="card" style={{ backgroundColor: bgColor }}>
        <div className="avatar">
          <span>👤</span>
        </div>

        <div className="color-picker-container">
          {predefinedColors.map((color) => (
            <button
              key={color}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => setBgColor(color)}
            />
          ))}
        </div>

        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="color-picker"
        />

        <button
          className="reset-button"
          onClick={() => setBgColor(defaultColor)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
