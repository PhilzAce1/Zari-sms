import React from 'react';
import {
  HomeCard,
  CardList,
  BackImage,
  ImageSection,
} from '../styles/HomeStyle';
import ShoppingImage from '../assets/images/shopping_cart_icon.PNG';
import NoteBoard from '../assets/images/note_board.PNG';
import PenIcon from '../assets/images/pen_icon.PNG';
import Phone from '../assets/images/phone.PNG';
import GooogleImage from '../assets/images/google_play_icon.PNG';
import MessageUsIcon from '../assets/images/message_us_icon.PNG';
const cardArr = [
  { text: 'Send SMS', img: PenIcon },
  { text: 'Buy SMS unit', img: ShoppingImage },
  { text: 'Blog', img: NoteBoard },
];
function Landing(props) {
  const cards = cardArr.map(({ text, img }) => <Cards text={text} img={img} />);
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <BackImage>
        <div className="message_us">
          <img src={MessageUsIcon} alt="message us_icon" />
        </div>
        <p>Smooth</p>
        <p>Experience</p>
      </BackImage>
      <CardList>{cards}</CardList>
      <ImageSection>
        <img src={GooogleImage} alt="" />
        <img src={Phone} alt="" />
      </ImageSection>
    </div>
  );
}

function Cards({ img, text }) {
  return (
    <HomeCard>
      <img src={img} alt="card_list" />
      <p>{text}</p>
    </HomeCard>
  );
}
export default Landing;
