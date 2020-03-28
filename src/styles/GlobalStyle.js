import { createGlobalStyle, css } from 'styled-components/macro';
import device from './device';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Lato, sans-serif;
    font-size: 62.5%;

    /* @media ${device.desktop2K} {
      font-size: 80%;
    }

    @media ${device.desktop3K} {
      font-size: 95%;
    }

    @media ${device.desktop4K} {
      font-size: 125%;
    } */
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${({ disableScrolling }) =>
    disableScrolling &&
    css`
      body {
        height: 100vh;
        overflow-y: hidden;
      }
    `}
`;

export default GlobalStyle;
