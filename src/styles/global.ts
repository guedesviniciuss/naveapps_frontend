import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F0F0;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
