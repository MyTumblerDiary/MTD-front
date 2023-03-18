import styled from 'styled-components';
import theme from '../../styles/theme';

export const LayoutContainer = styled.div`
  max-width: ${theme.maxWidth};
  height: 100vh;
`;

export const Main = styled.main<{ bottomNavigator: boolean }>`
  height: ${({ bottomNavigator }) =>
    bottomNavigator ? `calc(100vh - ${theme.bottomNavigatorHeight})` : '100vh'};
`;
