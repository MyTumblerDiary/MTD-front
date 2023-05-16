import styled from 'styled-components';

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const DiaryRecord = styled.div`
  display: flex;
  gap: 20px;
`;

export const RecordImage = styled.img`
  border-radius: 20px;
  width: 100px;
  height: 100px;
`;

export const RecordInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RecordInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RecordAmount = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const RecordButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  background: #e4e4e4;
  height: 1px;
  border: 0;
`;
