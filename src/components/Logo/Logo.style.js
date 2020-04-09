import styled from 'styled-components/macro';
import device from 'styles/device';

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80%;
  margin-bottom: 2rem;

  @media ${device.mobileL} {
    width: 40.5rem;
  }
`;

export const H1 = styled.h1`
  position: absolute;
  bottom: 2.5rem;
  margin: 0;
  font-size: 3rem;
  color: white;
  text-shadow: 0.2rem 0.2rem 0.3rem black;

  @media ${device.mobileM} {
    font-size: 4rem;
  }

  @media ${device.mobileL} {
    font-size: 4rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
