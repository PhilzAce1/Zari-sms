import styled, { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Peddana&family=Poppins&display=swap');
${normalize}
* {
  text-decoration: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    max-height:100vh;
    overflow-y:hidden
  
  
}
body {
  font-size: 16px;
  font-family:'Poppins', sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
  padding:0;
}
`;

export const Button = styled.button`
  background: #5c3d67;
  color: white;
  padding: 4px 9px;
  border-radius: 5px;
`;
