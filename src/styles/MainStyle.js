import styled, { css } from 'styled-components';
import BackImagePic from '../assets/images/navbackimage.jpg';
import MainBackImage from '../assets/images/backimage.png';
export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;

  .ant-drawer-wrapper-body .ant-drawer-body {
    padding: 0 !important;
  }
`;
export const MainBody = styled.div`
  height: 100%;
  width: 80%;
  background: white;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(28, 25, 23, 0) 100%
    ),
    url(${MainBackImage});
  background-position-x: right;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: 70% 80%;
  .ant-drawer-wrapper-body .ant-drawer-body {
    padding: 0px !important;
  }
`;
export const Nav = styled.nav`
  height: 100%;
  width: 20%;

  background-image: radial-gradient(
      rgba(0, 0, 0, 0.651) 0%,
      rgba(28, 25, 23, 0.75) 100%
    ),
    url(${BackImagePic});
  background-blend-mode: multiply;
  background-size: contain;
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: white;
  justify-content: space-around;
  padding-top: 5%;
  .active_link {
    color: black;
    background: white;
  }
  a {
    width: 100%;
    padding: 15px;
    padding-left: 20%;
    color: white;
    font-size: 1.3rem;
    font-weight: bolder;
  }
  @media (max-width: 600px) {
    ${(props) =>
      props.desktopOnly &&
      css`
        display: none;
        width: 100%;
      `}
    width:100%
  }
`;
export const MainBodyNav = styled.div`
  width: 100%;
  height: 15%;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: space-between;
    flex-flow: row-reverse nowrap;
    padding: 10px;
  }
  p {
    margin-right: 4%;
    font-size: 1.5rem;
    vertical-align: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  img {
    height: 80%;
    /* margin-right: 1%; */
    @media (max-width: 600px) {
      max-width: 100px;
      height: auto;
    }
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
`;
export const SendMessageFormContainer = styled.div`
  height: 70%;
  width: 95%;
  border-bottom-right-radius: 5%;
  box-shadow: 1px 10px 10px rgba(0, 00, 0, 0.6);
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  ${(props) =>
    props.sentSMS &&
    css`
      overflow-y: auto;
      height: 80%;
    `}
  @media (max-width: 600px) {
    padding-left: 20px;
    box-shadow: 0 0 0 red;
    ${(props) =>
      props.sentSMS &&
      css`
        overflow-y: auto;
        height: 100%;
      `}
  }

  input {
    margin-left: 5px;
    background: transparent;
  }
  .ant-form-item-control-input-content {
    border: 0 !important;
  }
  .ant-input-affix-wrapper .ant-input-affix-wrapper-lg {
    border: 0 !important;
  }
  .ant-input-affix-wrapper {
    border: 0;
    border-bottom: 2px solid black;
    margin-top: 15%;
    background: transparent;
    width: 400px;
    @media (max-width: 600px) {
      width: 80%;
    }

    img {
    }
  }

  @media (max-width: 600px) {
    height: 85%;
    padding-bottom: 20%;
    width: 95vw;
    overflow: auto;
  }
  form {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      width: 100%;
    }
    p {
      color: green;
      font-size: 1rem;
      font-weight: bolder;
      color: #5c3d67;
    }
    button {
      border: 0;
      outline: none;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.6);
      font-size: 2rem;
      color: #5c3d67;
      border-radius: 5px;
      padding: 10px 50px;
    }
  }
  input::placeholder {
    font-size: 1.3rem;
    color: black;
    font-weight: 700;
  }
  .ant-input-textarea-show-count::after {
    color: #353f93;
    font-size: 1.4rem;
    font-weight: 800;
    position: absolute;

    top: -100px;
    right: 0;
  }
`;
export const AllInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45vh;
  ${(props) =>
    props.sentSMS &&
    css`
      padding: 0 10%;
      height: 40vh;
      box-shadow: 1px 20px 10px 10px rgba(0, 00, 0, 0.2);
      border-bottom-right-radius: 10%;
    `}
  @media(max-width:600px) {
    flex-flow: column;
    height: 100vh;
    overflow: auto;
    ${(props) =>
      props.sentSMS &&
      css`
        min-height: 80vh;
        border-radius: 0;
        box-shadow: 0 0 0 red;
      `}
  }
  justify-content: space-around;
`;
export const InputContainer = styled.div``;
export const TextAreaContainer = styled.div`
  border: 2em solid white;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.6);
  height: 80%;
  width: 40%;
  @media (max-width: 600px) {
    width: 100%;
    box-shadow: -10px 10px 10px rgba(0, 0, 0, 0);
  }
  padding: 20px;
  margin-top: 30px;
  ${(props) =>
    props.sentSMS &&
    css`
      padding: 15px;
    `}
  border-radius: 15px;
  textarea,
  .textcontent {
    height: 25vh !important;
    border-radius: 15px;
    ${(props) =>
      props.sentSMS &&
      css`
        height: 20vh !important;
      `}
  }
  textarea::placeholder {
    font-size: 1.5rem;
    color: black;
    padding-top: 10%;
    padding-left: 15%;
  }
  .textcontent {
    font-size: 1.5rem;
    color: black;
    height: 100%;
    width: 100%;
    padding: 10px;
    background: white;
    .actions {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const BuySMSUnitContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 90%;
  justify-content: center;
`;
export const BuySMSUnitButton = styled.button`
  width: 500px;
  height: 100px;
  background: ${(props) => props.bg};
  font-size: 1.8rem;
  color: white;
  border: 0;
  font-weight: bolder;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);
`;
