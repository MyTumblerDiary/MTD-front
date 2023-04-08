import styled from 'styled-components';

import Input from '@/components/Common/Input/Input';

export const UserNameInput = styled(Input)`
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
