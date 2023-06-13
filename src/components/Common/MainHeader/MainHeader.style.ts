import theme from '@/styles/theme';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  background-color: #ffffff;
`;

export const LoginLink = styled.div`
  position: absolute;
  right: 30px;
  width: 24px;
  height: 24px;
`;
