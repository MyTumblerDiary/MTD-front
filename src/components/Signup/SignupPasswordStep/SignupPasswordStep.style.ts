import styled from 'styled-components';

import Input from '@/components/Common/Input/Input';

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PasswordInput = styled(Input)`
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
