import { useEffect, useMemo, useState } from 'react';

import * as Style from './SignupForm.style';

import {
  type InputNameProps,
  type ButtonProps,
  type InputProps,
  type InputValidationProps
} from '@/types';

import {
  emailValidation,
  passworCheckValidation,
  passwordValidation,
  usernameValidation,
  submitValidation
} from '@/helpers/signup.helper';

import Typography from '@/components/Common/Typography/Typography';
import HeadTitle from '@/components/Common/Heading/HeadTitle';
import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';

interface SignupInputProps {
  email: {
    value: string;
    validation: InputValidationProps;
    message: string;
  };
  emailCheck: {
    value: string;
    validation: InputValidationProps;
    message: string;
  };
  password: {
    value: string;
    validation: InputValidationProps;
    message: string;
  };
  passwordCheck: {
    value: string;
    validation: InputValidationProps;
    message: string;
  };
  username: {
    value: string;
    validation: InputValidationProps;
    message: string;
  };
}

export default function SignupForm() {
  const [userInput, setUserInput] = useState<SignupInputProps>({
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
  });

  const [isAuthButtonClicked, setIsAuthButtonClicked] = useState(false);

  useEffect(() => {
    if (userInput.email.validation !== 'success') {
      clearEmailCheckValue();
    }
  }, [userInput.email.validation]);

  const isEmailCheckVisible = useMemo(
    () => isAuthButtonClicked && userInput.email.validation === 'success',
    [isAuthButtonClicked, userInput.email.validation]
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
    setIsAuthButtonClicked(false);
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
    setIsAuthButtonClicked(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const emailProps: InputProps = {
    type: 'email',
    name: 'email',
    label: '이메일',
    isLabelVisible: true,
    isRequired: true,
    size: 'lg',
    value: userInput.email.value,
    validation: userInput.email.validation,
    message: userInput.email.message,
    placeholder: '이메일을 입력해주세요.',
    onChange: handleUserInput
  };

  const passwordProps: InputProps = {
    type: 'password',
    name: 'password',
    label: '비밀번호',
    isLabelVisible: true,
    isRequired: true,
    size: 'lg',
    value: userInput.password.value,
    validation: userInput.password.validation,
    message: userInput.password.message,
    placeholder: '비밀번호를 입력해주세요.',
    onChange: handleUserInput
  };

  const passwordCheckProps: InputProps = {
    type: 'password',
    name: 'passwordCheck',
    label: '비밀번호 확인',
    isLabelVisible: true,
    isRequired: true,
    size: 'lg',
    value: userInput.passwordCheck.value,
    validation: userInput.passwordCheck.validation,
    message: userInput.passwordCheck.message,
    placeholder: '비밀번호를 다시 입력해주세요.',
    onChange: handleUserInput
  };

  const usernameProps: InputProps = {
    type: 'text',
    name: 'username',
    label: '닉네임',
    isLabelVisible: true,
    isRequired: true,
    size: 'lg',
    value: userInput.username.value,
    validation: userInput.username.validation,
    message: userInput.username.message,
    placeholder: '닉네임을 입력해주세요.',
    onChange: handleUserInput
  };

  const signupButtonProps: ButtonProps = {
    type: 'submit',
    size: 'lg',
    name: 'signup',
    disabled: isValidateSubmit,
    children: (
      <Typography size='button1' variant='accent'>
        회원가입
      </Typography>
    )
  };

  const emailCheckProps: InputProps = {
    type: 'text',
    name: 'emailCheck',
    label: '이메일 확인',
    isLabelVisible: false,
    size: 'lg',
    value: userInput.emailCheck.value,
    validation: userInput.emailCheck.validation,
    message: userInput.emailCheck.message,
    placeholder: '인증번호를 입력해주세요.',
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
    <Style.SignupWrapper>
      <Style.SignupHeader>
        <HeadTitle>회원가입</HeadTitle>
      </Style.SignupHeader>
      <Style.SignupForm onSubmit={handleSubmit}>
        <Style.InputWrapper>
          <Style.EmailWrapper>
            <Style.Email>
              <Input {...emailProps} />
              {userInput.email.validation === 'success' && (
                <Style.EamilButtonWrapper>
                  <Button {...emailCheckButtonProps} />
                </Style.EamilButtonWrapper>
              )}
            </Style.Email>
            {isEmailCheckVisible && (
              <Style.EmailCheckWrapper>
                <Input {...emailCheckProps} />
                {userInput.emailCheck.value && (
                  <Style.EamilButtonWrapper>
                    <Button {...emailAuthButtonProps} />
                  </Style.EamilButtonWrapper>
                )}
              </Style.EmailCheckWrapper>
            )}
          </Style.EmailWrapper>
          <Input {...passwordProps} />
          <Input {...passwordCheckProps} />
          <Input {...usernameProps} />
        </Style.InputWrapper>
        <Button {...signupButtonProps} />
      </Style.SignupForm>
    </Style.SignupWrapper>
  );
}
