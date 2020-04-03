import React from 'react';
import farmer from 'assets/images/farmer.svg';

import * as Styled from './Logo.style';

const Logo = () => (
  <Styled.Logo>
    <Styled.Img src={farmer} alt="farmer" />
    <Styled.H1>Lazy-Farmer</Styled.H1>
  </Styled.Logo>
);

export default Logo;
