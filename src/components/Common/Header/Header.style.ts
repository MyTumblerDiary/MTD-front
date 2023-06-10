import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const BackButton = styled.div`
  position: absolute;
  left: 10px;
  width: 36px;
  height: 36px;
`;
