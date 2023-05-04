import { ko } from 'date-fns/locale';
import { getYear, getMonth } from 'date-fns';

import Typography from '../../Common/Typography/Typography';

import * as Style from './RecordDatePicker.style';

import Svg from '../../svg';

interface DatePickerProps {
  recordDate: Date;
  setRecordDate: React.Dispatch<React.SetStateAction<Date>>;
}

const RecordDatePicker = ({ recordDate, setRecordDate }: DatePickerProps) => {
  const handleDateChange = (date: Date) => {
    setRecordDate(date);
  };

  const handleFocusBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.target.blur();
  };

  return (
    <Style.DatePickerContainer
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        nextMonthButtonDisabled
      }) => (
        <Style.DatePickerHeader>
          <Style.DecreaseMonthButton onClick={decreaseMonth}>
            <Svg.CaretRight />
          </Style.DecreaseMonthButton>
          <Typography size='button1' variant='main'>
            {getYear(date)}년 {getMonth(date) + 1}월
          </Typography>
          <Style.IncreaseMonthButton
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <Svg.CaretRight />
          </Style.IncreaseMonthButton>
        </Style.DatePickerHeader>
      )}
      selected={recordDate}
      dateFormat='yyyy년 MM월 dd일'
      maxDate={new Date()}
      locale={ko}
      onFocus={handleFocusBlur}
      onChange={handleDateChange}
    />
  );
};

export default RecordDatePicker;
