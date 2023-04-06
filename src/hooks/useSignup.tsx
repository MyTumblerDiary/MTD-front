import { useEffect, useMemo, useState } from 'react';

import { type InputNameProps, type UserInputPramProps } from '@/types';

import {
  emailValidation,
  passworCheckValidation,
  passwordValidation,
  submitValidation,
  usernameValidation
} from '@/utils/helpers/signup.helper';

interface SignupInputProps {
  email: UserInputPramProps;
  emailCheck: UserInputPramProps;
  password: UserInputPramProps;
  passwordCheck: UserInputPramProps;
  username: UserInputPramProps;
}

export default function useSignup(initialState: SignupInputProps) {
  const [userInput, setUserInput] = useState<SignupInputProps>(initialState);

  const [isEmailAuth, setIsEmailAuth] = useState(false);

  useEffect(() => {
    if (userInput.email.validation !== 'success') {
      clearEmailCheckValue();
    }
  }, [userInput.email.validation]);

  const isEmailCheckVisible = useMemo(
    () => isEmailAuth && userInput.email.validation === 'success',
    [isEmailAuth, userInput.email.validation]
  );

  const isValidateSubmit = useMemo(
    () =>
      submitValidation(
        userInput.email.validation,
        userInput.password.validation,
        userInput.passwordCheck.validation,
        userInput.username.validation
      ),
    [
      userInput.email.validation,
      userInput.password.validation,
      userInput.passwordCheck.validation,
      userInput.username.validation
    ]
  );

  const clearEmailCheckValue = () => {
    setIsEmailAuth(false);
    setUserInput((currentState) => ({
      ...currentState,
      emailCheck: {
        value: '',
        validation: 'default',
        message: ''
      }
    }));
  };

  const handleEmailAuth = () => {
    setUserInput((currentState) => ({
      ...currentState,
      emailCheck: {
        ...currentState.emailCheck,
        validation: 'success',
        message: ''
      }
    }));
  };

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

  const handleEmailCheck = () => {
    setIsEmailAuth(true);
  };

  const handleSubmit = () => {
    console.log('회원가입');
  };

  return {
    userInput,
    isEmailCheckVisible,
    isEmailAuth,
    isValidateSubmit,
    handleUserInput,
    handleEmailCheck,
    handleSubmit,
    handleEmailAuth
  };
}
