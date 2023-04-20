import styled from 'styled-components';

export const DataCardList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  padding: 0px 20px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 90px;
  gap: 12px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  span {
    line-height: 1.4;
    word-break: keep-all;
  }
`;

export const CardIconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  svg {
    width: 40px;
    height: 40px;
  }
`;
