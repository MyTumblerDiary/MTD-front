import Typography from '@/components/Common/Typography/Typography';
import * as Style from './SuggestAmountReasonField.style';

import Textarea from '@/components/Common/Textarea/Textarea';
import { TextareaProps } from '@/types';

export default function SuggestAmountReasonField() {
  const textareaProps: TextareaProps = {
    name: 'suggestReason',
    value: '',
    lengthLimit: 50,
    size: 'full',
    height: 'md',
    onChange: () => {}
  };

  return (
    <Style.SuggestAmountReasonFieldWrapper>
      <Typography size='button1'>제안 사유</Typography>
      <Textarea {...textareaProps} />
    </Style.SuggestAmountReasonFieldWrapper>
  );
}
