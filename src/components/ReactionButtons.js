import React, { useState } from "react";

export default function ReactionButtons() {
  const [active, setActive] = useState(null);
  const reactions = ["Like", "Love", "Angry", "Sad"];
  const percentages = ["15%", "60%", "10%", "15%"];

  return (
    <div className="reaction-container">
      {reactions.map((reaction, index) => (
        <button
          key={reaction}
          className={`reaction-btn ${active === reaction ? "active" : ""}`}
          onClick={() => setActive(reaction)}
        >
          {reaction} {percentages[index]}
        </button>
      ))}
    </div>
  );
}
