import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledField = styled.div`
  width: 1em;
  height: 0.7em;
  display: inline-block;
  pointer-events: none;

  position: relative;

  &:nth-child(4n - 2) {
    transform: translate(-50%, -35%);
  }

  &:nth-child(4n - 1) {
    transform: translate(-100%, -70%);
  }

  &:nth-child(4n) {
    transform: translate(-150%, -105%);
  }

  &:nth-child(n + 5) {
    left: 50%;
    top: -35%;
  }

  &:nth-child(n + 9) {
    left: 100%;
    top: -70%;
  }

  &:nth-child(n + 13) {
    left: 150%;
    top: -105%;
  }

  svg {
    pointer-events: none;

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
  const [level, setLevel] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setLevel((lvl) => (lvl === 4 ? 0 : lvl + 1));
  }, [level]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLevel((lvl) => (lvl === 4 ? 0 : lvl + 1));
    }, 3000 + Math.random() * 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Image = svgComponents[level];

  return (
    <StyledField>
      <Image onClick={handleClick} />
    </StyledField>
  );
};

Field.propTypes = {
  svgComponents: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Field;
