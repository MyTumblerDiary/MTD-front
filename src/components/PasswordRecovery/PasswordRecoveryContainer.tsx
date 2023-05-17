// import { useEffect, useMemo, useState } from 'react';

// import * as Style from './PasswordRecoveryContainer.style';

// import {
//   type StepButtonNameProps,
//   type StepArrayProps,
//   type UserInputPramProps,
//   type InputNameProps
// } from '@/types';

// import {
//   emailValidation,
//   passworCheckValidation,
//   passwordValidation
// } from '@/utils/helpers/signup.helper';

// import AuthHeader from '../Common/AuthHeader/AuthHeader';
// import Stepper from '../Common/Stepper/Stepper';
// import SignupEmailStep from '../Signup/SignupEmailStep/SignupEmailStep';
// import SignupPasswordStep from '../Signup/SignupPasswordStep/SignupPasswordStep';

// interface PwRecoveryInputProps {
//   email: UserInputPramProps;
//   emailCheck: UserInputPramProps;
//   password: UserInputPramProps;
//   passwordCheck: UserInputPramProps;
// }

// const initialUserInput: PwRecoveryInputProps = {
//   email: {
//     value: '',
//     validation: 'default',
//     message: ''
//   },
//   emailCheck: {
//     value: '',
//     validation: 'default',
//     message: ''
//   },
//   password: {
//     value: '',
//     validation: 'default',
//     message: ''
//   },
//   passwordCheck: {
//     value: '',
//     validation: 'default',
//     message: ''
//   }
// };

// export default function PasswordRecoveryContainer() {
//   const [userInput, setUserInput] =
//     useState<PwRecoveryInputProps>(initialUserInput);

//   const [isEmailAuth, setIsEmailAuth] = useState(false);

//   const isEmailCheckVisible = useMemo(
//     () => isEmailAuth && userInput.email.validation === 'success',
//     [isEmailAuth, userInput.email.validation]
//   );

//   const submitValidation = (
//     email: string,
//     password: string,
//     passwordCheck: string
//   ) => {
//     return (
//       email === 'success' &&
//       password === 'success' &&
//       passwordCheck === 'success'
//     );
//   };

//   const isValidateSubmit = useMemo(
//     () =>
//       submitValidation(
//         userInput.email.validation,
//         userInput.password.validation,
//         userInput.passwordCheck.validation
//       ),
//     [
//       userInput.email.validation,
//       userInput.password.validation,
//       userInput.passwordCheck.validation
//     ]
//   );

//   const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       target: { name, value }
//     } = event;

//     setUserInput((currentState) => ({
//       ...currentState,
//       [name]: {
//         ...handleValidation(name as InputNameProps, value)
//       }
//     }));
//   };

//   const handleEmailCheck = () => {
//     setIsEmailAuth(true);
//   };

//   useEffect(() => {
//     if (userInput.email.validation !== 'success') {
//       clearEmailCheckValue();
//     }
//   }, [userInput.email.validation]);

//   const clearEmailCheckValue = () => {
//     setIsEmailAuth(false);
//     setUserInput((currentState) => ({
//       ...currentState,
//       emailCheck: {
//         value: '',
//         validation: 'default',
//         message: ''
//       }
//     }));
//   };

//   const handleValidation = (name: InputNameProps, value: string) => {
//     switch (name) {
//       case 'email':
//         return emailValidation(value);
//       case 'password':
//         return passwordValidation(value);
//       case 'passwordCheck':
//         return passworCheckValidation(userInput.password.value, value);
//       default:
//         return { value, validation: 'default', message: '' };
//     }
//   };

//   const handleEmailAuth = () => {
//     setUserInput((currentState) => ({
//       ...currentState,
//       emailCheck: {
//         ...currentState.emailCheck,
//         validation: 'success',
//         message: ''
//       }
//     }));
//   };

//   const steps: StepArrayProps = [
//     {
//       label: '이메일 인증',
//       stepDescription: '사용중인 이메일을 입력하고 인증해주세요.',
//       isNextButtonActive: userInput.emailCheck.validation === 'success',
//       children: (
//         <SignupEmailStep
//           email={userInput.email}
//           emailCheck={userInput.emailCheck}
//           isEmailAuth={isEmailAuth}
//           isEmailCheckVisible={isEmailCheckVisible}
//           handleUserInput={handleUserInput}
//           handleEmailAuth={handleEmailAuth}
//           handleEmailCheck={handleEmailCheck}
//         />
//       )
//     },
//     {
//       label: '비밀번호 설정',
//       stepDescription: '새로운 비밀번호를 입력하세요.',
//       isNextButtonActive: userInput.passwordCheck.validation === 'success',
//       children: (
//         <SignupPasswordStep
//           password={userInput.password}
//           passwordCheck={userInput.passwordCheck}
//           handleUserInput={handleUserInput}
//         />
//       )
//     }
//   ];

//   const handleSubmit = () => {
//     console.log('비밀번호 변경 완료.');
//   };

//   const stepButtonNames: StepButtonNameProps = {
//     next: '인증 완료',
//     end: '비밀번호 설정 완료'
//   };

//   return (
//     <Style.PasswordRecoveryWrapper>
//       <AuthHeader title={'비밀번호 찾기'} />
//       <Stepper
//         steps={steps}
//         stepButtonNames={stepButtonNames}
//         isValidateSubmit={isValidateSubmit}
//         handleSubmit={handleSubmit}
//       />
//     </Style.PasswordRecoveryWrapper>
//   );
// }

import React from 'react';

export default function PasswordRecoveryContainer() {
  return <div>PasswordRecoveryContainer</div>;
}
