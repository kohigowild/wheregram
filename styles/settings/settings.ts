import styled from 'styled-components';

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;
