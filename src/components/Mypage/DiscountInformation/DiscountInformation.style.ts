import styled from 'styled-components';
import theme from '@/styles/theme';

export const MainInfoContainer = styled.div`
  padding: 0 20px;
  background-color: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 50px;
  background-color: ${theme.color.g300};
`;
