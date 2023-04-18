import { useEffect, useState } from 'react';

import * as Style from './AuthTimer.style';

import Svg from '@/components/svg';
import Typography from '@/components/Common/Typography/Typography';

interface AuthTimerProps {
  initialTime: number;
  handleReload: () => void;
}

export default function AuthTimer({
  initialTime,
  handleReload = () => {}
}: AuthTimerProps) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const Counter = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(Counter);
    }
  }, [time]);

  const timeFormat = (time: number) => {
    const m = Math.floor(time / 60).toString();
    let s = (time % 60).toString();
    if (s.length === 1) {
      s = `0${s}`;
    }
    return `${m}:${s}`;
  };

  if (time === 0) {
    return (
      <Style.ReloadButton type='button' name='reload' onClick={handleReload}>
        <Typography size='caption' variant='warning'>
          다시 인증하기
        </Typography>
        <Svg.Reload />
      </Style.ReloadButton>
    );
  }

  return (
    <Typography size='caption' variant='error'>
      남은시간 {timeFormat(time)}
    </Typography>
  );
}
