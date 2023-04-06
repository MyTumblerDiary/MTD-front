import * as Style from './SignupPasswordStep.style';

import { type InputProps, type UserInputPramProps } from '@/types';

import Input from '@/components/Common/Input/Input';

interface SignupPasswordStepProps {
  password: UserInputPramProps;
  passwordCheck: UserInputPramProps;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupPasswordStep({
  password,
  passwordCheck,
  handleUserInput
}: SignupPasswordStepProps) {
  const passwordProps: InputProps = {
    type: 'password',
    name: 'password',
    label: '비밀번호',
    isLabelVisible: true,
    isRequired: true,
    size: 'lg',
    value: password.value,
    validation: password.validation,
    message: password.message,
    placeholder: '비밀번호를 입력해주세요.',
    onChange: handleUserInput
  };

  const passwordCheckProps: InputProps = {
    type: 'password',
    name: 'passwordCheck',
    label: '비밀번호 확인',
    isLabelVisible: false,
    isRequired: true,
    size: 'lg',
    value: passwordCheck.value,
    validation: passwordCheck.validation,
    message: passwordCheck.message,
    placeholder: '비밀번호를 다시 입력해주세요.',
    onChange: handleUserInput
  };

  return (
    <Style.PasswordWrapper>
      <Style.PasswordInput {...passwordProps} />
      <Style.PasswordInput {...passwordCheckProps} />
    </Style.PasswordWrapper>
  );
}
