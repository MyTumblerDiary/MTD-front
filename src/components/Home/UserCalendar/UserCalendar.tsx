import * as Style from './UserCalendar.style';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import useToggleSheet from '@/hooks/useToggleSheet';

import activeDayState from '@/store/activeDay';

import BottomSheet from '../BottomSheet/BottomSheet';
import ReactPortal from '@/components/Common/BottomSheetFrame/ReactPortal';
import Typography from '@/components/Common/Typography/Typography';

const data = [
  {
    id: 1,
    date: '2023-04-13',
    usesCount: 1,
    totalDiscountAmount: 400
  },
  {
    id: 2,
    date: '2023-04-01',
    usesCount: 1,
    totalDiscountAmount: 400
  },
  {
    id: 3,
    date: '2023-04-09',
    usesCount: 2,
    totalDiscountAmount: 400
  },
  {
    id: 4,
    date: '2023-04-16',
    usesCount: 6,
    totalDiscountAmount: 3200
  }
];

export default function UserCalendar() {
  const { sheetState, toggleSheet } = useToggleSheet();

  function leftPad(value: number) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }

  const toStringByFormatting = (source: Date, delimiter = '-') => {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  };

  return (
    <Style.CalendarWrapper>
      <Calendar
        locale='ko'
        onClickDay={(day) => {
          toggleSheet();
          activeDayState(day);
        }}
        tileContent={({ date }) => {
          const existsData = data.filter(
            (item) => item.date === toStringByFormatting(date)
          );
          if (existsData.length) {
            return (
              <Style.CalendarContent>
                <Style.ColoredTumbler count={existsData[0].usesCount} />
                <Typography size='caption'>
                  {existsData[0].totalDiscountAmount}원
                </Typography>
              </Style.CalendarContent>
            );
          }
        }}
      />
      {sheetState && (
        <ReactPortal>
          <BottomSheet />
        </ReactPortal>
      )}
    </Style.CalendarWrapper>
  );
}
