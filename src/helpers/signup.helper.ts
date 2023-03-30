import * as RegExp from '@/utils/constants/regExp';
import validationMessage from '@/utils/constants/validationMessage';

export function emailValidation(email: string) {
  if (!email) {
    return { validation: 'default', message: '', value: '' };
  }

  const validation =
    RegExp.EMAIL_REGEX.test(email) && email.length <= RegExp.EMAIL_MAX_LENGTH
      ? 'success'
      : 'error';

  const message =
    validation === 'error' ? validationMessage.email.notValid : '';

  return { validation, message, value: email };
}

export function passwordLengthCheck(password: string) {
  const validation =
    password.length >= RegExp.PASSWORD_MIN_LENGTH &&
    password.length <= RegExp.PASSWORD_MAX_LENGTH
      ? 'success'
      : 'error';

  const message =
    validation === 'error' ? validationMessage.password.notValid : '';

  return { validation, message, value: password };
}

export function passwordSafetyCheck(password: string) {
  const safetyLow =
    RegExp.ONLY_NUM_REGEXP.test(password) ||
    RegExp.ONLY_LOW_REGEXP.test(password) ||
    RegExp.ONLY_UPPER_REGEXP.test(password) ||
    RegExp.ONLY_CHAR_REGEXP.test(password);

  const safetyMid =
    RegExp.NUM_LOW_REGEXP.test(password) ||
    RegExp.NUM_UPPER_REGEXP.test(password) ||
    RegExp.LOW_UPPER_REGEXP.test(password) ||
    RegExp.NUM_CHAR_REGEXP.test(password) ||
    RegExp.LOW_CHAR_REGEXP.test(password) ||
    RegExp.UPPER_CHAR_REGEXP.test(password);

  const safetyHigh =
    RegExp.NUM_LOW_UPPER_REGEXP.test(password) ||
    RegExp.NUM_LOW_CHAR_REGEXP.test(password) ||
    RegExp.LOW_UPPER_CHAR_REGEXP.test(password) ||
    RegExp.NUM_LOW_UPPER_CHAR_REGEXP.test(password);

  if (safetyLow) {
    return {
      validation: 'error',
      message: validationMessage.password.lowSafety,
      value: password
    };
  }

  if (safetyMid) {
    return {
      validation: 'success',
      message: validationMessage.password.midSafety,
      value: password
    };
  }

  if (safetyHigh) {
    return {
      validation: 'success',
      message: validationMessage.password.highSafety,
      value: password
    };
  }

  return { validation: 'default', message: '', value: password };
}

export function passwordValidation(password: string) {
  if (!password) {
    return { validation: 'default', message: '', value: '' };
  }
  const value = password.trim();

  if (
    value.length < RegExp.PASSWORD_MIN_LENGTH ||
    value.length > RegExp.PASSWORD_MAX_LENGTH
  ) {
    return passwordLengthCheck(value);
  }

  return passwordSafetyCheck(value);
}

export function passworCheckValidation(
  password: string,
  passwordCheck: string
) {
  if (!passwordCheck) {
    return { validation: 'default', message: '', value: '' };
  }

  const value = passwordCheck.trim();

  const validation = password === passwordCheck ? 'success' : 'error';

  const message =
    validation === 'error' ? validationMessage.passwordCheck.notValid : '';

  return { validation, message, value };
}

export function usernameValidation(username: string) {
  if (!username) {
    return { validation: 'default', message: '', value: '' };
  }

  const value = username.trim().replace(RegExp.ONLY_KO_EN_REGEXP, '');

  const validation =
    username.length <= RegExp.NAME_MAX_LENGTH &&
    username.length > RegExp.NAME_MIN_LENGTH
      ? 'success'
      : 'error';

  const message =
    validation === 'error' ? validationMessage.username.notValid : '';

  return { validation, message, value };
}

export function submitValidation(
  email: string,
  password: string,
  passwordCheck: string,
  username: string
) {
  return !(
    email === 'success' &&
    password === 'success' &&
    passwordCheck === 'success' &&
    username === 'success'
  );
}
