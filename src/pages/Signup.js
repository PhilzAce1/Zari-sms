import React from 'react';
import {
  AuthContainer,
  FormContainer,
  InnerFormContainer,
} from '../styles/AuthStyles';
import ProfileIcon from '../assets/images/sign_in_contact.PNG';
import LockIcon from '../assets/images/signin_lock.PNG';
import EmailIcon from '../assets/images/signin_message.PNG';
import { Form, Input } from 'antd';
const { Item } = Form;

function Signup() {
  return (
    <AuthContainer>
      <Form>
        <FormContainer>
          <InnerFormContainer>
            <Item>
              <Input
                prefix={<img src={ProfileIcon} alt="Name" />}
                placeholder="Name"
              />
            </Item>
            <Item>
              <Input
                prefix={<img src={EmailIcon} alt="Name" />}
                placeholder="Email Address"
              />
            </Item>
            <Item>
              <Input
                prefix={<img src={LockIcon} alt="Name" />}
                placeholder="Password"
              />
            </Item>
          </InnerFormContainer>
        </FormContainer>
        <button type="submit">SIGN IN</button>
      </Form>
    </AuthContainer>
  );
}
export default Signup;
