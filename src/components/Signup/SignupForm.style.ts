import styled from 'styled-components';

export const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SignupHeader = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupForm = styled.form`
  width: 100%;
  flex: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Email = styled.div`
  position: relative;
`;

export const EamilButtonWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;

  @keyframes fadeIn {
    from {
      opacity: 30%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const EmailCheckWrapper = styled.div`
  position: relative;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-timing-function: ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
