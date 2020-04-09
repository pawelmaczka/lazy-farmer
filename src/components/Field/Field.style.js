import styled, { css } from 'styled-components/macro';

export const Field = styled.div`
  width: 1em;
  height: 0.7em;
  display: inline-block;
  pointer-events: none;
  position: relative;

  &:nth-child(5n - 3) {
    transform: translate(-50%, -35%);
  }

  &:nth-child(5n - 2) {
    transform: translate(-100%, -70%);
  }

  &:nth-child(5n - 1) {
    transform: translate(-150%, -105%);
  }

  &:nth-child(5n) {
    transform: translate(-200%, -140%);
  }

  &:nth-child(n + 6) {
    left: 50%;
    top: -35%;
  }

  &:nth-child(n + 11) {
    left: 100%;
    top: -70%;
  }

  &:nth-child(n + 16) {
    left: 150%;
    top: -105%;
  }

  svg {
    pointer-events: none;

    ${({ isMenuOpened, grayscale }) => css`
      filter: ${grayscale && 'grayscale(70%)'}
        ${isMenuOpened && 'drop-shadow(5px 5px 10px rgba(255, 255, 255, 0.7))'};
    `}

    &:hover {
      ${({ grayscale }) => css`
        filter: ${grayscale && 'grayscale(70%)'}
          drop-shadow(5px 5px 10px rgba(255, 255, 255, 0.7));
      `}
    }

    * {
      pointer-events: visibleFill;
      cursor: pointer;
    }
  }
`;
