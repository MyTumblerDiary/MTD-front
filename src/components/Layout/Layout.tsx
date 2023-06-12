import * as Style from './Layout.style';

import BottomNavigator from './BottomNavigator/BottomNavigator';
import MainHeader from '../Common/MainHeader/MainHeader';
import { useRouter } from 'next/router';

interface LayoutProps {
  header?: boolean;
  bottomNavigator?: boolean;
  children: React.ReactNode;
}

type PathProps = '/' | '/cafes' | '/cafes/search' | '/mypage' | '';

export default function Layout({
  header = true,
  bottomNavigator = true,
  children
}: LayoutProps) {
  const router = useRouter();
  const path = router.pathname as string;

  const pathObj = {
    '': '',
    '/': '텀블러 기록',
    '/cafes': '카페',
    '/cafes/search': '카페 검색',
    '/mypage': '마이 페이지'
  };

  return (
    <Style.LayoutContainer>
      {header && <MainHeader title={pathObj[path as PathProps]} />}
      <Style.Main hasHeader={header} hasBottomNavigator={bottomNavigator}>
        {children}
      </Style.Main>
      {bottomNavigator && <BottomNavigator />}
    </Style.LayoutContainer>
  );
}
