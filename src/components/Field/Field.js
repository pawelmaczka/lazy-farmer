import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import getFieldImage from './getFieldImage';

const plant = firebase.functions().httpsCallable('plant');
// const TIME_TO_ROTTEN = 10800000;

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

const Field = ({ field: { id, productionStartTimestamp, type } }) => {
  const handleClick = React.useCallback(() => {
    plant({ fieldId: id, type });
  }, []);

  const Image = getFieldImage(type, 0);

  return (
    <StyledField grayed={!productionStartTimestamp}>
      <Image onClick={handleClick} />
    </StyledField>
  );
};

Field.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productionStartTimestamp: PropTypes.number,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Field;
