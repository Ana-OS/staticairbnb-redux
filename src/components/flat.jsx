import React from 'react';

const Flat = (props) => { const style = {

  backgroundImage: `url(${props.flat.imageUrl})` };

  return (
    <div className="flat card-container">
      <div className="card" style={style}> 

      </div>
    </div>
  );
};

export default Flat;