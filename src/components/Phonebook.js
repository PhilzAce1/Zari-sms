import React from 'react';
import {
  PhoneBookContainer,
  PhonebookFormContainer,
  PhoneBookGroupContainer,
} from '../styles/PhonebookStyles';

import { Form, Input } from 'antd';
import PhoneBookIcon from '../assets/images/add_record_contact.PNG';
function Phonebook(props) {
  return (
    <PhoneBookContainer>
      <Form
        style={{
          display: 'flex',
        }}
      >
        <PhonebookFormContainer>
          <div>
            <img src={PhoneBookIcon} alt="phone_book" />
          </div>
          <div>
            <Form.Item>
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Enter group name" />
            </Form.Item>
          </div>
        </PhonebookFormContainer>
        <button type="submit">ADD RECORD</button>
      </Form>
      <PhoneBookGroupContainer>Or Choose a group</PhoneBookGroupContainer>
    </PhoneBookContainer>
  );
}

export default Phonebook;
