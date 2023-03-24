import styled from 'styled-components';

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
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Bold = styled.div`
  font-weight: 600;
  margin-right: 4px;
`;

export const UserLocation = styled.div`
  font-size: 12px;
  color: #adb5bd;
`;
