import { useRouter } from 'next/router';

import Input from '@/components/Common/Input/Input';
import Svg from '@/components/svg';

import * as Style from './ChangePassword.style';
import React, { useMemo, useState } from 'react';
import { InputNameProps, InputProps, UserInputPramProps } from '@/types';
import {
  passwordValidation,
  passworCheckValidation
} from '@/utils/helpers/signup.helper';
import { passwordValidation as currentPasswordValidation } from '@/utils/helpers/login.helper';

interface ChangePasswordInputTypes {
  currentPassword: UserInputPramProps;
  password: UserInputPramProps;
  passwordCheck: UserInputPramProps;
}

const ChangePassword = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState<ChangePasswordInputTypes>({
    currentPassword: {
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
    }
  });

  const onClickBack = () => {
    router.back();
  };

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
      case 'currentPassword':
        return currentPasswordValidation(value);
      case 'password':
        return passwordValidation(value);
      case 'passwordCheck':
        return passworCheckValidation(userInput.password.value, value);
      default:
        return { value, validation: 'default', message: '' };
    }
  };

  const isValidateSubmit = useMemo(() => {
    return (
      userInput.currentPassword.validation === 'success' &&
      userInput.password.validation === 'success' &&
      userInput.passwordCheck.validation === 'success'
    );
  }, [
    userInput.currentPassword.validation,
    userInput.password.validation,
    userInput.passwordCheck.validation
  ]);

  const currentPasswordProps: InputProps = {
    type: 'password',
    name: 'currentPassword',
    label: '현재 비밀번호',
    size: 'lg',
    value: userInput.currentPassword.value,
    isLabelVisible: true,
    isRequired: true,
    placeholder: '현재 비밀번호를 입력해주세요',
    validation: userInput.currentPassword.validation,
    onChange: handleUserInput
  };

  const newPasswordProps: InputProps = {
    type: 'password',
    name: 'password',
    label: '새 비밀번호',
    size: 'lg',
    value: userInput.password.value,
    isLabelVisible: true,
    isRequired: true,
    placeholder: '새로운 비밀번호를 입력해주세요.',
    validation: userInput.password.validation,
    onChange: handleUserInput
  };

  const newPasswordCheckProps: InputProps = {
    type: 'password',
    name: 'passwordCheck',
    label: '비밀번호 확인',
    size: 'lg',
    value: userInput.passwordCheck.value,
    isLabelVisible: true,
    isRequired: true,
    placeholder: '비밀번호를 한 번 더 입력해주세요.',
    validation: userInput.passwordCheck.validation,
    onChange: handleUserInput
  };

  const submitButtonProps = {
    type: 'submit',
    disabled: !isValidateSubmit
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('비밀번호 변경 api 호출');
  };

  return (
    <div>
      <Style.HeaderContainer>
        <Style.BackButton onClick={onClickBack}>
          <Svg.ArrowLeft />
        </Style.BackButton>
        <button form='test' type='submit' disabled={!isValidateSubmit}>
          완료
        </button>
      </Style.HeaderContainer>
      <Style.AllInputsContainer id='test' onSubmit={onSubmitHandler}>
        <Input {...currentPasswordProps} />
        <Input {...newPasswordProps} />
        <Input {...newPasswordCheckProps} />
      </Style.AllInputsContainer>
    </div>
  );
};

export default ChangePassword;
