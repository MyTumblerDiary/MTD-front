import theme from '@/styles/theme';
import styled from 'styled-components';

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const LinkToSuggestionPage = styled.button`
  display: flex;
  width: 300px;
  height: 48px;
  gap: 14px;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: rgba(240, 154, 0, 0.1);
  border-radius: 30px;
`;

export const ButtonChildren = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${theme.color.warning};
`;
