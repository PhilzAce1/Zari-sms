import styled from 'styled-components';
import BackImage from '../assets/images/landingbackimage.png';
import BackgroundImage from '../assets/images/backimage.png';
export const AuthContainer = styled.div`
  height: 100vh;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    button {
      background: #5c3d67;
      color: white;
      border: 0;
      font-size: 1.8rem;
      padding: 10px 43px;
      border-radius: 10px;
    }
  }
`;

export const FormContainer = styled.div`
  width: 65%;
  height: 75%;
  @media (max-width: 600px) {
    width: 100%;
  }
  margin-bottom: 40px;
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.651) 0%,
      rgba(10, 10, 10, 0.4) 100%
    ),
    url(${BackImage});

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-blend-mode: darken;
  background-clip: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerFormContainer = styled.div`
  height: 93%;
  width: 93%;

  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  input {
    background: transparent;
    color: white;
    font-size: 1.7rem;
  }
  input:focus {
    color: black;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
  .ant-input-affix-wrapper {
    border: 0;
    background: transparent;
    border-bottom: 2px solid white;
    width: 500px;

    @media (max-width: 600px) {
      width: 80%;
    }
    padding-bottom: 10px;
    margin: 20px 0;
    img {
      margin-right: 20px;
    }
    input::placeholder {
      font-weight: bold;
      color: white;
      font-size: 1.2rem;
    }
  }
`;
