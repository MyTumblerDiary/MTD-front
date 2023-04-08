import * as Style from './SignupHeader.style';

import Link from 'next/link';

import { Title } from '@/components/Common/Heading/Heading.style';
import Typography from '@/components/Common/Typography/Typography';

export default function SignupHeader() {
  return (
    <Style.SignupHeaderWrapper>
      <Title>간단 회원가입</Title>
      <Style.LoginLink>
        <Link href='/login'>
          <Typography size='body2'>로그인</Typography>
        </Link>
      </Style.LoginLink>
    </Style.SignupHeaderWrapper>
  );
}
