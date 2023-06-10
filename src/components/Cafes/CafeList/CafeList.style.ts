import styled from 'styled-components';

export const CafeListWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 0px 20px;
  place-items: center;
  grid-template-columns: repeat(2, fit-content(170px));

  @media screen and (min-width: 590px) {
    grid-template-columns: repeat(3, fit-content(170px));
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, fit-content(170px));
  }

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
  width: 100%;
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
