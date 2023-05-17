import styled from 'styled-components';

export const SheetWrapper = styled.div`
  position: relative;
  width: 100vw;
  max-height: 560px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 6px;
  overflow: scroll;
  padding: 0 18px 30px 18px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #ffffff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
