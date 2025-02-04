import React, { useState } from 'react';

const IncrementDecrement = () => {
  // Initialize state for the value
  const [value, setValue] = useState(0);

  // Function to increment the value
  const increment = () => {
    setValue(value + 1);
  };

  // Function to decrement the value
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Button to decrement value */}
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        -
      </button>
      {/* Display the current value */}
      <span className="text-xl font-semibold">{value}</span>
      {/* Button to increment value */}
      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        +
      </button>
    </div>
  );
};

export default IncrementDecrement;
