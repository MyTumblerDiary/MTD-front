import styled from 'styled-components';

export const CafeListWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 0px 20px;
  place-items: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(170px, auto));
  gap: 15px;
`;

export const CafeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const CafeSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CafeThumbnail = styled.img`
  width: 150px;
  height: 120px;
  border-radius: 12px;
`;

export const CafeTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const CafeDiscountAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Target = styled.div`
  height: 10px;
`;
