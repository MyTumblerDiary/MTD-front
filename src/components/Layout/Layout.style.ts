import styled from 'styled-components';
import theme from '../../styles/theme';

interface MainProps {
  hasBottomNavigator: boolean;
}

export const LayoutContainer = styled.div`
  max-width: ${theme.maxWidth};
  height: 100vh;
`;

export const Main = styled.main<MainProps>`
  height: ${({ hasBottomNavigator }) =>
    hasBottomNavigator
      ? `calc(100vh - ${theme.bottomNavigatorHeight})`
      : '100vh'};
`;
