import * as Style from './SuggestAmountReasonField.style';

import { type TextareaProps } from '@/types';

import Typography from '@/components/Common/Typography/Typography';
import Textarea from '@/components/Common/Textarea/Textarea';

interface SuggestAmountReasonFieldProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SuggestAmountReasonField({
  text,
  setText
}: SuggestAmountReasonFieldProps) {
  const textareaProps: TextareaProps = {
    name: 'suggestReason',
    value: text,
    lengthLimit: 50,
    size: 'full',
    height: 'md',
    placeholder: '제안 사유를 입력해주세요.',
    setValue: setText
  };

  return (
    <Style.SuggestAmountReasonFieldWrapper>
      <Typography size='button1'>제안 사유</Typography>
      <Textarea {...textareaProps} />
    </Style.SuggestAmountReasonFieldWrapper>
  );
}
