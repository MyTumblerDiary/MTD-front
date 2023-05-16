import * as Style from './SignupEmailStep.style';

import {
  type UserInputPramProps,
  type InputProps,
  type ButtonProps
} from '@/types';

import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Typography from '@/components/Common/Typography/Typography';
import AuthTimer from '@/components/Common/AuthTimer/AuthTimer';

interface SignupEmailStepProps {
  email: UserInputPramProps;
  emailCheck: UserInputPramProps;
  isEmailVerificationRequested: boolean;
  isEmailVerificationConfirmed: boolean;
  handleUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailVerificationRequest: () => void;
  handleEmailVerificationConfirm: () => void;
  handleEmailCheckReload: () => void;
}

export default function SignupEmailStep({
  email,
  emailCheck,
  isEmailVerificationRequested,
  isEmailVerificationConfirmed,
  handleUserInput,
  handleEmailVerificationRequest,
  handleEmailVerificationConfirm,
  handleEmailCheckReload
}: SignupEmailStepProps) {
  const emailProps: InputProps = {
    type: 'email',
    name: 'email',
    label: '이메일',
    isLabelVisible: true,
    size: 'lg',
    value: email.value,
    validation: email.validation,
    message: email.message,
    disabled: isEmailVerificationRequested,
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
    disabled: isEmailVerificationConfirmed,
    placeholder: '발송된 인증번호를 입력해주세요.',
    onChange: handleUserInput
  };

  const emailCheckButtonProps: ButtonProps = {
    type: 'button',
    size: 'xsm',
    name: 'emailCheck',
    onClick: handleEmailVerificationRequest,
    disabled: isEmailVerificationRequested,
    children: (
      <Typography size='button2' variant='accent'>
        인증하기
      </Typography>
    )
  };

  const emailAuthButtonProps: ButtonProps = {
    type: 'button',
    size: 'xsm',
    name: 'emailCheckConfirm',
    disabled: isEmailVerificationConfirmed,
    onClick: handleEmailVerificationConfirm,
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
      {isEmailVerificationRequested && (
        <>
          <Style.EmailCheckWrapper>
            <Input {...emailCheckProps} />
            {emailCheck.value && (
              <Style.EamilButtonWrapper>
                <Button {...emailAuthButtonProps} />
              </Style.EamilButtonWrapper>
            )}
          </Style.EmailCheckWrapper>
          <Style.AuthTimerWarpper>
            <AuthTimer
              initialTime={119}
              handleReload={handleEmailCheckReload}
            />
          </Style.AuthTimerWarpper>
        </>
      )}
    </Style.EmailWrapper>
  );
}
