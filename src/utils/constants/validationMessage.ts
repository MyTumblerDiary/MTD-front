const validationMessage = {
  email: {
    isEmpty: '이메일을 입력해주세요.',
    notValid: '이메일 형식이 올바르지 않습니다.',
    duplicated: '이미 가입된 이메일입니다.',
    notAuthorized: '인증번호가 틀렸습니다.',
    valid: '사용가능한 이메일입니다.'
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
    notValid: '닉네임은 2자리 이상 15자리 이하입니다.',
    duplicated: '중복된 닉네임입니다.',
    valid: '사용가능한 닉네임입니다.'
  },
  authRequest: {
    success: '인증번호 전송 완료',
    fail: '인증번호 전송 실패'
  },
  recordTumblerImage: {
    isEmpty: '사용하신 텀블러 사진을 넣어주세요.'
  },
  recordPlace: {
    isEmpty: '텀블러를 사용한 장소를 입력해주세요.'
  }
};

export default validationMessage;
