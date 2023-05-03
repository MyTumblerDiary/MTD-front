import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
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
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const MemoTitleContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 5px;
  }
`;
