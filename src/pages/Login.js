import React from 'react';
import {
  AuthContainer,
  FormContainer,
  InnerFormContainer,
} from '../styles/AuthStyles';
import LockIcon from '../assets/images/signin_lock.PNG';
import EmailIcon from '../assets/images/signin_message.PNG';
import { Form, Input } from 'antd';
import { login } from '../util/api/auth';
import { useGlobalDispatchContext } from '../context/globalContext';
import { useHistory } from 'react-router-dom';
const { Item } = Form;

function Login() {
  const dispatch = useGlobalDispatchContext();
  const history = useHistory();
  function onSubmitSuccess(data) {
    dispatch({ type: 'SET_USER', user: data });
    history.push('/sendmessage');
  }
  function onSubmit(values) {
    login(values, onSubmitSuccess);
  }
  return (
    <AuthContainer>
      <Form onFinish={onSubmit}>
        <FormContainer>
          <InnerFormContainer>
            <Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Provide a valid email',
                },
                {
                  required: true,
                  message: 'email is required',
                },
              ]}
            >
              <Input
                prefix={<img src={EmailIcon} alt="Name" />}
                placeholder="Email Address"
              />
            </Item>
            <Item
              name="password"
              rules={[
                {
                  min: 6,
                  message: 'Password should be at least 6 characters',
                },
                {
                  required: true,
                  message: 'password is required',
                },
              ]}
            >
              <Input
                prefix={<img src={LockIcon} alt="Name" />}
                placeholder="Password"
                type="password"
              />
            </Item>
          </InnerFormContainer>
        </FormContainer>
        <button type="submit">SIGN IN</button>
      </Form>
    </AuthContainer>
  );
}
export default Login;
