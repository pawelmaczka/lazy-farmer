import styled from 'styled-components/macro';

import device from 'styles/device';

export const Wrapper = styled.div`
  width: 4rem;
  margin: 0.5rem;

  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.7));
  }

  @media ${device.mobileL} {
    width: 5rem;
    margin: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
`;
