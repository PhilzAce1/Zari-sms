import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import {
  SendMessageFormContainer,
  InputContainer,
  AllInputContainer,
  TextAreaContainer,
  CheckboxContainer,
} from '../styles/MainStyle';
import Warning from '../assets/images/warning.PNG';
import UserNameProfile from '../assets/images/username_profile.PNG';
import PeopleImage from '../assets/images/user_phonenumber.PNG';
import PlusSign from '../assets/images/plus_sign.PNG';
const { TextArea } = Input;

function SendSMS(props) {
  function onFinish(values) {
    console.log(values);
  }
  return (
    <SendMessageFormContainer>
      <Form
        name="send_message_form"
        className="send_message_form"
        onFinish={onFinish}
        style={{
          width: '100%',
        }}
      >
        <AllInputContainer>
          <InputContainer>
            <Form.Item
              name="send_name"
              rules={[
                {
                  type: 'string',
                  message: 'The input is not valid name',
                },
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <Input
                placeholder="Sender's Name"
                size="large"
                prefix={<img src={UserNameProfile} alt="stuff" />}
              />
            </Form.Item>
            <Form.Item
              name="send_name"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not a valid email ',
                },
                {
                  required: true,
                  message: 'Please Destination Email!',
                },
              ]}
            >
              <Input
                placeholder="Destination Email's "
                size="large"
                prefix={<img src={PeopleImage} alt="stuff" />}
                suffix={<img src={PlusSign} alt="stuff" />}
              />
            </Form.Item>
          </InputContainer>

          <TextAreaContainer>
            <Form.Item>
              <TextArea
                showCount
                maxLength={160}
                placeholder="
              Type your message"
              />
            </Form.Item>
          </TextAreaContainer>
        </AllInputContainer>
        <p>
          <img src={Warning} alt="warning" />
          Avoid <span className="underline">spam words </span> to ensure
          delivery
        </p>
        <CheckboxContainer>
          <Form.Item name="dnd" valuePropName="checked">
            <Checkbox>Deliver to DND numbers?</Checkbox>
          </Form.Item>

          <Form.Item name="schedule " valuePropName="schedule">
            <Checkbox>Schedule Message</Checkbox>
          </Form.Item>
        </CheckboxContainer>

        <button type="submit">SEND MAIL</button>
      </Form>
    </SendMessageFormContainer>
  );
}

export default SendSMS;
