import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import device from 'styles/device';

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1em 1em 1em 1em;
  grid-template-rows: 0.5em 0.5em 0.5em 0.5em;
`;

const StyledFields = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8rem;
  padding-top: 0.8em;

  @media ${device.mobileM} {
    font-size: 10rem;
  }

  @media ${device.mobileL} {
    font-size: 12rem;
  }

  @media ${device.tablet} {
    font-size: 15rem;
  }

  @media ${device.laptop} {
    font-size: 20rem;
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
