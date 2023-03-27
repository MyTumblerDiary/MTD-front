import Link from 'next/link';

import * as Style from './BottomNavigator.style';

import NAVIGATOR from '@/constants/navigator';

export default function BottomNavigator() {
  return (
    <Style.NavigatorContainer>
      <Style.NavigatorBox>
        {Object.values(NAVIGATOR).map((navigator) => {
          const { icon, title, path } = navigator;
          return (
            <Style.ElementContainer key={`navigator ${title}`}>
              <Link href={path}>
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
