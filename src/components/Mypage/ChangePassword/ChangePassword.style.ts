import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;

  padding: 0 10px;
  margin-bottom: 40px;
`;

export const BackButton = styled.div`
  width: 36px;
  height: 36px;
`;

export const AllInputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
