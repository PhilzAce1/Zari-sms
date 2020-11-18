import React from 'react';
import {
  WhyChooseUsSection,
  WhyChooseUsCard,
  WhyChooseUsCardList,
} from '../styles/HomeStyle';
import FlashIcon from '../assets/images/flash_icon.PNG';
import MoneyIcon from '../assets/images/money_icon.PNG';
import ContactIcon from '../assets/images/contact_card.PNG';
import DndIcon from '../assets/images/dnd_icon.PNG';
import ScheduleMessage from '../assets/images/schedule_sms.PNG';
import ClockIcon from '../assets/images/clock_icon.PNG';

function WhyChooseUs(props) {
  return (
    <WhyChooseUsSection>
      <header>Why Choose Us ?</header>
      <CardList />
    </WhyChooseUsSection>
  );
}
function CardList() {
  const cardData = [
    {
      img: FlashIcon,
      header: 'Super Fast SMS Delivery',
      body:
        'Get messages delivered in to recipients as fast as you can ever imagine',
    },
    {
      img: MoneyIcon,
      header: 'Affordable SMS Pricing',
      body: '1 = 1 SMS to all Networks in Nigeria',
    },
    {
      img: ContactIcon,
      header: 'Phonebook Management',
      body:
        'Create phonebook groups and add contacts which you can  easily select and send messages',
    },
    {
      img: DndIcon,
      header: 'Delivery to DND Numbers',
      body:
        ' Deliver your messages to “Do Not Disturb” numbers at the            same price',
    },
    {
      img: ScheduleMessage,
      header: 'Schedule SMS',
      body: 'Compose a message and choose a date and time to send it',
    },
    {
      img: ClockIcon,
      header: '24/7',
      body: 'We are always available to provide services to you',
    },
  ];
  const cardList = cardData.map(({ img, header, body }) => (
    <WhyChooseUsCard>
      <img src={img} alt="some stuff" />
      <header>{header}</header>
      <p>{body}</p>
    </WhyChooseUsCard>
  ));

  return <WhyChooseUsCardList>{cardList}</WhyChooseUsCardList>;
}

export default WhyChooseUs;
