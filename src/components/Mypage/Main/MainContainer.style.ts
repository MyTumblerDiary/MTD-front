import styled from 'styled-components';
import theme from '@/styles/theme';

export const MypageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.color.g100};
`;

export const MainContainer = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentContainer = styled.div`
  padding: 0 20px;
  background-color: #fff;
  border-radius: 12px;
`;

export const NicknameContainer = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

export const SubInfoContainer = styled(ContentContainer)``;

export const SubInfo = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: center;

  span {
    display: inline-block;
    margin-left: 12px;
    flex: 1;
  }

  svg:nth-child(3) {
    transform: scaleX(-1);
  }
`;
