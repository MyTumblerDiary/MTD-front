import * as Style from './SignupUsername.style';

import { type UserInputPramProps, type InputProps } from '@/types';

interface SignupUsernameStepProps {
  username: UserInputPramProps;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupUsernameStep({
  username,
  handleUserInput
}: SignupUsernameStepProps) {
  const usernameProps: InputProps = {
    type: 'text',
    name: 'username',
    label: '닉네임',
    isLabelVisible: true,
    size: 'lg',
    value: username.value,
    validation: username.validation,
    message: username.message,
    placeholder: '2글자 이상 15글자 이하로 작성해주세요!',
    onChange: handleUserInput
  };

  return <Style.UserNameInput {...usernameProps} />;
}
