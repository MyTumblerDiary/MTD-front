import React, { useState, useMemo } from 'react';

import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Typography from '@/components/Common/Typography/Typography';

import {
  type ButtonProps,
  type InputProps,
  type UserInputPramProps,
  type TypographyProps,
  type InputNameProps
} from '@/types';

import {
  emailValidation,
  passwordValidation,
  submitValidation
} from '@/utils/helpers/login.helper';

import * as Style from './LoginForm.style';

interface LoginInputTypes {
  email: UserInputPramProps;
  password: UserInputPramProps;
}

const LoginForm = () => {
  const [userInput, setUserInput] = useState<LoginInputTypes>({
    email: {
      value: '',
      validation: 'default',
      message: ''
    },
    password: {
      value: '',
      validation: 'default',
      message: ''
    }
  });

  const isValidateSubmit = useMemo(() => {
    return submitValidation(
      userInput.email.validation,
      userInput.password.validation
    );
  }, [userInput.email.validation, userInput.password.validation]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

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
      default:
        return { validation: 'default', value, message: '' };
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const emailProps: InputProps = {
    size: 'lg',
    type: 'email',
    name: 'email',
    label: 'Email',
    value: userInput.email.value,
    message: userInput.email.message,
    validation: userInput.email.validation,
    placeholder: '이메일',
    onChange: handleUserInput
  };

  const passwordProps: InputProps = {
    size: 'lg',
    type: 'password',
    name: 'password',
    label: 'Password',
    value: userInput.password.value,
    message: userInput.password.message,
    validation: userInput.password.validation,
    placeholder: '비밀번호',
    onChange: handleUserInput
  };

  const loginButtonTextProps: TypographyProps = {
    size: 'button1',
    variant: 'accent',
    children: '로그인'
  };

  const loginButtonProps: ButtonProps = {
    type: 'submit',
    size: 'lg',
    name: 'login',
    disabled: !isValidateSubmit,
    children: <Typography {...loginButtonTextProps} />
  };

  return (
    <Style.LoginForm onSubmit={onSubmitHandler}>
      <Style.InputWrapper>
        <Input {...emailProps} />
        <Input {...passwordProps} />
      </Style.InputWrapper>

      <Button {...loginButtonProps} />
    </Style.LoginForm>
  );
};

export default LoginForm;
