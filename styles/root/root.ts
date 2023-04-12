import styled from 'styled-components';
import { notoSansKrMedium } from '@/styles/@common/font/notoSansKr';
import { notoSansKrBold } from '@/styles/@common/font/notoSansKr';

export const Container = styled.div`
  dlsplay: box;

  @media ${(props) => props.theme.tablet} {
    display: flex;
  }
`;

export const Title = styled.div`
  padding: 6vh 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${notoSansKrMedium.style.fontFamily};
  font-size: 14px;

  @media ${(props) => props.theme.tablet} {
    text-align: left;
    margin-right: 60px;
    display: flex;
    align-items: center;
  }
`;

export const Desc = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${notoSansKrMedium.style.fontFamily};
  font-size: 14px;

  @media ${(props) => props.theme.tablet} {
    font-size: 18px;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${notoSansKrBold.style.fontFamily};
  font-size: 18px;
  cursor: pointer;
  transition: 0.4s;

  @media ${(props) => props.theme.tablet} {
    font-size: 24px;
  }

  &:hover {
    scale: 1.2;
    transition: 0.4s;
  }
`;

export const SlideTrack = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
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
