import styled from 'styled-components';
import { notoSansKrMedium } from '@/styles/@common/font/notoSansKr';

export const Container = styled.div`
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

  @media ${(props) => props.theme.desktop} {
    font-size: 18px;
    font-weight: 600;
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
