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
import { signup } from '../util/api/auth';
import { useGlobalDispatchContext } from '../context/globalContext';
import { useHistory, Link } from 'react-router-dom';
const { Item } = Form;

function Signup() {
  const dispatch = useGlobalDispatchContext();
  const history = useHistory();
  function onSubmitSuccess(data) {
    dispatch({ type: 'SET_USER', user: data });
    history.push('/sendmessage');
  }
  function onSubmit(values) {
    signup(values, onSubmitSuccess);
  }
  return (
    <AuthContainer>
      <Form onFinish={onSubmit}>
        <FormContainer>
          <InnerFormContainer>
            <Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Name is required',
                },
              ]}
            >
              <Input
                prefix={<img src={ProfileIcon} alt="Name" />}
                placeholder="Name"
              />
            </Item>
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
                type="password"
                placeholder="Password"
              />
            </Item>
          </InnerFormContainer>
        </FormContainer>
        <button type="submit">SIGN IN</button>
        Or{' '}
        <Link
          style={{
            fontSize: '1.2rem',
          }}
          to="/login"
        >
          Login
        </Link>
      </Form>
    </AuthContainer>
  );
}
export default Signup;
