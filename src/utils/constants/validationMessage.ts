const validationMessage = {
  email: {
    isEmpty: '이메일을 입력해주세요.',
    notValid: '이메일 형식이 올바르지 않습니다.',
    duplicated: '이미 가입된 이메일입니다.',
    notAuthorized: '인증번호가 틀렸습니다.'
  },
  password: {
    isEmpty: '비밀번호를 입력해주세요.',
    notValid: '비밀번호는 8자리 이상 15자리 이하입니다.',
    lowSafety: '비밀번호 안전도 낮음',
    midSafety: '비밀번호 안전도 보통',
    highSafety: '비밀번호 안전도 높음'
  },
  passwordCheck: {
    isEmpty: '비밀번호 확인을 입력해주세요.',
    notValid: '비밀번호가 일치하지 않습니다.'
  },
  username: {
    isEmpty: '닉네임을 입력해주세요.',
    notValid: '닉네임은 2자리 이상 15자리 이하입니다.'
  }
};

export default validationMessage;
