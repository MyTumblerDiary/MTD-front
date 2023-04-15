import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import themes from '@/styles/theme';

export const DatePickerContainer = styled(DatePicker)`
  width: 320px;
  height: 48px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${themes.color.g100};
  font-size: 14px;
`;

export const DatePickerHeader = styled.div`
  border-bottom: 2px solid ${themes.color.main};
  padding: 12px;
  margin-bottom: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: black;
    padding-top: 2px;
  }

  button {
    padding: 0;
  }
`;

export const DecreaseMonthButton = styled.button`
  transform: scaleX(-1);
`;

export const IncreaseMonthButton = styled.button`
  &:disabled {
    svg {
      fill: gray;
    }
  }
`;
