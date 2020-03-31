import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledField = styled.div`
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

    ${({ grayed }) =>
      grayed &&
      css`
        filter: grayscale(70%);
      `}

    &:hover {
      filter: drop-shadow(5px 5px 10px rgba(221, 255, 83, 0.7));
    }

    * {
      pointer-events: visibleFill;
      cursor: pointer;
    }
  }
`;

const Field = ({ svgComponents }) => {
  const [level, setLevel] = React.useState(-1);

  const handleClick = React.useCallback(() => {
    setLevel((lvl) => (lvl === 4 ? -1 : lvl + 1));
  }, [level]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLevel((lvl) => (lvl === 4 ? -1 : lvl + 1));
    }, 3000 + Math.random() * 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Image = svgComponents[level < 0 ? 0 : level];

  return (
    <StyledField grayed={level === -1} readyToHarvest={level === 3}>
      <Image onClick={handleClick} />
    </StyledField>
  );
};

Field.propTypes = {
  svgComponents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Field;
