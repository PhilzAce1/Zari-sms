import React from 'react';
import { SendMessageFormContainer } from '../styles/MainStyle';
import SentSMSData from './SentSMSData';

function SentSMS() {
  return (
    <SendMessageFormContainer sentSMS>
      <SentSMSData />
      <SentSMSData />
      <SentSMSData />
    </SendMessageFormContainer>
  );
}

export default SentSMS;
