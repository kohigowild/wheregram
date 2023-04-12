import styled from 'styled-components';

export const Card = styled.div`
  width: 360px;
  padding: 4vh 0;
  border-radius: 16px;
  margin: 10px;

  @media ${(props) => props.theme.tablet} {
    width: 480px;
    transition: 0.4s;
  }

  @media ${(props) => props.theme.desktop} {
    width: 600px;
    transition: 0.4s;
  }
`;

export const ImgContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  justfy-content: center;
  margin-bottom: 8px;

  @media ${(props) => props.theme.tablet} {
    width: 420px;
    transition: 0.4s;
  }

  @media ${(props) => props.theme.desktop} {
    width: 540px;
    transition: 0.4s;
  }
`;

export const Title = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Desc = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const UserName = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Bold = styled.div`
  font-weight: 600;
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const UserLocation = styled.div`
  font-size: 12px;
  color: #adb5bd;
`;
