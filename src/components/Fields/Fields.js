import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import device from 'styles/device';

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1em 1em 1em 1em 1em;
  grid-template-rows: 0.5em 0.5em 0.5em 0.5em;
`;

const StyledFields = styled.div`
  font-size: 7rem;
  padding-top: 0.8em;
  overflow: hidden;
  width: 4.5em;

  @media ${device.mobileS} {
    font-size: 7rem;
  }

  @media ${device.mobileM} {
    font-size: 8rem;
  }

  @media ${device.mobileL} {
    font-size: 9rem;
  }

  @media ${device.tablet} {
    font-size: 15rem;
  }

  @media ${device.laptop} {
    font-size: 20rem;
  }

  @media ${device.laptopL} {
    font-size: 25rem;
  }
`;

const Fields = ({ children }) => (
  <StyledFields>
    <FieldsGrid>{children}</FieldsGrid>
  </StyledFields>
);

Fields.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Fields;
