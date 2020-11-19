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
const { TextArea } = Input;

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
        <TextArea
          showCount
          maxLength={160}
          placeholder="
        Type your message"
        />
      </TextAreaContainer>
    </AllInputContainer>
  );
}

export default SentSMSData;
