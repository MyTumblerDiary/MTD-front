import styled from 'styled-components';
import theme from '../../../styles/theme';

interface IconContainerProps {
  isActive: boolean;
}

export const NavigatorContainer = styled.nav`
  position: fixed;
  bottom: 0;

  height: ${theme.bottomNavigatorHeight};
  width: 100%;
  max-width: ${theme.maxWidth};
  border-top: 1px solid ${theme.color.g300};

  display: flex;
  align-items: center;

  padding: 10px 0;
`;

export const NavigatorBox = styled.ul`
  width: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const ElementContainer = styled.li`
  text-align: center;
  flex: 1;

  a {
    display: inline-block;
    width: 55px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
`;

export const IconContainer = styled.div<IconContainerProps>`
  svg {
    fill: ${({ isActive }) => (isActive ? '#000' : `${theme.color.g300}`)};
  }
`;

export const IconTitle = styled.span`
  color: gray;
  font-size: 12px;
`;
