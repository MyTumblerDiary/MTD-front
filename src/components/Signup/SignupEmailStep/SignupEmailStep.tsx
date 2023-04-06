import * as Style from './SignupEmailStep.style';

import {
  type UserInputPramProps,
  type InputProps,
  type ButtonProps
} from '@/types';

import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Typography from '@/components/Common/Typography/Typography';

interface SignupEmailStepProps {
  email: UserInputPramProps;
  emailCheck: UserInputPramProps;
  isEmailAuth: boolean;
  isEmailCheckVisible: boolean;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailCheck: () => void;
  handleEmailAuth: () => void;
}

export default function SignupEmailStep({
  email,
  emailCheck,
  isEmailAuth,
  isEmailCheckVisible,
  handleUserInput,
  handleEmailCheck,
  handleEmailAuth
}: SignupEmailStepProps) {
  const emailProps: InputProps = {
    type: 'email',
    name: 'email',
    label: '이메일',
    isLabelVisible: true,
    isRequired: true,
    size: 'lg',
    value: email.value,
    validation: email.validation,
    message: email.message,
    disabled: isEmailAuth,
    placeholder: '이메일을 올바르게 입력해주세요.',
    onChange: handleUserInput
  };

  const emailCheckProps: InputProps = {
    type: 'text',
    name: 'emailCheck',
    label: '이메일 확인',
    isLabelVisible: false,
    size: 'lg',
    value: emailCheck.value,
    validation: emailCheck.validation,
    message: emailCheck.message,
    placeholder: '메일로 발송된 인증번호를 입력해주세요.',
    onChange: handleUserInput
  };

  const emailCheckButtonProps: ButtonProps = {
    type: 'button',
    size: 'xsm',
    name: 'emailCheck',
    onClick: handleEmailCheck,
    children: (
      <Typography size='button2' variant='accent'>
        인증하기
      </Typography>
    )
  };

  const emailAuthButtonProps: ButtonProps = {
    type: 'button',
    size: 'xsm',
    name: 'emailCheck',
    onClick: handleEmailAuth,
    children: (
      <Typography size='button2' variant='accent'>
        확인
      </Typography>
    )
  };

  return (
    <Style.EmailWrapper>
      <Style.Email>
        <Style.EmailInput {...emailProps} />
        {email.validation === 'success' && (
          <Style.EamilButtonWrapper>
            <Button {...emailCheckButtonProps} />
          </Style.EamilButtonWrapper>
        )}
      </Style.Email>
      {isEmailCheckVisible && (
        <Style.EmailCheckWrapper>
          <Input {...emailCheckProps} />
          {emailCheck.value && (
            <Style.EamilButtonWrapper>
              <Button {...emailAuthButtonProps} />
            </Style.EamilButtonWrapper>
          )}
        </Style.EmailCheckWrapper>
      )}
    </Style.EmailWrapper>
  );
}
