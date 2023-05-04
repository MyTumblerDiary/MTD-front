import styled from 'styled-components';
import theme from '@/styles/theme';

export const SearchResultContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 54px;
`;

export const SearchResultContent = styled.ul`
  list-style: none;
  padding: 10px 0;
  border: 1px solid ${theme.color.g200};
  z-index: 200;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

export const SearchResultButton = styled.button`
  padding: 7px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:active {
    background-color: ${theme.color.g200};
  }
`;
