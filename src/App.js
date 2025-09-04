import './App.css';

import React, { useState } from "react";

export default function App() {
  const [limit, setLimit] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleGenerate = () => {
    const num = parseInt(limit);
    if (!isNaN(num) && num > 0) {
      const arr = Array.from({ length: num }, (_, i) => i + 1);
      setNumbers(arr);
    } else {
      setNumbers([]);
    }
  };

  return (
    <div>
      <h1>Natural Numbers Generator</h1>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleGenerate}>Generate</button>

      <div>
        {numbers.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </div>
    </div>
  );
}

