import * as Style from './SuggestAmountReasonField.style';

import { type TextareaProps } from '@/types';

import Typography from '@/components/Common/Typography/Typography';
import Textarea from '@/components/Common/Textarea/Textarea';

export default function SuggestAmountReasonField() {
  const textareaProps: TextareaProps = {
    name: 'suggestReason',
    value: '',
    lengthLimit: 50,
    size: 'full',
    height: 'md',
    placeholder: '제안 사유를 입력해주세요.',
    setValue: () => {}
  };

  return (
    <Style.SuggestAmountReasonFieldWrapper>
      <Typography size='button1'>제안 사유</Typography>
      <Textarea {...textareaProps} />
    </Style.SuggestAmountReasonFieldWrapper>
  );
}
