import * as Style from './AuthHeader.style';

import Link from 'next/link';

import Svg from '@/components/svg';
import Title from '../Heading/Title';

interface AuthHeaderProps {
  title: string;
}

export default function AuthHeader({ title }: AuthHeaderProps) {
  return (
    <Style.AuthHeaderWrapper>
      <Title>{title}</Title>
      <Style.LoginLink>
        <Link href='/login'>
          <Svg.LoginButton />
        </Link>
      </Style.LoginLink>
    </Style.AuthHeaderWrapper>
  );
}
