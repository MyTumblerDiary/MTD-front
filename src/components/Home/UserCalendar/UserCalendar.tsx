import * as Style from './UserCalendar.style';
import theme from '@/styles/theme';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import useToggleSheet from '@/hooks/useToggleSheet';

import activeDayState from '@/store/activeDay';

import { toStringByFormatting } from '@/utils/helpers/calendar.helper';

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
    usesCount: 1,
    totalDiscountAmount: 400
  },
  {
    id: 4,
    date: '2023-04-16',
    usesCount: 1,
    totalDiscountAmount: 3200
  },
  {
    id: 5,
    date: '2023-04-20',
    usesCount: 3,
    totalDiscountAmount: 500
  },
  {
    id: 6,
    date: '2023-04-05',
    usesCount: 5,
    totalDiscountAmount: 3200
  }
];

export default function UserCalendar() {
  const { sheetState, toggleSheet } = useToggleSheet();

  const handleTumblerVariant = (usesCount: number) => {
    if (usesCount >= 5) {
      return 'success';
    }

    if (usesCount >= 3) {
      return 'warning';
    }

    if (usesCount >= 0) {
      return 'default';
    }
  };

  const handleVariation = (variation: string | undefined) => {
    switch (variation) {
      case 'success':
        return theme.color.success;
      case 'warning':
        return theme.color.warning;
      case 'default':
        return 'black';
      default:
        break;
    }
  };

  const handleClickDay = (day: Date) => {
    toggleSheet();
    activeDayState(day);
  };

  return (
    <Style.CalendarWrapper>
      <Calendar
        locale='ko'
        calendarType='US'
        formatDay={(_, date) => date.getDate().toString()}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) => {
          if (view !== 'month') {
            return;
          }
          const existsData = data.filter(
            (item) => item.date === toStringByFormatting(date)
          );
          if (existsData.length) {
            return (
              <Style.CalendarContent>
                <Style.ColoredTumbler
                  variation={handleVariation(
                    handleTumblerVariant(existsData[0].usesCount)
                  )}
                />
                <Typography
                  size='caption'
                  variant={handleTumblerVariant(existsData[0].usesCount)}
                >
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
