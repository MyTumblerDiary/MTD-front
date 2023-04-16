import styled from 'styled-components';
import theme from '@/styles/theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px 0 0 15px;
`;

export const Main = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h3 {
    padding-left: 5px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.div`
  width: 100%;
  max-width: 380px;
  border-radius: 8px;
  border: 2px solid ${theme.color.g300};
  height: 100px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;

  &:active {
    border: 2px solid ${theme.color.main};
  }
`;
