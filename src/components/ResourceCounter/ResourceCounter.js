import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as pumpkin } from './img/pumpkin_counter.svg';
import { ReactComponent as cabbage } from './img/cabbage_counter.svg';
import { ReactComponent as carrot } from './img/carrot_counter.svg';
import { ReactComponent as potato } from './img/potato_counter.svg';
import { ReactComponent as tomato } from './img/tomato_counter.svg';

import * as Styled from './ResourceCounter.style';

const ResourceImages = {
  cabbage,
  carrot,
  potato,
  pumpkin,
  tomato,
};

const ResourceCounter = ({ resource, amount }) => {
  const Image = ResourceImages[resource];

  return (
    <Styled.Counter>
      <Styled.ImageWrapper>
        <Image />
      </Styled.ImageWrapper>
      {amount}
    </Styled.Counter>
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
