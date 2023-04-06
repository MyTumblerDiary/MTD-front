import styled from 'styled-components';
import { Button } from '@/components/Common/Button/Button.style';
import { SocialLoginButtonTheme } from './SocialLoginButton';

interface SocialLoginButtonStyleProps {
  buttonTheme: SocialLoginButtonTheme;
}

export const SocialButton = styled(Button)<SocialLoginButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ buttonTheme }) => buttonTheme.backgroundColor};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

  svg {
    margin-right: 8px;
  }
`;
