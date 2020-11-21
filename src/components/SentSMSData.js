import React from 'react';

import { Input } from 'antd';
import {
  InputContainer,
  AllInputContainer,
  TextAreaContainer,
} from '../styles/MainStyle';
import UserNameProfile from '../assets/images/username_profile.PNG';
import PeopleImage from '../assets/images/user_phonenumber.PNG';
import PlusSign from '../assets/images/plus_sign.PNG';
import Bin from '../assets/images/message_bin.PNG';
import CreatedAtIcon from '../assets/images/message_created_at_icon.PNG';
import ShareIcon from '../assets/images/message_share_button.PNG';
import MessageTimeIcon from '../assets/images/message_time.PNG';

// const { TextArea } = Input;

function SentSMSData(props) {
  return (
    <AllInputContainer sentSMS>
      <InputContainer sentSMS>
        <Input
          placeholder="Sender's Name"
          size="large"
          prefix={<img src={UserNameProfile} alt="stuff" />}
        />
        <Input
          placeholder="Destination Email's "
          size="large"
          prefix={<img src={PeopleImage} alt="stuff" />}
          suffix={<img src={PlusSign} alt="stuff" />}
        />
      </InputContainer>
      <TextAreaContainer sentSMS>
        <div className="textcontent">
          <p>You are a good person , how are you</p>
          <div className="actions">
            <span>
              <img src={CreatedAtIcon} alt="stometj" />
              12/11/2020
            </span>
            <span>
              <img src={MessageTimeIcon} alt="stometj" />
              12:06 PM
            </span>
            <span>
              <img src={ShareIcon} alt="stometj" />
            </span>
            <span>
              <img src={Bin} alt="stometj" />
            </span>
          </div>
        </div>
      </TextAreaContainer>
    </AllInputContainer>
  );
}

export default SentSMSData;
