import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { type InputNameProps, type UserInputPramProps } from '@/types';

import {
  emailValidation,
  passworCheckValidation,
  passwordValidation,
  submitValidation,
  usernameValidation
} from '@/utils/helpers/signup.helper';
import validationMessage from '@/utils/constants/validationMessage';

interface SignupInputProps {
  email: UserInputPramProps;
  emailCheck: UserInputPramProps;
  password: UserInputPramProps;
  passwordCheck: UserInputPramProps;
  username: UserInputPramProps;
}

export default function useSignupState(initialState: SignupInputProps) {
  const [userInput, setUserInput] = useState<SignupInputProps>(initialState);
  const [isEmailVerificationRequested, setIsEmailVerificationRequested] =
    useState(false);
  const [isEmailVerificationConfirmed, setIsEmailVerificationConfirmed] =
    useState(false);
  const router = useRouter();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;

    setUserInput((currentState) => ({
      ...currentState,
      [name]: {
        ...handleValidation(name as InputNameProps, value)
      }
    }));
  };

  const setUserNameNotDuplicated = () => {
    setUserInput((currentState) => ({
      ...currentState,
      username: {
        ...currentState.username,
        validation: 'success',
        message: validationMessage.username.valid
      }
    }));
  };

  const setUserNameDuplicated = () => {
    setUserInput((currentState) => ({
      ...currentState,
      username: {
        ...currentState.username,
        validation: 'error',
        message: validationMessage.username.duplicated
      }
    }));
  };

  const setEmailNotDuplicated = () => {
    setUserInput((currentState) => ({
      ...currentState,
      email: {
        ...currentState.email,
        validation: 'success',
        message: validationMessage.email.valid
      }
    }));
  };

  const setEmailDuplicated = () => {
    setUserInput((currentState) => ({
      ...currentState,
      email: {
        ...currentState.email,
        validation: 'error',
        message: validationMessage.email.duplicated
      }
    }));
  };

  const handleSignupCompleted = () => {
    alert('회원가입이 완료됐습니다.');
    router.push('/login');
  };

  const handleSignupFailed = () => {
    console.log('회원가입 실패');
  };

  const setEmailVerificationRequestCompleted = () => {
    setUserInput((currentState) => ({
      ...currentState,
      email: {
        ...currentState.email,
        validation: 'success',
        message: validationMessage.authRequest.success
      }
    }));
    setIsEmailVerificationRequested(true);
  };

  const setEmailVerificationRequestFailed = () => {
    setUserInput((currentState) => ({
      ...currentState,
      email: {
        ...currentState.email,
        validation: 'error',
        message: validationMessage.authRequest.fail
      }
    }));
  };

  const setEmailVerificationConfirmCompleted = () => {
    setUserInput((currentState) => ({
      ...currentState,
      emailCheck: {
        ...currentState.emailCheck,
        validation: 'success',
        message: '인증되었습니다.'
      }
    }));
    setIsEmailVerificationConfirmed(true);
  };

  const setEmailVerificationConfirmFailed = () => {
    setUserInput((currentState) => ({
      ...currentState,
      emailCheck: {
        ...currentState.emailCheck,
        validation: 'error',
        message: '인증번호가 틀립니다.'
      }
    }));
    setIsEmailVerificationConfirmed(false);
  };

  const isValidateSubmit = submitValidation(
    userInput.email.validation,
    userInput.password.validation,
    userInput.passwordCheck.validation,
    userInput.username.validation,
    isEmailVerificationConfirmed
  );

  const clearEmailCheckValue = () => {
    setIsEmailVerificationConfirmed(false);
    setUserInput((currentState) => ({
      ...currentState,
      email: {
        ...currentState.email,
        message: '다시 인증해주세요.'
      },
      emailCheck: {
        value: '',
        validation: 'default',
        message: ''
      }
    }));
  };

  const handleValidation = (name: InputNameProps, value: string) => {
    switch (name) {
      case 'email':
        return emailValidation(value);
      case 'password':
        return passwordValidation(value);
      case 'passwordCheck':
        return passworCheckValidation(userInput.password.value, value);
      case 'username':
        return usernameValidation(value);
      default:
        return { value, validation: 'default', message: '' };
    }
  };

  const handleEmailCheckReload = () => {
    setIsEmailVerificationRequested(false);
    clearEmailCheckValue();
  };

  return {
    userInput,
    isValidateSubmit,
    isEmailVerificationRequested,
    isEmailVerificationConfirmed,
    setUserNameNotDuplicated,
    setUserNameDuplicated,
    setEmailDuplicated,
    setEmailNotDuplicated,
    setEmailVerificationConfirmCompleted,
    setEmailVerificationConfirmFailed,
    setEmailVerificationRequestCompleted,
    setEmailVerificationRequestFailed,
    handleSignupCompleted,
    handleSignupFailed,
    handleUserInput,
    handleEmailCheckReload
  };
}
