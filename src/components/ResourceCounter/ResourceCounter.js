import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import device from 'styles/device';

import { ReactComponent as pumpkin } from './img/pumpkin_counter.svg';
import { ReactComponent as cabbage } from './img/cabbage_counter.svg';
import { ReactComponent as carrot } from './img/carrot_counter.svg';
import { ReactComponent as potato } from './img/potato_counter.svg';
import { ReactComponent as tomato } from './img/tomato_counter.svg';

const ResourceImages = {
  cabbage,
  carrot,
  potato,
  pumpkin,
  tomato,
};

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-right: 2rem;
  font-size: 1.4rem;

  @media ${device.laptop} {
    margin-right: 5rem;
    font-size: 2rem;
  }
`;

const ImageWrapper = styled.div`
  display: block;
  width: 4rem;
  margin-right: 1rem;
`;

const ResourceCounter = ({ resource, amount }) => {
  const Image = ResourceImages[resource];

  return (
    <StyledCounter>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      {amount}
    </StyledCounter>
  );
};

ResourceCounter.propTypes = {
  resource: PropTypes.oneOf([
    'cabbage',
    'carrot',
    'potato',
    'pumpkin',
    'tomato',
  ]).isRequired,
  amount: PropTypes.number.isRequired,
};

export default ResourceCounter;
