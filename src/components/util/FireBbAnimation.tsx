import React from "react";

const FireBbAnimation = () => {
  return (
    <div>
      {
        Array(500).fill(0).map((_, i) => (
          <div key={i} className="firefly"></div>
        ))
      }
    </div>
  );
};

export default FireBbAnimation;
