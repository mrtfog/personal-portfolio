import React from 'react';

const MouseTracker = ({ handleMouseMove, mousePosition }) => {

  
  return (
    <div onMouseMove={(event) => handleMouseMove(event)}>
      <div
        style={{
          position: 'absolute',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#FF0049',
          zIndex: 50
        }}
      ></div>
    </div>
  );
}

export default MouseTracker;