import React from 'react';
import Bin from '../assets/images/bin_icon.PNG';

function Draft(props) {
  return (
    <div
      style={{
        padding: '5%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '2rem',
      }}
    >
      0 Draft SMS
      <img
        style={{
          marginLeft: '30px',
        }}
        src={Bin}
        alt="bin"
      />
    </div>
  );
}

export default Draft;
