import styled, { keyframes } from 'styled-components';
import { notoSansKrMedium } from '@/styles/@common/font/notoSansKr';

const Slide = keyframes`
5% {
  transform: translateX(0)
}
40% {
  transform: translateX(-100%)
}
70% {
  transform: translateX(-200%)
}
100% {
  transform: translateX(-300%)
}
`;

export const Title = styled.div`
  padding: 6vh 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${notoSansKrMedium.style.fontFamily};
  font-size: 14px;
`;

export const SlideTrack = styled.div`
  position: relative;
  overflow: hidden;
  width: 380px;
`;

export const SlideList = styled.div`
  display: flex;
  animation: ${Slide} 12s 2s alternate infinite;
`;
