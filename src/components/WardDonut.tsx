import React from 'react';

const WardDonut: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Number of patients under respiratory support</h3>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="20"
          />
          {/* Segments - adjust stroke-dasharray and transform to create donut segments */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="20"
            strokeDasharray="60 251.2"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#0369A1"
            strokeWidth="20"
            strokeDasharray="50 251.2"
            transform="rotate(-30 50 50)"
          />
          {/* Add more segments as needed */}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-xl font-bold">WARDS</span>
            <p className="text-sm">Total: 145</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WardDonut;