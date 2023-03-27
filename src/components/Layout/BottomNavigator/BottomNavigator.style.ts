import styled from 'styled-components';
import theme from '../../../styles/theme';

export const NavigatorContainer = styled.nav`
  position: fixed;
  bottom: 0;

  height: ${theme.bottomNavigatorHeight};
  width: 100%;
  max-width: ${theme.maxWidth};
  background-color: ${theme.color.main};

  display: flex;
  align-items: center;
`;

export const NavigatorBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ElementContainer = styled.li`
  text-align: center;
`;

export const IconTitle = styled.span`
  color: #fff;
  font-size: 14px;
`;
