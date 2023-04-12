import * as Style from './SignupContainer.style';

import useSignup from '@/hooks/useSignup';

import {
  type StepButtonNameProps,
  type StepArrayProps,
  type UserInputPramProps
} from '@/types';

import Stepper from '@/components/Common/Stepper/Stepper';
import AuthHeader from '../Common/AuthHeader/AuthHeader';
import SignupUsernameStep from './SignupUsernameStep/SignupUsernameStep';
import SignupEmailStep from './SignupEmailStep/SignupEmailStep';
import SignupPasswordStep from './SignupPasswordStep/SignupPasswordStep';

interface SignupInputProps {
  email: UserInputPramProps;
  emailCheck: UserInputPramProps;
  password: UserInputPramProps;
  passwordCheck: UserInputPramProps;
  username: UserInputPramProps;
}

const initialUserInput: SignupInputProps = {
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
  username: {
    value: '',
    validation: 'default',
    message: ''
  }
};

export default function SignupContainer() {
  const {
    userInput,
    isEmailAuth,
    isEmailCheckVisible,
    isValidateSubmit,
    handleUserInput,
    handleEmailAuth,
    handleEmailCheck,
    handleSubmit
  } = useSignup(initialUserInput);

  const steps: StepArrayProps = [
    {
      label: '닉네임 등록',
      stepDescription: '다이어리에 표시될 닉네임을 입력해주세요.',
      isNextButtonActive: userInput.username.validation === 'success',
      children: (
        <SignupUsernameStep
          username={userInput.username}
          handleUserInput={handleUserInput}
        />
      )
    },
    {
      label: '이메일 인증',
      stepDescription: '유효한 이메일을 입력하고 인증해주세요.',
      isNextButtonActive: userInput.emailCheck.validation === 'success',
      children: (
        <SignupEmailStep
          email={userInput.email}
          emailCheck={userInput.emailCheck}
          isEmailAuth={isEmailAuth}
          isEmailCheckVisible={isEmailCheckVisible}
          handleUserInput={handleUserInput}
          handleEmailAuth={handleEmailAuth}
          handleEmailCheck={handleEmailCheck}
        />
      )
    },
    {
      label: '비밀번호 설정',
      stepDescription: '비밀번호와 비밀번호 확인을 입력해주세요.',
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
    next: '다음 단계로',
    end: '회원 가입하기'
  };

  return (
    <Style.SignupWrapper>
      <AuthHeader title={'간편 회원가입'} />
      <Stepper
        steps={steps}
        stepButtonNames={stepButtonNames}
        isValidateSubmit={isValidateSubmit}
        handleSubmit={handleSubmit}
      />
    </Style.SignupWrapper>
  );
}
