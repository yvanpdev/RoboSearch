import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px dashed black', borderRadius: '50px', height: '700px' }}>
      {props.children}
    </div>
  );
}

export default Scroll;