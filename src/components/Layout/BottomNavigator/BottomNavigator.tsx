import Link from 'next/link';
import * as Style from './BottomNavigator.style';
import Svg from '../../svg';

export default function BottomNavigator() {
  const NAVIGATORS = [
    {
      icon: <Svg.Cafe />,
      title: '카페',
      url: '/cafes'
    },
    {
      icon: <Svg.Home />,
      title: '홈',
      url: '/'
    },
    {
      icon: <Svg.Mypage />,
      title: '마이페이지',
      url: '/mypage'
    }
  ];

  return (
    <Style.NavigatorContainer>
      <Style.NavigatorBox>
        {NAVIGATORS.map((navigator) => {
          const { icon, title, url } = navigator;
          return (
            <Style.ElementContainer key={`navigator ${title}`}>
              <Link href={url}>
                <div>{icon}</div>
                <Style.IconTitle>{title}</Style.IconTitle>
              </Link>
            </Style.ElementContainer>
          );
        })}
      </Style.NavigatorBox>
    </Style.NavigatorContainer>
  );
}
