import styled from 'styled-components';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 58px;
`;

export const DiscountInformationContainer = styled.div`
  width: 100%;
  padding: 22px 20px;
  background-color: ${theme.color.g100};
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const ReportContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 20px;
  gap: 15px;
`;

export const ReportTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

export const ReportAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const Texttest = styled.p`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
