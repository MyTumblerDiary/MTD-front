import styled from 'styled-components';

import Input from '@/components/Common/Input/Input';

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Email = styled.div`
  position: relative;
`;

export const EamilButtonWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;

  @keyframes fadeIn {
    from {
      opacity: 30%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const EmailCheckWrapper = styled.div`
  position: relative;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-timing-function: ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const EmailInput = styled(Input)`
  animation-name: fadeIn;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;

  @keyframes fadeIn {
    from {
      opacity: 30%;
    }
    to {
      opacity: 100%;
    }
  }
`;
