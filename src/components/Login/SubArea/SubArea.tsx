import Link from 'next/link';

import Typography from '@/components/Common/Typography/Typography';

import * as Style from './SubArea.style';

const SubArea = () => {
  return (
    <Style.SubContainer>
      <Link href='/'>
        <Typography size='button1'>비밀번호 찾기</Typography>
      </Link>
      <Link href='/signup'>
        <Typography size='button1'>회원가입</Typography>
      </Link>
    </Style.SubContainer>
  );
};

export default SubArea;
