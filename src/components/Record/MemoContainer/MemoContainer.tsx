import Title from '@/components/Common/Heading/Title';
import Textarea from '@/components/Common/Textarea/Textarea';
import Typography from '@/components/Common/Typography/Typography';

import { type TextareaProps } from '@/types';

import * as Style from './MemoContainer.style';

const MemoContainer = ({ ...MemoProps }: TextareaProps) => {
  return (
    <Style.Container>
      <Style.MemoTitleContainer>
        <Title variant='main'>메모</Title>
        <Typography size='body3' variant='gray2'>
          (선택사항)
        </Typography>
      </Style.MemoTitleContainer>
      <Textarea {...MemoProps} />
    </Style.Container>
  );
};

export default MemoContainer;
