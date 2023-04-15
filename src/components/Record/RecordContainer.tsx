import React, { useState } from 'react';

import SubTitle from '../Common/Heading/SubTitle';
import Title from '../Common/Heading/Title';
import Typography from '../Common/Typography/Typography';
import RecordDatePicker from './DatePicker/RecordDatePicker';
import TumblerImage from './TumblerImage/TumblerImage';

import * as Style from './RecordContainer.style';

const RecordContainer = () => {
  const [recordDate, setRecordDate] = useState(new Date());
  const [previewImage, setPreviewImage] = useState('');

  const RecordDatePickerProps = {
    recordDate,
    setRecordDate
  };

  const TumblerImageProps = {
    previewImage,
    setPreviewImage
  };

  return (
    <Style.Container>
      <Style.PageTitleContainer>
        <SubTitle>캘린더 기록하기</SubTitle>
      </Style.PageTitleContainer>

      <Style.ElementContainer>
        <Title variant='main'>날짜</Title>
        <RecordDatePicker {...RecordDatePickerProps} />
      </Style.ElementContainer>

      <Style.ElementContainer>
        <Title variant='main'>텀블러 이미지</Title>
        <Typography size='body3' variant='gray2'>
          이미지는 1장만 넣을 수 있습니다.
        </Typography>
        <TumblerImage {...TumblerImageProps} />
      </Style.ElementContainer>
    </Style.Container>
  );
};

export default RecordContainer;
