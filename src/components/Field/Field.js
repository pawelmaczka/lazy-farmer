import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const fieldWidth = 40;

const StyledField = styled.div`
  width: ${fieldWidth}rem;
  height: ${fieldWidth * 0.7}rem;
  position: relative;
  display: inline-block;

  svg {
    pointer-events: none;

    * {
      pointer-events: visibleFill;
    }
  }
`;

const Field = ({ svgComponents }) => {
  const [level, setLevel] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setLevel((lvl) => (lvl === 4 ? 0 : lvl + 1));
  }, [level]);

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
