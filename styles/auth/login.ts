import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: 4vh;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const GoToSignUp = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};

  a {
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const GoogleLogin = styled.button`
  position: relative;
  margin-top: 20px;
  width: 300px;
  height: 40px;
  border-radius: 12px;
  border: 0;
  font-size: 14px;
  transition: all 0.3s ease;
  background-color: white;
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: #edf2f7 0px 10px 0px 0px;

  &:active {
    background-color: white;
    box-shadow: #e2e8f0 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
  }
`;
