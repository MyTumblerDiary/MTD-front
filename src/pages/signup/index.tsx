import { useState } from 'react';

import * as Style from './style';

import { type ButtonProps, type InputProps } from '@/types';

import Typography from '@/components/Common/Typography/Typography';
import HeadTitle from '@/components/Common/Heading/HeadTitle';
import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Layout from '@/components/Layout/Layout';

export default function Signup() {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    username: ''
  });

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;

    setUserInput((currentState) => ({
      ...currentState,
      [name]: value
    }));
  };

  const handleSignupSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const idProps: InputProps = {
    type: 'email',
    name: 'email',
    label: '이메일',
    isLabelVisible: true,
    isRequired: true,
    size: 'md',
    value: userInput.email,
    placeholder: '이메일을 입력해주세요.',
    onChange: handleUserInput
  };

  const passwordProps: InputProps = {
    type: 'password',
    name: 'password',
    label: '비밀번호',
    isLabelVisible: true,
    isRequired: true,
    size: 'md',
    value: userInput.password,
    placeholder: '비밀번호를 입력해주세요.',
    onChange: handleUserInput
  };

  const passwordCheckProps: InputProps = {
    type: 'password',
    name: 'passwordCheck',
    label: '비밀번호 확인',
    isLabelVisible: true,
    isRequired: true,
    size: 'md',
    value: userInput.passwordCheck,
    placeholder: '비밀번호를 다시 입력해주세요.',
    onChange: handleUserInput
  };

  const usernameProps: InputProps = {
    type: 'text',
    name: 'username',
    label: '닉네임',
    isLabelVisible: true,
    isRequired: true,
    size: 'md',
    value: userInput.username,
    placeholder: '닉네임을 입력해주세요.',
    onChange: handleUserInput
  };

  const signupButtonProps: ButtonProps = {
    type: 'submit',
    size: 'md',
    name: 'signup',
    children: (
      <Typography size='button1' variant='accent'>
        회원가입
      </Typography>
    )
  };

  return (
    <Style.SignupWrapper>
      <Style.SignupHeader>
        <HeadTitle>회원가입</HeadTitle>
      </Style.SignupHeader>
      <Style.SignupForm onSubmit={handleSignupSubmit}>
        <Style.InputWrapper>
          <Input {...idProps} />
          <Input {...passwordProps} />
          <Input {...passwordCheckProps} />
          <Input {...usernameProps} />
        </Style.InputWrapper>
        <Style.ButtonWrapper>
          <Button {...signupButtonProps} />
        </Style.ButtonWrapper>
      </Style.SignupForm>
    </Style.SignupWrapper>
  );
}

Signup.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
