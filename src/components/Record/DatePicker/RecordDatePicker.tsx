import { ko } from 'date-fns/locale';
import { getYear, getMonth } from 'date-fns';

import Typography from '../../Common/Typography/Typography';

import * as Style from './RecordDatePicker.style';

import Svg from '../../svg';
import Title from '@/components/Common/Heading/Title';
import { RecordInputTypes } from '@/types';

interface DatePickerProps {
  recordDate: Date;
  setUserInput: React.Dispatch<React.SetStateAction<RecordInputTypes>>;
}

const RecordDatePicker = ({ recordDate, setUserInput }: DatePickerProps) => {
  const handleDateChange = (date: Date) => {
    setUserInput((currentState) => ({
      ...currentState,
      recordDate: date
    }));
  };

  const handleFocusBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target.blur();
  };

  return (
    <div>
      <Title variant='main'>날짜</Title>
      <Style.DatePickerContainer
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          nextMonthButtonDisabled
        }) => {
          const onClickDecreaseMonth = (e: any) => {
            e.preventDefault();
            decreaseMonth();
          };
          const onClickIncreaseMonth = (e: any) => {
            e.preventDefault();
            increaseMonth();
          };

          return (
            <Style.DatePickerHeader>
              <Style.DecreaseMonthButton onClick={onClickDecreaseMonth}>
                <Svg.CaretRight />
              </Style.DecreaseMonthButton>
              <Typography size='button1' variant='main'>
                {getYear(date)}년 {getMonth(date) + 1}월
              </Typography>
              <Style.IncreaseMonthButton
                onClick={onClickIncreaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <Svg.CaretRight />
              </Style.IncreaseMonthButton>
            </Style.DatePickerHeader>
          );
        }}
        selected={recordDate}
        dateFormat='yyyy년 MM월 dd일'
        maxDate={new Date()}
        locale={ko}
        onFocus={handleFocusBlur}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default RecordDatePicker;
