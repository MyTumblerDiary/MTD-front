import { useRouter } from 'next/router';

import Title from '@/components/Common/Heading/Title';
import Svg from '@/components/svg';

import * as Style from './RecordHeader.style';

const RecordHeader = () => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <Style.Container>
      <Title>텀블러 기록하기</Title>
      <Style.LoginLink onClick={onClickBack}>
        <Svg.ArrowLeft />
      </Style.LoginLink>
    </Style.Container>
  );
};

export default RecordHeader;
