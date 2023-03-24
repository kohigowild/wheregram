import styled from 'styled-components';

export const FormContainer = styled.form`
  position: relative;
`;

export const Badge = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: -12px;
  right: -12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
`;

export const AddInput = styled.input`
  visibility: hidden;
`;

export const RatingContainer = styled.div`
  display: flex;
  .inactive {
    color: ${({ theme }) => theme.colors.textColor};
  }
  .active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Desc = styled.div`
  font-size: 14px;
  display: flex;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Highlight = styled.div`
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.primary};
`;
