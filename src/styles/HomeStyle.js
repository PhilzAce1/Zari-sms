import styled, { css } from 'styled-components';
import BackImagePic from '../assets/images/landingbackimage.png';
export const Header = styled.h1`
  width: 100%;
  .desktop_hidden {
    display: none;
  }
  @media (max-width: 600px) {
    .desktop_hidden {
      display: block;
    }
    .mobile_hidden {
      display: none;
    }
    img {
      transform: scale(0.5);
    }
  }
`;
export const NavList = styled.ul`
  width: 100%;
  height: 2vh;
  font-size: 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    ${(props) =>
      props.mobileNav &&
      css`
        height: 100%;
        align-items: flex-start;
        flex-flow: column nowrap;
      `};
  }
`;
export const NavItem = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
  color: black;
`;

export const BackImage = styled.div`
  height: 50vh;
  width: 100%;
  background-repeat: no-repeat;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.651) 0%,
      rgba(28, 25, 23, 0.75) 100%
    ),
    url(${BackImagePic});
  background-blend-mode: multiply;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-size: 2.7em;
  font-weight: 600;
  position: relative;
  color: white;
  .message_us {
    position: absolute;
    left: 0;
    top: 100%;
  }
  & > * {
    margin: 0;
  }
`;
export const HomeCard = styled.div`
  height: 100px;
  width: 130px;
  background: #5c3d67;
  margin: 40px;
  @media (max-width: 600px) {
    margin: 5px;
    font-size: 0.8rem;
    img {
      width: 40%;
      height: auto;
      margin-bottom: 4px;
    }
  }
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  img {
    margin-top: 10px;
  }
`;
export const CardList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
`;
export const ImageSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  img {
    margin: 3% 10%;
  }
`;
export const WhyChooseUsSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  & > header {
    font-weight: 700;
    font-size: 1.6rem;
  }
`;
export const WhyChooseUsCardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90%;
`;
export const WhyChooseUsCard = styled.div`
  flex-basis: 25%;
  margin: 2% 10%;
  background: white;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  box-shadow: 0 10px 14px 0px rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    flex-basis: 100%;
  }
  header {
    font-size: 1.2rem;
    margin-left: 5%;
    font-weight: 700;
  }
  p {
    margin-left: 5%;
  }
  img {
    margin-left: auto;
    padding-bottom: 10px;
  }
`;

export const Footer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: #5c3d67;
  font-weight: bold;
  padding: 30px;

  p {
    font-size: 1.2rem;
    margin: 1.3% 0;
  }
  .larger_text {
    font-size: 1.7rem;
    font-weight: bolder;
  }
  .black {
    color: black;
  }
  .img_container {
    height: 80px;
    width: 100px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 10px;
    border-radius: 10px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.6);
  }
  position: relative;
  & > div {
    display: flex;
  }
  .whatsapp {
    right: 0;
    position: absolute;
    top: 30%;
  }
  img {
  }
  footer {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: bolder;
    color: black;
  }
`;
