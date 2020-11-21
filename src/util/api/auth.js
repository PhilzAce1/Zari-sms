import axios from 'axios';
import { message } from 'antd';

const url = 'https://zari-sms.herokuapp.com';
export const signup = async (data, cb) => {
  try {
    const res = await axios.post(`${url}/signup`, data);
    console.log(res);
    if (res.data.success) {
      message.success('User Created 🙂 ');
      cb(res.data.payload);
    }
  } catch (error) {
    console.log(error);
    message.error(error.response.data.message);
  }
};

export const login = async (data, cb) => {
  try {
    const res = await axios.post(`${url}/login`, data);
    if (res.data.success) {
      message.success('User Logged In Successfully 🙂 ');
      cb(res.data.payload);
    }
  } catch (error) {
    console.log(error);
    message.error(error.response.data.message);
  }
};
export const sendMail = async (data, cb, token) => {
  try {
    const res = await axios.post(`${url}/sendmessage`, data, {
      headers: {
        'x-auth-token': token,
      },
    });
    if (res.data.success) {
      message.success('Message Delivered Successfully 🙂 ');
      cb(res.data.payload);
    }
  } catch (error) {
    console.log(error);
    message.error(error.response.data.message);
  }
};
