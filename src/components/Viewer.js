import React from 'react';
import './grid.css';

const Viewer = ({ gridItems }) => {
  return (
    <div className="viewer">
      <div className="grid">
        {gridItems.map((item, index) => (
          <div key={index} className="grid-item">
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Viewer;
