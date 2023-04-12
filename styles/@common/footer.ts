import styled from 'styled-components';

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  padding: 8px 0;
  width: 100%;
  background-color: white;
`;

export const List = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  transition: 0.4s;

  @media ${(props) => props.theme.tablet} {
    margin: 40px;
    transition: 0.4s;
  }

  @media ${(props) => props.theme.desktop} {
    margin: 60px;
    transition: 0.4s;
  }
`;
