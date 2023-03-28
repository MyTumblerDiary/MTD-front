import Link from 'next/link';
import { useRouter } from 'next/router';

import * as Style from './BottomNavigator.style';

import NAVIGATOR from '@/constants/navigator';

import Typography from '@/components/Common/Typography/Typography';

export default function BottomNavigator() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Style.NavigatorContainer>
      <Style.NavigatorBox>
        {Object.values(NAVIGATOR).map((navigator) => {
          const { icon, title, path } = navigator;
          const textVariant = currentPath === path ? 'default' : 'gray';
          const iconVariant = currentPath === path ? true : false;

          return (
            <Style.ElementContainer key={`navigator ${title}`}>
              <Link href={path}>
                <Style.IconContainer isActive={iconVariant}>
                  {icon}
                </Style.IconContainer>
                <Typography size='body3' variant={textVariant}>
                  {title}
                </Typography>
              </Link>
            </Style.ElementContainer>
          );
        })}
      </Style.NavigatorBox>
    </Style.NavigatorContainer>
  );
}
