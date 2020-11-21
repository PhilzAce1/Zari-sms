import styled from 'styled-components';

export const PhoneBookContainer = styled.div`
  height: 80%;
  width: 95%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  border-bottom-right-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-flow: column nowrap;
    width: 100vw;
    overflow-y: auto;
    height: 100vh;
  }
  form {
    height: 100%;
    flex-basis: 50%;
    height: 60%;
    @media (max-width: 600px) {
      flex-basis: 100%;
    }

    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    button {
      color: white;
      font-size: 1.8rem;
      padding: 5px 0;
      width: 40%;
      background-color: #5c3d67;
    }
  }
`;

export const PhonebookFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  background: white;
  margin-bottom: 50px;
  box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 30px;
  input {
    border: 0;
    border-bottom: 1px solid black;
  }
`;
export const PhoneBookGroupContainer = styled.div`
  flex-basis: 30%;
  height: 80%;
  border-radius: 20px;
  padding: 3%;
  box-shadow: 0 0 30px 10px rgba(00, 0, 0, 0.3);
  background: white;
  color: #5c3d67;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 600px) {
    flex-basis: 100%;
    height: 100%;
    margin-top: 30px;
  }
`;
export const PhonebookFormButton = styled.button``;
