import React from 'react';
import { BuySMSUnitContainer, BuySMSUnitButton } from '../styles/MainStyle';

function BuySMSUnit(props) {
  const btnContent = [
    { str: 'BUY WITH ATM', color: '#009773' },
    { str: 'BUY WITH USSD', color: '#0092D9' },
    { str: 'BUY WITH CASH ', color: '#8a1b81' },
  ];
  const mapBtn = btnContent.map(({ str, color }, i) => (
    <BuySMSUnitButton bg={color} key={i}>
      {str}
    </BuySMSUnitButton>
  ));

  return <BuySMSUnitContainer>{mapBtn}</BuySMSUnitContainer>;
}

export default BuySMSUnit;
