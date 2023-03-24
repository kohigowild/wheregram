import styled from 'styled-components';

export const FormContainer = styled.form`
  position: relative;
`;

export const Badge = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 100px;
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
