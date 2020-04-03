import styled from 'styled-components/macro';
import device from 'styles/device';

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1em 1em 1em 1em 1em;
  grid-template-rows: 0.5em 0.5em 0.5em 0.5em;
`;

export const Fields = styled.div`
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
