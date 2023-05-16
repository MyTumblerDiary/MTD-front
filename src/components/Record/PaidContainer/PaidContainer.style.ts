import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
`;

export const DatePickerContainer = styled.div`
  margin-top: 10px;
`;

export const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  padding: 80px ${theme.mobileScreenPadding} 0 ${theme.mobileScreenPadding};
  gap: 40px;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  list-style: none;

  input {
    z-index: 200;
  }
`;

export const SelectedPlace = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: rgba(18, 184, 134, 0.12);
`;

export const DiscountCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DiscountCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

export const DiscountCheckboxLabel = styled.label`
  font-size: 14px;
`;

export const DiscountedAmountSelect = styled.select`
  width: 100%;
  max-width: 400px;
  height: 48px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  border: 1px solid #f5f5f5;
  font-size: 14px;
  background-color: #fff;
  color: #000;
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
