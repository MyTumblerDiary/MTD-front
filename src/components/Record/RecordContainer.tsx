import { useState } from 'react';

import SubTitle from '../Common/Heading/SubTitle';
import Title from '../Common/Heading/Title';
import RecordDatePicker from './DatePicker/RecordDatePicker';

import * as Style from './RecordContainer.style';

const RecordContainer = () => {
  const [recordDate, setRecordDate] = useState(new Date());

  return (
    <Style.Container>
      <Style.PageTitleContainer>
        <SubTitle>캘린더 기록하기</SubTitle>
      </Style.PageTitleContainer>
      <Style.TitleContainer>
        <Title variant='main'>날짜</Title>
      </Style.TitleContainer>
      <RecordDatePicker recordDate={recordDate} setRecordDate={setRecordDate} />
    </Style.Container>
  );
};

export default RecordContainer;
