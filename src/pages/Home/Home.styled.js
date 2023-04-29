import styled from 'styled-components';
import img from '../../images/background.jpg';

export const Hero = styled.section`
  padding: 200px 70px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${img});
  max-width: 1600px;
  background-size: cover;
  height: 1060px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const HeroText = styled.h2`
  font-weight: 900;
  font-size: 44px;
  line-height: 1.36;
`;
