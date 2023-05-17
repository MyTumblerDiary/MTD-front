import theme from '@/styles/theme';
import styled from 'styled-components';

export const SuggestAmountForm = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AmountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 8px 12px 15px 12px;
`;

export const ExistingAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AmountSelectWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
`;

export const AmountSelect = styled.select`
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid ${theme.color.g300};
  font-size: 14px;

  &:focus,
  &:active {
    outline: none;
  }
`;
