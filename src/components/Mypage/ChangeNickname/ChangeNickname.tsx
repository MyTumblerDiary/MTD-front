import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import Header from '@/components/Common/Header/Header';
import Input from '@/components/Common/Input/Input';
import Button from '@/components/Common/Button/Button';
import Typography from '@/components/Common/Typography/Typography';

import { usernameValidation } from '@/utils/helpers/signup.helper';

import useNicknameChange from '@/hooks/useNicknameChange';

import { ButtonProps, type InputProps, type UserInputPramProps } from '@/types';

import * as Style from './ChangeNickname.style';

const ChangeNickname = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<UserInputPramProps>({
    value: '',
    validation: 'default',
    message: ''
  });

  const isValidateSubmit = useMemo(() => {
    return nickname.validation === 'success';
  }, [nickname.validation]);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const usernameValidationResult = usernameValidation(
      value
    ) as UserInputPramProps;

    setNickname(usernameValidationResult);
  };

  const [updateNickname] = useNicknameChange(nickname.value, setNickname);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateNickname();
  };

  const nicknameProps: InputProps = {
    type: 'text',
    name: 'username',
    label: '닉네임',
    size: 'lg',
    value: nickname.value,
    isLabelVisible: true,
    isRequired: true,
    placeholder: '2글자 이상 15글자 이하로 작성해주세요.',
    validation: nickname.validation,
    message: nickname.message,
    onChange: onChangeNickname
  };

  const loginButtonProps: ButtonProps = {
    type: 'submit',
    size: 'lg',
    name: 'nicknameChange',
    disabled: !isValidateSubmit,
    children: (
      <Typography size='button1' variant='accent'>
        변경 완료
      </Typography>
    )
  };

  return (
    <div>
      <Header title='닉네임 변경' />
      <Style.MainContainer onSubmit={onSubmitHandler}>
        <Input {...nicknameProps} />
        <Button {...loginButtonProps} />
      </Style.MainContainer>
    </div>
  );
};

export default ChangeNickname;
