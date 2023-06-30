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

export const RecordImage = styled.div`
  width: 150px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
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
  gap: 16px;
`;

export const RecordHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RecordAmount = styled.div`
  display: flex;
  justify-content: flex-end;
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
