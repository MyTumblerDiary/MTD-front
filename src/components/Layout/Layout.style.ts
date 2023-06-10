import styled from 'styled-components';
import theme from '../../styles/theme';

interface MainProps {
  hasBottomNavigator: boolean;
}

export const LayoutContainer = styled.div`
  max-width: ${theme.maxWidth};
  min-height: 100vh;
  margin: 0 auto;
`;

export const Main = styled.main<MainProps>`
  min-height: ${({ hasBottomNavigator }) =>
    hasBottomNavigator
      ? `calc(100vh - ${theme.bottomNavigatorHeight})`
      : '100vh'};
  padding-bottom: ${({ hasBottomNavigator }) =>
    hasBottomNavigator ? `${theme.bottomNavigatorHeight}` : '0px'};
`;
