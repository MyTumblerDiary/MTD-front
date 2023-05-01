import Link from 'next/link';
import { useRouter } from 'next/router';

import Title from '@/components/Common/Heading/Title';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

import * as Style from './ChooseButtons.style';

import { CHOOSE_BUTTON_PROPS } from '@/utils/constants/recordChooseButton';

const ChooseContainer = () => {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <Style.PageContainer>
      <Style.Header>
        <Svg.ArrowLeft width='36px' height='36px' onClick={onClickBack} />
      </Style.Header>
      <Style.Main>
        <Title>텀블러를 어디에서 사용하셨나요?</Title>
        <Style.ButtonsContainer>
          {CHOOSE_BUTTON_PROPS.map((item) => {
            const { path, title, description } = item;
            return (
              <Link href={path} key={`router-${path}`}>
                <Style.Button>
                  <Typography size='button1'>{title}</Typography>
                  <Typography size='body2'>{description}</Typography>
                </Style.Button>
              </Link>
            );
          })}
        </Style.ButtonsContainer>
      </Style.Main>
    </Style.PageContainer>
  );
};

export default ChooseContainer;
