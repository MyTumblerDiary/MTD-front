import styled from 'styled-components';

export const BottomSheetWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SheetBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  animation: sheet-show 0.5s;
  @keyframes sheet-show {
    from {
      margin-bottom: -260px;
    }
    to {
      margin-bottom: 0;
    }
  }
`;

export const SheetContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(1px);
  animation: sheet-bg-show 0.5s;
  @keyframes sheet-bg-show {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Close = styled.button`
  margin: 0;
  padding: 0;
  position: absolute;
  right: 22px;
  top: 26px;
  width: 62px;
  height: 26px;
  cursor: pointer;
  background-color: rgba(18, 184, 134, 0.12);
  border-radius: 20px;
`;
