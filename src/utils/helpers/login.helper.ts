import validationMessage from '../constants/validationMessage';
import { EMAIL_REGEX } from '../constants/regExp';

// 로그인 시 이메일은 이메일 구조만 맞으면 통과
export const emailValidation = (email: string) => {
  if (!email) {
    return { validation: 'default', message: '', value: '' };
  }

  const validation = EMAIL_REGEX.test(email) ? 'success' : 'error';

  const message =
    validation === 'error' ? validationMessage.email.notValid : '';

  return { validation, message, value: email };
};

// 로그인 시 비밀번호는 한자리라도 입력되어있으면 통과
export const passwordValidation = (password: string) => {
  if (!password) {
    return { validation: 'default', message: '', value: '' };
  }

  return {
    validation: 'success',
    message: '',
    value: password
  };
};

export const submitValidation = (email: string, password: string) => {
  return email === 'success' && password === 'success';
};
