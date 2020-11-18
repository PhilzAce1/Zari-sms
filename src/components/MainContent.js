import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BuySMSUnit from '../components/BuySMSUnit';
import Draft from '../components/Draft';
import Phonebook from '../components/Phonebook';
import SendSms from '../components/SendSMS';
import SentSms from '../components/SentSMS';
function MainContent(props) {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <Switch>
        <Route path="/sendmessage" component={SendSms} />
        <Route path="/buysmsunit" component={BuySMSUnit} />
        <Route path="/draft" component={Draft} />
        <Route path="/phonebook" component={Phonebook} />
        <Route path="/sentsms" component={SentSms} />
      </Switch>
    </div>
  );
}

export default MainContent;
