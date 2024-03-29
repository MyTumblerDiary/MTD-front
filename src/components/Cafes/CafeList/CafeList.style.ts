import styled from 'styled-components';

export const CafeListWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 0px 20px;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 590px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  gap: 15px;
`;

export const CafeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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

export const CafeThumbnail = styled.div`
  width: 100%;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
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

export const EmptyDataWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 20px;
`;

export const EmptyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px 15px;
  border-radius: 12px;
  background-color: #ffffff;
`;
