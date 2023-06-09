import * as Style from './UserCalendar.style';
import theme from '@/styles/theme';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { useToggleSheet, useTumblerRecord } from '@/hooks';

import {
  type TumblerRecordsProps,
  type TumblerRecordProps,
  type ViewProps
} from '@/types';

import activeDayState from '@/store/activeDay';
import clickedTumblerDataState from '@/store/clickedTumblerData';

import { toStringByFormatting } from '@/utils/helpers/calendar.helper';

import BottomSheet from '../BottomSheet/BottomSheet';
import ReactPortal from '@/components/Common/BottomSheetFrame/ReactPortal';
import Typography from '@/components/Common/Typography/Typography';

export default function UserCalendar() {
  const { sheetState, toggleSheet } = useToggleSheet();
  const { data } = useTumblerRecord({});
  console.log(data);

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

  const filterTumblerRecordsByDay = (
    day: Date,
    tumblerRecords: TumblerRecordsProps
  ) => {
    if (!tumblerRecords) {
      return [];
    }

    return tumblerRecords.filter(
      (item: TumblerRecordProps) => item.usedAt === toStringByFormatting(day)
    );
  };

  const handleClickDay = (day: Date) => {
    toggleSheet();
    activeDayState(day);

    const filteredRecordsByDay = filterTumblerRecordsByDay(
      day,
      data?.tumblerRecords.tumblerRecords
    );

    clickedTumblerDataState(filteredRecordsByDay);
  };

  const calculateTotalPricesByDay = (
    filteredRecordsByDay: TumblerRecordsProps
  ) => {
    if (!filteredRecordsByDay.length) {
      return 0;
    }

    return filteredRecordsByDay.reduce(
      (acc: number, record: TumblerRecordProps) => acc + record.prices,
      0
    );
  };

  const generateCalendarRecords = (date: Date, view: ViewProps) => {
    if (view !== 'month') {
      return;
    }
    const filteredRecordsByDay = filterTumblerRecordsByDay(
      date,
      data?.tumblerRecords.tumblerRecords
    );

    if (filteredRecordsByDay?.length) {
      return (
        <Style.CalendarContent>
          <Style.ColoredTumbler
            variation={handleVariation(
              handleTumblerVariant(filteredRecordsByDay.length)
            )}
          />
          <Typography
            size='caption'
            variant={handleTumblerVariant(filteredRecordsByDay.length)}
          >
            {calculateTotalPricesByDay(filteredRecordsByDay)}원
          </Typography>
        </Style.CalendarContent>
      );
    }
  };

  return (
    <Style.CalendarWrapper>
      <Calendar
        locale='ko'
        calendarType='US'
        formatDay={(_, date) => date.getDate().toString()}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) => generateCalendarRecords(date, view)}
      />
      {sheetState && (
        <ReactPortal>
          <BottomSheet />
        </ReactPortal>
      )}
    </Style.CalendarWrapper>
  );
}
