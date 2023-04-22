import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  height: 100vh;
  position: relative;
`;

export const FormContainer = styled.form`
  padding-top: 80px;
`;

export const DatePickerContainer = styled.div`
  margin-top: 10px;
`;

export const FormMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px ${theme.mobileScreenPadding};
  gap: 40px;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubmitButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 30px;

  display: flex;
  justify-content: center;
`;
