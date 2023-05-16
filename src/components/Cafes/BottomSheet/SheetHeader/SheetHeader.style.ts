import styled from 'styled-components';

export const SheetHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 12px;
  background-color: #ffffff;
`;

export const SheetDateInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SheetTitle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
