import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono';
    src: url('./fonts/Roboto-Light.ttf');
  }

  * {
    font-family: 'RobotoMono', monospace;
  }

  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background: linear-gradient(to right, rgb(83, 105, 116), rgb(41, 46, 73));
  }
`
export default GlobalStyle
