import styled, { keyframes } from 'styled-components';
import { notoSansKrMedium } from '@/styles/@common/font/notoSansKr';

const bounce = keyframes`
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  70% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  margin-top: 52px;
  dlsplay: box;

  @media ${(props) => props.theme.tablet} {
    display: flex;
  }
`;

export const Title = styled.div`
  padding: 12px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${notoSansKrMedium.style.fontFamily};
  font-size: 14px;
  animation: ${bounce} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;

  @media ${(props) => props.theme.tablet} {
    text-align: left;
    margin-right: 60px;
    display: flex;
    align-items: center;
  }
`;

export const Desc = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${notoSansKrMedium.style.fontFamily};
  font-size: 14px;
  font-weight: 600;
  background: linear-gradient(to right, #48bb78, #2d3748, #48bb78);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradient} 3s ease-in-out infinite;

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.desktop} {
    font-size: 18px;
  }
`;

export const SlideTrack = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  padding-bottom: 32px;
  width: 380px;
  transition: 0.4s;

  @media ${(props) => props.theme.tablet} {
    width: 500px;
    transition: 0.4s;
  }

  @media ${(props) => props.theme.desktop} {
    width: 620px;
    transition: 0.4s;
  }
`;
