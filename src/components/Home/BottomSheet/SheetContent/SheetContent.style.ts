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
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RecordInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RecordButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const RecordMofidyButton = styled.button`
  margin: 0;
  padding: 0;
  width: 80px;
  height: 26px;
  background-color: rgba(255, 216, 59, 0.1);
  border-radius: 8px;
`;

export const RecordDeleteButton = styled.button`
  margin: 0;
  padding: 0;
  width: 80px;
  height: 26px;
  background-color: rgba(240, 0, 1, 0.1);
  border-radius: 8px;
`;

export const HorizontalRule = styled.hr`
  width: 100%;
  background: #e4e4e4;
  height: 1px;
  border: 0;
`;
