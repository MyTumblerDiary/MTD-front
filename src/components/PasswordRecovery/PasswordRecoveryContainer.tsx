import Router from 'next/router';

import {
  type StepButtonNameProps,
  type StepArrayProps,
  type UserInputPramProps
} from '@/types';

import {
  useAuthEmail,
  useDebounce,
  useSendEmail,
  useSignupState,
  useUpdatePassword
} from '@/hooks';

import * as Style from './PasswordRecoveryContainer.style';

import AuthHeader from '../Common/AuthHeader/AuthHeader';
import Stepper from '../Common/Stepper/Stepper';
import SignupEmailStep from '../Signup/SignupEmailStep/SignupEmailStep';
import SignupPasswordStep from '../Signup/SignupPasswordStep/SignupPasswordStep';

interface PwRecoveryInputProps {
  email: UserInputPramProps;
  emailCheck: UserInputPramProps;
  password: UserInputPramProps;
  passwordCheck: UserInputPramProps;
  username: UserInputPramProps;
}

const initialUserInput: PwRecoveryInputProps = {
  email: {
    value: '',
    validation: 'default',
    message: ''
  },
  emailCheck: {
    value: '',
    validation: 'default',
    message: ''
  },
  password: {
    value: '',
    validation: 'default',
    message: ''
  },
  passwordCheck: {
    value: '',
    validation: 'default',
    message: ''
  },
  username: { value: '', validation: 'success', message: '' }
};

export default function PasswordRecoveryContainer() {
  const {
    userInput,
    isValidateSubmit,
    isEmailVerificationRequested,
    isEmailVerificationConfirmed,
    handleUserInput,
    setEmailVerificationConfirmCompleted,
    setEmailVerificationConfirmFailed,
    setEmailVerificationRequestCompleted,
    setEmailVerificationRequestFailed,
    handleEmailCheckReload
  } = useSignupState(initialUserInput);

  const debounceEmail = useDebounce(userInput.email.value, 20);

  const { refetch: emailRequestRefetch } = useSendEmail(
    debounceEmail,
    setEmailVerificationRequestCompleted,
    setEmailVerificationRequestFailed
  );

  const { refetch: emailConfirmRefetch } = useAuthEmail(
    debounceEmail,
    userInput.emailCheck.value,
    setEmailVerificationConfirmCompleted,
    setEmailVerificationConfirmFailed
  );

  const handleRecoveryCompleted = () => {
    alert('비밀번호 변경이 완료됐습니다.');
    Router.push('/login');
  };

  const [updatePasswordRefetch] = useUpdatePassword(
    userInput.email.value,
    userInput.password.value,
    handleRecoveryCompleted
  );

  const emailVerificationRequest = () => {
    emailRequestRefetch();
  };

  const emailVerificationConfirm = () => {
    emailConfirmRefetch();
  };

  const handleSubmit = () => {
    updatePasswordRefetch();
  };

  const steps: StepArrayProps = [
    {
      label: '이메일 인증',
      stepDescription: '사용중인 이메일을 입력하고 인증해주세요.',
      isNextButtonActive: userInput.emailCheck.validation === 'success',
      children: (
        <SignupEmailStep
          email={userInput.email}
          emailCheck={userInput.emailCheck}
          isEmailVerificationRequested={isEmailVerificationRequested}
          isEmailVerificationConfirmed={isEmailVerificationConfirmed}
          handleUserInput={handleUserInput}
          handleEmailVerificationRequest={emailVerificationRequest}
          handleEmailVerificationConfirm={emailVerificationConfirm}
          handleEmailCheckReload={handleEmailCheckReload}
        />
      )
    },
    {
      label: '비밀번호 설정',
      stepDescription: '새로운 비밀번호를 입력하세요.',
      isNextButtonActive: userInput.passwordCheck.validation === 'success',
      children: (
        <SignupPasswordStep
          password={userInput.password}
          passwordCheck={userInput.passwordCheck}
          handleUserInput={handleUserInput}
        />
      )
    }
  ];

  const stepButtonNames: StepButtonNameProps = {
    next: '인증 완료',
    end: '비밀번호 설정 완료'
  };

  return (
    <Style.PasswordRecoveryWrapper>
      <AuthHeader title={'비밀번호 찾기'} />
      <Stepper
        steps={steps}
        stepButtonNames={stepButtonNames}
        isValidateSubmit={isValidateSubmit}
        handleSubmit={handleSubmit}
      />
    </Style.PasswordRecoveryWrapper>
  );
}
