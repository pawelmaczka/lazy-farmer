import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as pumpkin } from 'assets/images/pumpkin.svg';
import { ReactComponent as cabbage } from 'assets/images/cabbage.svg';
import { ReactComponent as carrot } from 'assets/images/carrot.svg';
import { ReactComponent as potato } from 'assets/images/potato.svg';
import { ReactComponent as tomato } from 'assets/images/tomato.svg';

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
