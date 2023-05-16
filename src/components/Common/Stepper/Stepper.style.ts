import styled from 'styled-components';

interface StepProps {
  isActive: boolean;
}

interface StepLineProps {
  isActive: boolean;
}

export const StepperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Step = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin: 0;
  padding: 0;
`;

export const StepCircle = styled.div<StepProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.isActive ? '#12B886' : '#e4e4e4')};
  border-radius: 99%;

  transition: background-color 0.4s, transform 2s;
`;

export const StepLine = styled.div<StepLineProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  margin: auto;
  border-top: 1px solid ${(props) => (props.isActive ? '#12B886' : '#e4e4e4')};
  transition: border-color 0.4s, transform 2s;
`;

export const Label = styled.div`
  display: flex;
  margin: auto;
`;

export const StepContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
  gap: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
`;
