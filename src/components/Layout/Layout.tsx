import * as Style from './Layout.style';

import BottomNavigator from './BottomNavigator/BottomNavigator';

interface LayoutProps {
  bottomNavigator?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  bottomNavigator = true,
  children
}: LayoutProps) {
  return (
    <Style.LayoutContainer>
      <Style.Main hasBottomNavigator={bottomNavigator}>{children}</Style.Main>
      {bottomNavigator && <BottomNavigator />}
    </Style.LayoutContainer>
  );
}
