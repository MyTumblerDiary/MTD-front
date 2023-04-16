import * as Style from './AuthHeader.style';

import Link from 'next/link';

import { Title } from '@/components/Common/Heading/Heading.style';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

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
