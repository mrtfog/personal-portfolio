import React from 'react';

const Ellipses = ({ isRed ,height, width, top, left }) => {
  
  return (
    <> 
        {
            isRed ? (
                <div style={{ height: `${height}`, width: `${width}`, top: `${top}`, left: `${left}` ,borderRadius: '100%', backgroundColor:'#FF0049', position: 'absolute', transform: 'translate(-50%, -50%)'}}></div>
            ) : (

                <div style={{ height: `${height}`, width: `${width}`, top: `${top}`, left: `${left}` ,borderRadius: '100%', backgroundColor:'#6B00FF', position: 'absolute', transform: 'translate(-50%, -50%)'}}></div>
            )
        }
    </>
  )
}

export default Ellipses