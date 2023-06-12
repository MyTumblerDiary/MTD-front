import svg from '@/components/svg';

import styled from 'styled-components';

interface ColoredTumblerProps {
  variation: string;
}

export const CalendarWrapper = styled.div`
  .react-calendar {
    width: 100%;
    background-color: #fff;
    color: #222;
    border: none;
    padding: 6px;
    border-radius: 12px;
  }
  .react-calendar__navigation button {
    color: #70a9a1;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70px;
  }

  .react-calendar__month-view__days__day {
    color: black;
  }

  .react-calendar__year-view__months__month {
    color: black;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  /* .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  } */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #70a9a1;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #70a9a133;
    border-radius: 6px;
    font-weight: bold;
    color: #70a9a1;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #70a9a133;
    border-radius: 6px;
    font-weight: bold;
    color: #70a9a1;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #70a9a1;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #70a9a1;
    color: white;
  }
  @media (hover: hover) and (pointer: fine) {
    /* when supported */
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #70a9a1;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-radius: 6px;
    background: #70a9a1;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-radius: 6px;
    background: #70a9a1;
    color: white;
  }
`;

export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  gap: 4px;
`;

export const ColoredTumbler = styled(svg.TumblerMaterial)<ColoredTumblerProps>`
  path {
    fill: ${(props) => props.variation};
  }
`;
