import styled from 'styled-components/macro';
import device from 'styles/device';

export const Counter = styled.div`
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

export const ImageWrapper = styled.div`
  display: block;
  width: 4rem;
  margin-right: 1rem;
`;
