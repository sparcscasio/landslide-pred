import React, { useState } from "react";

const CircleSelector = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex justify-center gap-4 p-4 bg-blue-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`w-12 h-12 rounded-full border-2 cursor-pointer transition-all ${
            selected === index ? "bg-blue-500 border-blue-500" : "bg-white border-gray-400"
          }`}
          onClick={() => setSelected(index)}
        />
      ))}
    </div>
  );
};

export default CircleSelector;
